const Query = {
    allrecipes: async (parent, {}, {recipeModel}) => {
        const recipes = await recipeModel.find({});
        return recipes;
    },

    recipes: async (parent, {ingredients}, {recipeModel}) => {
        const projection = "id title image_url ingredients tags";
        const recipes = await recipeModel.find({}, projection);

        return recipes.filter((recipe) => {
            for (const description of recipe.ingredients) {
                for (var ingredient of ingredients) {
                    if (description.includes(ingredient))
                        return true;
                }
            }
            return false;
        }).map((recipe) => {
            recipe.ingredients = null;
            return recipe;
        });
    },

    recipe: async (parent, {id}, {recipeModel}) => {
        return await recipeModel.findOne({id: id});
    }
};

export default Query;