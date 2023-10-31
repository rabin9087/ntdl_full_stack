import express from 'express';
import { connectMongo } from './src/config/dbConfig.js';
import { deleteManyTask, deleteTask, getAllTask, insertTask, switchTask } from './src/model/TaskModel.js';
import cors from 'cors';


const app = express();
const PORT = 8000;

app.use(express.json());

connectMongo();
app.use(cors());

app.get("/api/v2/task", async(req, res) => {

    const taskList = await getAllTask();
    res.json({
        status: "success",
        message: "Get method",
        taskList
    })
})
app.post("/api/v2/task", async (req, res) => {
    const result = await insertTask(req.body);

    result?. _id ? 
    res.json({
        status: "success",
        message: "New task has been added",
    }) 
    : res.json({
        status: "success",
        message: "Error, unable to add the task, try again later",
    })
})

app.patch("/api/v2/task", async(req, res) => {
    const {_id, type} = req.body;

   const result = await switchTask(_id, {type})
    console.log(req.body, result);

    result?. _id ? 
    res.json({
        status: "success",
        message: "Task has been updated",
    }) 
    : res.json({
        status: "success",
        message: "Error, unable to update the task, try again later",
    })

})

// app.delete("/api/v2/task/:_id", async(req, res) => {
//     const {_id} = req.params;

//     const result = await deleteTask(_id);
//     result?. _id ? 
//     res.json({
//         status: "success",
//         message: "Task has been deleted successfully",
//     }) 
//     : res.json({
//         status: "success",
//         message: "Error, unable to delete the task, try again later",
//     })
// })

app.delete("/api/v2/task/", async(req, res) => {
     const {ids} = req.body
     console.log(ids)
 
         const result = await deleteManyTask(ids);

     result?.deletedCount ? 
     res.json({
         status: "success",
         message: "All selected tasks has been deleted successfully",
     }) 
     : res.json({
         status: "success",
         message: "Nothing to delete, try again later",
     })
 })

app.get("/", (req, res) => {
    res.json({
        message: "Server is running normally"
    })
})

app.listen(PORT, (error) =>{
    error? console.log(error):
    console.log("Your server is running at http://localhost:" + PORT)
})
