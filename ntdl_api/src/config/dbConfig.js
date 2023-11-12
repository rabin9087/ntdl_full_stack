import mongoose from "mongoose";
// const MONGO_CONNECT_URL = mongodb://127.0.0.1:27017/ntd_db
// const MONGO_URL = "mongodb+srv://rabin9087:Cricket9087@cluster0.t1c8zv2.mongodb.net/?retryWrites=true&w=majority"

export const connectMongo = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL);
        conn && console.log("Mongo connected")
    } catch (error) {
        console.log(error)
    }
}