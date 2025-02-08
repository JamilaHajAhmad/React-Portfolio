import fs from 'fs';
const QUOTES = JSON.parse(fs.readFileSync('./data/quotes.json', 'utf8'));

export function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

export function get10RandomQuotes() {
    return Array.from({ length: 10 }, getRandomQuote);
}