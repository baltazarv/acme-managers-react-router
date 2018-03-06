const express = require('express');
const app = express();
const path = require('path');
// const router = express.Router();
const db = require('./db');
const { Employee } = db.models;
const port = process.env.PORT || 3000;

db.sync()
  .then(() => db.seed());

// app.use(express.static(path.join(__dirname, 'dist')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/employees', (req, res, next) => {
  Employee.findAll({
    include: [{
     model: Employee,
      as: 'manager'
    }]
  })
  .then(employees => res.send(employees))
  .catch(next);
});

app.listen(port, () => {
  console.log(`Open http://localhost:${port}`)
});
