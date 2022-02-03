const Pool = require("pg").Pool;
require("dotenv").config()

const pool = new Pool({
    user:"postgres",
    password:process.env.PWD,
    port:5432,
    host:"localhost",
    database:"users",
})


module.exports=pool;
