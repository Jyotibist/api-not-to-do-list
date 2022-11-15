import express from 'express'
import { getTasks, insertTask, updateTasks, deleteTasks } from '../models/task/TaskModel.js';
const router = express.Router();

// fake database
// let fakeTaskTable = [
//     {
//         _id: 1,
//         "task": "coding",
//         "hr": 45,
//     },
//     {
//         _id: 2,
//         "task": "watchin TV",
//         "hr": 10,
//     },
//     {
//         _id: 3,
//         "task": "cooking",
//         "hr": 15,
//     },


// ];

//  workflow : CRUD
// C(create) => receive new task and store in the database
router.post("/", async(req, res) => {
    
  try {
    console.log(req.body);
    const result = await insertTask(req.body);
    console.log(result);
   
  res.json({ status:"success", message: "new task has been added" });
    
  } catch (error) {
    console.log(error);
    res.json({
        status: "error",
        message: error.message
    });
    
  }
});

// R(Read) => read data from data base and return to the client
router.get("/", async(req, res) => {
    // database quert to get all the task
    const data = await getTasks();

  res.json({ 
    status: "success",
    message: "here are the available list",
    data,
});
    
});

// U(Update) => update some information of existing data int he database and respond client accordingly
router.put("/", async(req, res) => {
    const {_id, type}= req.body;
    console.log(req.body);
   const obj = {type:type}
   const result = await updateTasks(_id,{type})
//    console.log(result)
   if(result._id){

    res.json({ message: "The task has been updated", status:"success" });
   }
   else{
    res.json({ message: "Nothing deleted", status:"success" });
   };
  
});

//D(Delete) => Delete data(s) from database and response client accordingly
router.delete("/", async(req, res) => {
    // console.log(req.body);
    const _ids = req.body;
    
     const result = await deleteTasks(_ids);
     console.log(result);

     if(result?.deletedCount){

        res.json({ 
            status: "success",
            message: "The selected task has been deleted" })
     }else{
        res.json({
            status: "success",
            message: "Nothing to delete"  
        })
     }
    
    
});

export default router ;