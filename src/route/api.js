const express=require('express');
const Student=require('../controller/StudentController');
const router=express.Router();

router.post("/create-student",Student.createStudent);
router.get("/delete-student/:id",Student.deleteStudent);
router.post("/update-student/:id",Student.updateStudent);
router.get("/list-student",Student.listStudent);
router.get("/student-by-id/:id",Student.studentByID);




module.exports=router;