const express = require('express');

const subjectController = require('../controllers/subject');

const router = express.Router();

// TODO add functionality to get subject controller and link in route below
router.get('/subjects', subjectController.getSubjects);

// TODO add functionality to 'get all subjects by category id' controller and link in route below
router.get('/subjects/:categoryId', subjectController.getSubject)

// TODO add functionality to 'get subject by id' controller and link in route below
router.get('/subjects/:id', subjectController.getSubjectByCategory)

// TODO add functionality to 'get subject by name' controller and link in route below
router.get('/subjects?sort=name&order=asc', subjectController.getSubjectByName);



module.exports = router;