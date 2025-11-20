const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/notes.controller');

router.get('/notes/all', ctrl.getAllNotes);
router.get('/notes/:id', ctrl.getNote);

module.exports = router;
