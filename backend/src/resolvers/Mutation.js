import {v1 as uuidv1} from 'uuid';

const Mutation =  {
    createRecipe: async (parent, {input}, {recipeModel, pubSub}) => {
        console.log('createRecipe');

        if (!input.id)
            input.id = uuidv1().replaceAll("-", "");
        
        while (await recipeModel.findOne({id: input.id}))
            input.id = uuidv1().replaceAll("-", "");

        const createdRecipe = new recipeModel(input);
        await createdRecipe.save();

        pubSub.publish("RECIPE_CREATED", {
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
        pubSub.publish("RECIPE_UPDATED", {
            recipeUpdated: updatedRecipe,
        });
        return updatedRecipe;
    },

    deleteRecipe: async (parent, { id }, {recipeModel, pubSub}) => {
        console.log('deleteRecipe');
        if (! await recipeModel.findOne({ id }))
            return null;
        await recipeModel.deleteOne({ id });

        pubSub.publish("RECIPE_DELETED", {
            recipeDeleted: id,
        });
        return id;
    }
}

export default Mutation;