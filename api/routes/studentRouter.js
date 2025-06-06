const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');


router.get('/', studentController.getStudent);

router.get('/:id', studentController.getStudentById);

router.post('/', studentController.postStudent);

router.put('/:id', studentController.putStudent);

router.delete('/:id', studentController.deleteStudent);

module.exports = router;