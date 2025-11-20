const express = require('express');
const app = express();
const notesRoutes = require('./routes/notes.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// basic healthcheck
app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/', notesRoutes);

// error handler (simple)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
