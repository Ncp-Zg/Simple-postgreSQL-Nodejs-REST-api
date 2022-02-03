const {Router} = require('express');
const { getStudents,getStudentById,addStudent } = require('./controller');

const router = Router();

router.get("/",getStudents)
router.get("/:id",getStudentById)
router.post("/",addStudent)

module.exports = router;