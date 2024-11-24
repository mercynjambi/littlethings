require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

const TokenRoute = require('./routes/token');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Mpesa programming in progress, Time to get paid');
});

app.use("/token", TokenRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
