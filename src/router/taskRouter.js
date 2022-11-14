import express from 'express'
const router = express.Router();

// fake database
let fakeTaskTable = [
    {
        _id: 1,
        "task": "coding",
        "hr": 45,
    },
    {
        _id: 2,
        "task": "watchin TV",
        "hr": 10,
    },
    {
        _id: 3,
        "task": "cooking",
        "hr": 15,
    },


];

//  workflow : CRUD
// C(create) => receive new task and store in the database
router.post("/", (req, res) => {
    console.log(req.body);
    fakeTaskTable.push(req.body);
  res.json({ status:"success", message: "new task has been added" });
});

// R(Read) => read data from data base and return to the client
router.get("/", (req, res) => {

  res.json({ 
    status: "success",
    message: "here are the available list",
    data: fakeTaskTable,
});
    
});

// U(Update) => update some information of existing data int he database and respond client accordingly
router.put("/", (req, res) => {
    const {_id, type}= req.body;
    console.log(req.body);
    fakeTaskTable = fakeTaskTable.map((item)=>{
        if(item._id === _id){
            item.type = type;
        }
        return item;
    });
  res.json({ message: "todo put method", status:"success" });
});

//D(Delete) => Delete data(s) from database and response client accordingly
router.delete("/:_id?", (req, res) => {
    // console.log(req.body);
    const { _id } = req.params;

    if(!_id){
        res.status(400).json({
            status: "error",
            message: "invalid request, _id is missing",

        });
        return;
    }
    // console.log(req.params);
    fakeTaskTable = fakeTaskTable.filter((item)=>item._id!=_id);
    res.json({ 
    status: "success",
    message: "The selected task has been deleted" });
});

export default router ;