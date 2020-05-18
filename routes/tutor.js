const express = require('express');
const router = express.Router();

const tutorController = require('../controllers/tutor');

router.get('/tutors', tutorController.getTutors);

router.get('/tutors/:id', tutorController.getTutor)

router.get('/tutors?sort=firstName&order=asc', tutorController.getTutorByfirstName);


module.exports = router;