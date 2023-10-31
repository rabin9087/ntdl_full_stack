import TaskSchema from "./TaskSchema.js";

//CRUD
//Create
export const insertTask = (taskObj) => {
    return TaskSchema(taskObj).save();
}

//Read

export const getAllTask = () => {
    return TaskSchema.find();
}

//Update

//@_id id ID staring, @data is an object
export const switchTask = (_id, data) => {
    return TaskSchema.findByIdAndUpdate(_id, data, {new: true})
}

//delete

export const deleteTask = (_id) => {
return TaskSchema.findByIdAndDelete(_id);
}
//delete many
export const deleteManyTask = (ids) => {
    return TaskSchema.deleteMany({_id: {$in: ids}});
    }