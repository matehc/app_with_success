const express = require('express');

const studentController = require('../controllers/student');

const router = require('express').Router();


// todo Add functionality to student controller and link in route below
router.get('/students', studentController.getStudents);

// todo Add functionality to student controller and link in route below
router.get('/students/:id', studentController.getStudent);