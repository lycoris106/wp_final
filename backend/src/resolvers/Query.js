const Query = {
    recipes: async (parent, {ingredients}, {recipeModel}) => {
        let projection = "id title url";
        if (ingredients)
            projection += " ingredients";

        const recipes = await recipeModel.find({}, projection);

        if (!ingredients)
            return recipes;

        if (ingredients) {
            return recipes.filter((recipe) => {
                for (const str of recipe.ingredients) {
                    for (var key of ingredients) {
                        if (str.includes(key))
                            return true;
                    }
                }
                return false;
            })
            .map((recipe) => {
                recipe.ingredients = undefined;
                return recipe;
            });
        }
    },

    recipe: async (parent, {id}, {recipeModel}) => {
        return await recipeModel.findOne({id: id});
    }
};

export default Query;