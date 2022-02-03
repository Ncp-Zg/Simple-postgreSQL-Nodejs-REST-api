const {Router} = require('express');
const { getStudents,getStudentById,addStudent,removeStudent,updateStudent } = require('./controller');

const router = Router();

router.get("/",getStudents)
router.get("/:id",getStudentById)
router.post("/",addStudent)
router.put("/:id",updateStudent)
router.delete("/:id",removeStudent)

module.exports = router;