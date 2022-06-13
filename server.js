const express = require('express');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const { Note } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
});
