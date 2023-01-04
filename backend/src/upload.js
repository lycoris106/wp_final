import recipeModel from './models/recipe.js'
import userModel from './models/user.js'
import recipes from './recipes.js'

const dataInit = async () => {
    await userModel.deleteMany({});
    await recipeModel.deleteMany({});
    await recipeModel.insertMany(recipes);
    console.log("database initialized!");
};

export { dataInit };