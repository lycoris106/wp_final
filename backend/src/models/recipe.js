import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true},
        title: { type: String, required: true, unique: true},
        content: { type: String, required: true},
        image_url: { type: String, required: true},
        ingredients: { type: [String], required: true},
        instructions: [{ 
            title: { type: String, required: true},
            content: { type: [String], required: true}
        }],
        tags: { type: [String], required: true},
        difficulty: { type: String, required: true},
        time: {
            preparation: { type: String, required: true},
            cook: { type: String, required: true},
            cleanup: { type: String, required: true},
        }
    },
    {
        collection: "recipe",
    }
);

export default mongoose.model("recipe", recipeSchema);