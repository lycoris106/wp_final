import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true},
        title: { type: String, required: true},
        content: { type: String, required: false},
        image_url: { type: String, required: false},
        ingredients: { type: [String], required: false},
        instructions: [{ 
            title: { type: String, required: false},
            contents: { type: [String], required: false}
        }],
        tags: { type: [String], required: false},
        time: {
            preparation: { type: String, required: false},
            cook: { type: String, required: false},
            cleanup: { type: String, required: false},
        }
    },
    {
        collection: "recipe",
    }
);

export default mongoose.model("recipe", recipeSchema);