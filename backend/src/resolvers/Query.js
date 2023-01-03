const Query = {
    recipes: async (parent, {ingredients}, {recipeModel}) => {
        console.log('query recipes with', ingredients);
        let recipes =  (await recipeModel.find({}, "id title image_url ingredients tags")).filter((recipe) => {
            for (var ingredient of recipe.ingredients) {
                for (var keyword of ingredients) {
                    if (ingredient.content.toLowerCase().includes(keyword.toLowerCase()))
                        return true;
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
            const R = (right.ingredients.filter(ingredient => ingredient.match)).length;
            const L = (left.ingredients.filter(ingredient => ingredient.match)).length;
            return R - L;
        });

        // for (var recipe of recipes) {
        //     let cnt = 0;
        //     for (var ingredient of recipe.ingredients) {
        //         if (ingredient.match)
        //             cnt++;
        //     }
        //     process.stdout.write(`${cnt} `)
        // }

        recipes = recipes.slice(0, Math.min(recipes.length, 100));
        for (var i = 0, n = recipes.length; i < n; i++) {
            recipes[i].prev = recipes[(i - 1 + n)%n].id;
            recipes[i].next = recipes[(i + 1)%n].id;
        }
        return recipes;
    },

    recipe: async (parent, {id}, {recipeModel}) => {
        console.log('query recipe', id);
        return await recipeModel.findOne({id: id}, "content instructions time");
    }
};

export default Query;