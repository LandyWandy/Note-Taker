const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

exports.getNotes = (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
};

exports.createNote = (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();

  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2), (err) => {
      if (err) throw err;
      res.json(newNote);
    });
  });
};

exports.deleteNote = (req, res) => {
    const noteId = req.params.id;
  
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
      const updatedNotes = notes.filter(note => note.id !== noteId);
  
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(updatedNotes, null, 2), (err) => {
        if (err) throw err;
        res.json({ message: 'Note deleted successfully' });
      });
    });
  };
  