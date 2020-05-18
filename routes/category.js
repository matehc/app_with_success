const express = require('express');

const categoryController = require('../controllers/category');

const router = express.Router();

// todo Add functionality to category controller and link in route below
router.get('/categories', categoryController.getCategories);

// todo Add functionality to 'search category by id' controller and link in route below
router.get('/categories/:id', categoryController.getCategory);

