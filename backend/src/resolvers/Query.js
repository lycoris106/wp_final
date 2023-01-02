const Query = {
    allrecipes: async (parent, {}, {recipeModel}) => {
        return await recipeModel.find({}, "id title image_url ingredients tags");
    },

    recipes: async (parent, {ingredients}, {recipeModel}) => {
        const recipes =  (await recipeModel.find({}, "id title image_url ingredients tags")).filter((recipe) => {
            for (const description of recipe.ingredients) {
                for (var ingredient of ingredients) {
                    if (description.toLowerCase().includes(ingredient.toLowerCase()))
                        return true;
                }
            }
            return false;
        }).map((recipe) => {
            const n = recipe.ingredients.length;
            recipe.matches = Array(n).fill(false);
            for (let i = 0; i < n; i++) {
                for (var ingredient of ingredients) {
                    if (recipe.ingredients[i].toLowerCase().includes(ingredient.toLowerCase())) {
                        recipe.matches[i] = true;
                        break;
                    }
                }
            }
            recipe.ingredients = null;
            return recipe;
        });

        const n = recipes.length;
        return recipes.map((recipe, index, recipes) => {
            recipe.prev = recipes[(index + n - 1)%n].id;
            recipe.next = recipes[(index + 1)%n].id;
            return recipe;
        })
    },

    recipe: async (parent, {id}, {recipeModel}) => {
        return await recipeModel.findOne({id: id}, "content instructions ingredients time");
    }
};

export default Query;