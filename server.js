require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;
const activeDir = process.env.MODE === 'development' ? 'public' : 'build';

app.use(express.static(path.join(__dirname, activeDir)));

app.listen(port, () => console.log(`Server running on port ${port}`));