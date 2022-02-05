const express = require("express")
const cors = require("cors")

const app = express();
app.use(express.json())


const pool = require("./db")

app.use(cors());

// app.get("/users",async (req,res)=>{
//     try {
//         const {name} = req.query;
//         const users = await pool.query("SELECT * FROM users WHERE first_name || ' ' || last_name ILIKE $1",[`%${name}%`]);

//         res.json(users.rows)
        
//     } catch (error) {
//         console.log(error.message);
//     }
// })

app.use("/dashboard",require("./routes/dashboard"))


const port = 5000;


app.listen(port, ()=>console.log(`app listening on port ${port}`))