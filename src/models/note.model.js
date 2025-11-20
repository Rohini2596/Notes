const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
  title: { type: String, default: '' },
  content: { type: String, default: '' }, // latest content cached for quick reads
  currentVersion: { type: Number, default: 0 },
  versions: [{ type: Schema.Types.ObjectId, ref: 'Version' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = model('Note', NoteSchema);
