import bcrypt from "bcrypt";
import {v1 as uuidv1} from 'uuid';

const Mutation =  {
    createRecipe: async (parent, {input}, {recipeModel, pubSub}) => {
        console.log('createRecipe');

        input.id = uuidv1().replaceAll("-", "");
        while (await recipeModel.findOne({id: input.id}))
            input.id = uuidv1().replaceAll("-", "");
        
        let nextRecipe = await recipeModel.findOne({}, "prev id");

        input.next = nextRecipe.id
        input.prev = nextRecipe.prev;
        if (input.ingredients) {
            input.ingredients.map((ingredient) => {
                ingredient.match = false;
                return ingredient;
            })
        }

        const createdRecipe = new recipeModel(input);
        await createdRecipe.save();
        
        nextRecipe.prev = input.id;
        await nextRecipe.save();

        pubSub.publish('RECIPE_CREATED', {
            recipeCreated: createdRecipe,
        });
        return createdRecipe;
    },

    updateRecipe: async (parent, {input}, {recipeModel, pubSub}) => {
        console.log('updateRecipe');
        if (! await recipeModel.findOne({id: input.id}))
            return null;
        await recipeModel.updateOne({id: input.id}, input);

        const updatedRecipe = await recipeModel.findOne({id: input.id});
        pubSub.publish('RECIPE_UPDATED', {
            recipeUpdated: updatedRecipe,
        });
        return updatedRecipe;
    },

    deleteRecipe: async (parent, {id}, {recipeModel, pubSub}) => {
        console.log('deleteRecipe');
        if (! await recipeModel.findOne({id}))
            return null;
        let deletedRecipe = await recipeModel.findOne({id}, "prev next");
        let prevRecipe = await recipeModel.findOne({id: deletedRecipe.prev}, "next");
        let nextRecipe = await recipeModel.findOne({id: deletedRecipe.next}, "prev");

        prevRecipe.next = deletedRecipe.next;
        nextRecipe.prev = deletedRecipe.prev;

        await prevRecipe.save();
        await nextRecipe.save();
        await recipeModel.deleteOne({id});

        pubSub.publish('RECIPE_DELETED', {
            recipeDeleted: id,
        });
        return id;
    },

    createUser: async (parent, {name, password}, {userModel, saltRounds}) => {
        const user = await userModel.findOne({name});
        if (user)
            return {ok: false, error: 'User exist'};

        const createdUser = await new userModel({
            token: await uuidv1().replaceAll("-", ""),
            name: name,
            password: await bcrypt.hash(password, saltRounds),
            contributions: [],
            favorites: [],
        }).save();

        return {
            ok: true,
            user: createdUser
        }
    },

    loginUser: async (parent, {name, password}, {userModel, saltRounds}) => {
        const user = await userModel.findOne({name}); 
        if (!user)
            return {ok: false, error: "User doesn't exist"};
        if (! await bcrypt.compare(password, user.password))
            return {ok: false, error: "Wrong password"};
        user.token = uuidv1().replaceAll("-", "");
        user.save();
        return {ok: true, user: user};
    },

    updateUser: async (parent, {input}, {userModel}) => {
        const user = await userModel.findOne({name: input.name});

        // if (!user)
        //     return {ok: false, error: "User doesn't exist"};
        
        // if (user.token !== input.token)
        //     return {ok: false, error: "User forced logout"};

        user.contributions.push(input.contribution);
        user.favorites.push(input.favorite);
        user.save();
        return {ok: true, user: user};
    }
}

export default Mutation;