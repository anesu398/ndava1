const express = require('express');
const fs = require('fs');
const app = express();

app.get('/visitor-count', (req, res) => {
    // Read the visitor count from a file
    fs.readFile('visitors.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }

        let count = parseInt(data) || 0;
        count += 1;

        // Update the visitor count in the file
        fs.writeFile('visitors.txt', count.toString(), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }

            // Send the updated count back to the frontend
            res.json({ count });
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
