const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

// Controllers
const portfolioController = require('../controllers/portfolioController');
const contactController = require('../controllers/contactController');

// @route   GET /api/projects
// @desc    Get all projects
router.get('/projects', portfolioController.getProjects);

// @route   GET /api/skills
// @desc    Get all skills
router.get('/skills', portfolioController.getSkills);

// @route   GET /api/seed
// @desc    Seed database with initial data (for developer use)
router.get('/seed', portfolioController.seedData);

// @route   POST /api/contact
// @desc    Submit contact form
router.post('/contact', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty()
], contactController.submitContactForm);

module.exports = router;
