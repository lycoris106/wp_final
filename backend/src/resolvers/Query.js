const Query = {
    allrecipes: async (parent, {}, {recipeModel}) => {
        const recipes = await recipeModel.find({});
        return recipes;
    },

    recipes: async (parent, {ingredients}, {recipeModel}) => {
        const projection = "id title image_url ingredients tags";
        let recipes = await recipeModel.find({}, projection);

        recipes =  recipes.filter((recipe) => {
            for (const description of recipe.ingredients) {
                for (var ingredient of ingredients) {
                    if (description.toLowerCase().includes(ingredient.toLowerCase()))
                        return true;
                }
            }
            return false;
        }).map((recipe) => {
            recipe.ingredients = null;
            return recipe;
        });

        for (let i = 0, n = recipes.length; i < n; i++) {
            recipes[i].prev = recipes[(i + n - 1)%n].id;
            recipes[i].next = recipes[(i + 1)%n].id;
        }
        return recipes;
    },

    recipe: async (parent, {id, ingredients}, {recipeModel}) => {
        let recipe = await recipeModel.findOne({id: id});
        if (!recipe)
            return null;
        recipe.matches = recipe.ingredients.map((description) => {
            for (var ingredient of ingredients)
                if (description.toLowerCase().includes(ingredient.toLowerCase()))
                    return true;
            return false;
        })
        return recipe;
    }
};

export default Query;