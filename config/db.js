const Pool = require("pg").Pool;
require("dotenv").config()

const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database:"students",
    password:`${process.env.PWD}`,
    port:5432,
});

module.exports = pool;