const path = require('path');
const express = require('express');

const port = (process.env.PORT || 3000);
const app = express();

app.use('/static', express.static(path.join(__dirname, '../dist')));


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port);
console.log(`Listening at http://localhost:${port}`);

