import recipeModel from './models/recipe.js'
import userModel from './models/user.js'

// import recipes from './datas/recipes_.js'
import recipes from './datas/recipes.js'
import users from './datas/users.js'

const dataInit = async () => {
    /* clear database */
    await recipeModel.deleteMany({});
    await userModel.deleteMany({});

    await recipeModel.insertMany(recipes);
    await userModel.insertMany(users);

    console.log("database initialized!");
};

export { dataInit };