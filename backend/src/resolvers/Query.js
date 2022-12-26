const Query = {
    recipes: async (parent, { input }, {recipeModel}) => {
        const recipes = await recipeModel.find().sort();
        
        if (!input)
            return recipes;

        if (input.ingredients) {
            return recipes.filter((recipe) => {
                for (const str of recipe.ingredients) {
                    for (var key of input.ingredients) {
                        if (str.includes(key))
                            return true;
                    }
                }
                return false;
            });
        }
        return recipes;
    }
};

export default Query;