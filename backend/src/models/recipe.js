import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true},
        title: { type: String, required: true, unique: true},
        url: { type: String, unique: true},
        ingredients: { type: [String], required: true},
        instructions: { type: [String], required: true},
    },
    {
        collection: "recipe",
    }
);

export default mongoose.model("recipe", recipeSchema);