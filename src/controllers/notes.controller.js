const Note = require('../models/note.model');
const Version = require('../models/version.model');

/**
 * GET /notes/all
 */
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find()
      .select('title content currentVersion updatedAt createdAt')
      .lean();

    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

/**
 * GET /notes/:id
 */
exports.getNote = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id).populate({
      path: 'versions',
      options: { sort: { versionNumber: -1 } }
    }).lean();

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch note' });
  }
};
