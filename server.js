require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/dev', (req, res) => {
  res.render('pages/dev');
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// PORT for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
