const Query = {
    recipes: async (parent, {ingredients}, {recipeModel}) => {
        const recipes =  (await recipeModel.find({}, "id title image_url ingredients tags")).filter((recipe) => {
            for (var ingredient of recipe.ingredients) {
                for (var keyword of ingredients) {
                    if (ingredient.content.toLowerCase().includes(keyword.toLowerCase())) {
                        console.log(ingredient.content)
                        return true;
                    }
                }
            }
            return false;
        }).map((recipe) => {
            for (var ingredient of recipe.ingredients) {
                for (var keyword of ingredients) {
                    if (ingredient.content.toLowerCase().includes(keyword.toLowerCase())) {
                        ingredient.match = true;
                        break;
                    }
                }
            }
            return recipe;
        }).sort((left, right) => {
            return left.ingredients.filter(ingredient => ingredient.match).length > 
                right.ingredients.filter(ingredient => ingredient.match).length;
        });

        const n = recipes.length;
        return recipes.map((recipe, index, recipes) => {
            recipe.prev = recipes[(index + n - 1)%n].id;
            recipe.next = recipes[(index + 1)%n].id;
            return recipe;
        })
    },

    recipe: async (parent, {id}, {recipeModel}) => {
        return await recipeModel.findOne({id: id}, "content instructions time");
    }
};

export default Query;