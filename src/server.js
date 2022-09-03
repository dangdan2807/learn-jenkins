const express = require('express');
const app = express();
const POST = process.env.POST || 3000;

app.get('/', (req, res) => {
    res.send('home');
});

app.listen(POST, () => {
    console.log(`Server is running on http://localhost:${POST}`);
});
