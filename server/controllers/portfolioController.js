const { inMemoryDB } = require('../config/db');

// Get all projects
exports.getProjects = async (req, res) => {
    try {
        res.json(inMemoryDB.projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get all skills
exports.getSkills = async (req, res) => {
    try {
        res.json(inMemoryDB.skills);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Seed route for initial content, just for testing
exports.seedData = async (req, res) => {
    try {
        res.json({ msg: 'Database already seeded with in-memory data' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
