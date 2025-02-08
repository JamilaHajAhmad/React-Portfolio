import express from 'express';
import { getRandomQuote, get10RandomQuotes } from './handler.js';

const app = express();
const PORT = 3007;

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/quote', (req, res) => {
    res.json(getRandomQuote());
});

app.get('/quotes', (req, res) => {
    res.json(get10RandomQuotes());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});