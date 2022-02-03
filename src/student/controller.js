const pool = require("../../config/db");
const queries = require("./queries")


const getStudents = (req,res) => {
    pool.query(queries.getStudents,(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const getStudentById = (req,res) => {
    const id =parseInt(req.params.id);
    pool.query(queries.getStudentById, [id],(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const addStudent = (req,res) => {
    const {name,email,age,dob} =req.body;
    
    pool.query(queries.checkEmailExist, [email], (error, results)=>{
        if(results.rows.length){
            res.send("Email already exist.");
        }

        pool.query(queries.addStudent, [name,email,age,dob], (error,results) => {
            if(error) throw error;
            res.status(201).send("Student created Successfully.")

        })
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent
}