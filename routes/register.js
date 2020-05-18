const router = require('express').Router();
const express = require('express');


const registerController = require('../controllers/register');

// /register/student => POST
router.post('/student', registerController.postAddStudent);

// /register/tutor => POST
router.post('/tutor', registerController.postAddTutor);

// /register/admin => POST
router.post('/admin', registerController.postAddAdmin);


module.exports = router;