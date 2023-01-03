import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        token: {type: String, required: true},
        name: {type: String, required: true, unique: true},
        password: {type: String, required: true},

        contributions: {type: [String], required: false},
        favorites: {type: [String], required: false}
    },
    {
        collection: 'user',
    }
);

export default mongoose.model('user', userSchema);