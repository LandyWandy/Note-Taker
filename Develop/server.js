const express = require('express');
const path = require('path');
const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes');
const router = require('./routes/noteRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoutes);
app.use(router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
