import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true},
        username: { type: String, required: true, unique: true},
        password: { type: String, required: true, unique: false},
    },
    {
        collection: 'user',
    }
);

export default mongoose.model('user', userSchema);