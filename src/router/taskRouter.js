import express from 'express'
const router = express.Router();

//  workflow : CRUD
// C(create) => receive new task and store in the database
router.post("/", (req, res) => {
  res.json({ message: "todo Post method" });
});

// R(Read) => read data from data base and return to the client
router.get("/", (req, res) => {
  res.json({ message: "todo get method" });
});

// U(Update) => update some information of existing data int he database and respond client accordingly
router.put("/", (req, res) => {
  res.json({ message: "todo put method" });
});

//D(Delete) => Delete data(s) from database and response client accordingly
router.delete("/", (req, res) => {
  res.json({ message: "todo delete method" });
});

export default router ;