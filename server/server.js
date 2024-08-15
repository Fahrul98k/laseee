const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the webfg/build directory
app.use(express.static(path.join(__dirname, '../lase/build')));

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../lase/build/index.html'));
});

// Endpoint to handle POST requests and save uname to echo.txt
app.post('/submit', (req, res) => {
    const uname = req.body.uname;
    if (uname) {
        fs.appendFile(path.join(__dirname, 'echo.txt'), uname + '\n', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                res.status(500).send('Error writing to file');
                return;
            }
            res.send('Name saved successfully');
        });
    } else {
        res.status(400).send('No name provided');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
