//all todos and name
const express = require("express");
const pool = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT u.user_name, t.todo_id, t.description FROM users AS u LEFT JOIN todos AS t ON u.user_id = t.user_id WHERE u.user_id = $1",
      ["e2b20fbc-03ee-4969-8b3b-f1f06066f4b9"]
    );

    res.status(200).json(user.rows);
  } catch (error) {}
});

router.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (user_id, description) VALUES ($1,$2) RETURNING *",
      ["e2b20fbc-03ee-4969-8b3b-f1f06066f4b9", description]
    );

    res.status(200).json(newTodo.rows[0]);
  } catch (err) {
      console.log(err.message);
  }
});

router.put("/todos/:id", async (req,res)=>{
    try {
        const {id} =req.params;
        const {description}= req.body;
        const updateTodo = await pool.query(
            "UPDATE todos SET description = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING *",
            [description, id ,"e2b20fbc-03ee-4969-8b3b-f1f06066f4b9"]
        );

        if(updateTodo.rows.length === 0) {
           return res.json("This todo is not yours")
        }

        res.json("Todo was updated");
    } catch (error) {
        console.log(error.message);
        
    }
})

module.exports = router;
