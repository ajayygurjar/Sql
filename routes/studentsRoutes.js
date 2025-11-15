
const express = require('express');
const studentController = require('../controller/studentController.js');
const router = express.Router();

router.post('/add', studentController.addEntries);
router.put('/update/:id',studentController.updateEntry);
router.delete('/delete/:id',studentController.deleteEntry);
router.get('/get',studentController.getStudent)
router.get('/get/:id',studentController.getStudentById);
module.exports = router;
