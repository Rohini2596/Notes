const { Schema, model } = require('mongoose');

const VersionSchema = new Schema({
  noteId: { type: Schema.Types.ObjectId, ref: 'Note', required: true },
  versionNumber: { type: Number, required: true },
  title: { type: String },
  content: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('Version', VersionSchema);
