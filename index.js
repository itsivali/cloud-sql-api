const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const connection = mysql.createConnection({
    host: '34.125.210.250',
    user: 'root',
    password: 'data',
    database: 'Records'
  });
  
  
  connection.connect(err => {
    if (err) {
      console.error('Error connecting to database: ', err);
      return;
    }
    console.log('Connected to database');
  });
  
 
const app = express();
app.use(bodyParser.json());

app.post('/api/records', (req, res) => {
  const record = req.body;
  connection.query('INSERT INTO records SET ?', record, (err, results) => {
    if (err) {
      console.error('Error creating record: ', err);
      res.status(500).json({ error: 'Failed to create record' });
      return;
    }
    res.json({ id: results.insertId });
  });
});


app.get('/api/records', (req, res) => {
  connection.query('SELECT * FROM records', (err, results) => {
    if (err) {
      console.error('Error retrieving records: ', err);
      res.status(500).json({ error: 'Failed to retrieve records' });
      return;
    }
    res.json(results);
  });
});


app.get('/api/records/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM records WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error retrieving record: ', err);
      res.status(500).json({ error: 'Failed to retrieve record' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Record not found' });
      return;
    }
    res.json(results[0]);
  });
});

// Update a record
app.put('/api/records/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  connection.query('UPDATE records SET ? WHERE id = ?', [updates, id], (err, results) => {
    if (err) {
      console.error('Error updating record: ', err);
      res.status(500).json({ error: 'Failed to update record' });
      return;
    }
    res.json({ message: 'Record updated successfully' });
  });
});

// Delete a record
app.delete('/api/records/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM records WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error deleting record: ', err);
      res.status(500).json({ error: 'Failed to delete record' });
      return;
    }
    res.json({ message: 'Record deleted successfully' });
  });
});
app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});












