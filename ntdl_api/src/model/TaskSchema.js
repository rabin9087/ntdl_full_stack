import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    hr: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        default: "entry"
    }
})

export default mongoose.model("Task", tasksSchema); 

