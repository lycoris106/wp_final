import mongoose from "mongoose";
import { dataInit } from "./upload.js";

import "dotenv-defaults/config.js";

mongoose.set("strictQuery", true);

async function connect() {
    const url = process.env.MONGO_URL;
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo database connection created"));

    const db = mongoose.connection;
    db.once("open", () => {
        console.log("Mongo database connected!");
    })

    dataInit();
}

export default { connect };