const Query = {
    recipes: async (parent, args, {recipeModel}) => {
        const recipes = await recipeModel.find().sort();
        return recipes;
    }
};

export default Query;