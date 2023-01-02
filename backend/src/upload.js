import recipeModel from "./models/recipe.js"
import { recipes } from "./recipes.js"

const fake_recipes = [
    // recipe for testing updateRecipe mutation
    {
        "id": "update",
        "title": "update",
        "content": "update",
        "image_url": "update",
        "ingredients": [
            "update",
        ],
        "instructions": [
            {
                "title": "update",
                "contents": [
                    "update",
                ]
            },
            {
                "title": "update",
                "contents": [
                    "update",
                ]
            }
        ],
        "tags": [
            "update",
        ],
        "time": {
            "preparation": "update",
            "cook": "update",
            "cleanup": "update",
        }
    },
    // recipe for testing deleteRecipe mutation
    {
        "id": "delete",
        "title": "delete",
        "content": "delete",
        "image_url": "delete",
        "ingredients": [
            "delete",
        ],
        "instructions": [
            {
                "title": "delete",
                "contents": [
                    "delete",
                ]
            },
            {
                "title": "delete",
                "contents": [
                    "delete",
                ]
            }
        ],
        "tags": [
            "delete",
        ],
        "time": {
            "preparation": "delete",
            "cook": "delete",
            "cleanup": "delete",
        }
    }
];

const dataInit = async () => {
    await recipeModel.deleteMany({});
    await recipeModel.insertMany(fake_recipes);

    /* normal testing */
    await recipeModel.insertMany(recipes.slice(0, 300));

    /* stress testing */
    // await recipeModel.insertMany(recipes);

    console.log("Database initialized!");
};

export { dataInit };