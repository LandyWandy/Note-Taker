const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/api/notes', noteController.getNotes);
router.post('/api/notes', noteController.createNote);

module.exports = router;