'use strict';
/* global axios */

const quoteElem = document.getElementById('quote');
const authorElem = document.getElementById('author');
const addToBoardButtonElem = document.getElementById('add-button');
const refreshButtonElem = document.getElementById('refresh-button');
const url = 'https://quote-garden.herokuapp.com/api/v3/quotes';
let currentQuoteIndex;
let quotes = [
    ['Lao Tzu', 'Nature does not hurry, yet everything is accomplished'],
    ['William James', 'Act as if what you do makes a difference. It does.'],
    ['Zig Ziglar', 'What you get by achieving your goals is not as important as what you become by achieving your goals.']
];

function generateQuoteList() {
    for (let i = 0; i < 16; i++) {
        axios.get(url, {
            params: {
                genre: 'inspirational',
                page: i + 1,
            }
        })
            .then(response => {
                for (let j = 0; j < 10; j++) {
                    let quote = response.data.data[j];
                    quotes.push([quote.quoteAuthor, quote.quoteText]);
                }
            })
            .catch(err => console.log(err));
    }
}

generateQuoteList();

function refreshQuote() {
    const randomInt = Math.floor(Math.random() * quotes.length);
    const quoteAuthorPair = quotes[randomInt];
    currentQuoteIndex = randomInt;
    authorElem.textContent = `- ${quoteAuthorPair[0]}`;
    quoteElem.textContent = quoteAuthorPair[1];
}

refreshQuote();

function addToBoard() {
    let quotesFromStorage = JSON.parse(localStorage.getItem("quotes"));

    let quoteObject = {
        author: authorElem.textContent.substring(2),
        id: quotesFromStorage.length,
        quoteText: quoteElem.textContent,
    }
    quotesFromStorage.push(quoteObject);
    localStorage.setItem("quotes", JSON.stringify(quotesFromStorage));
    // future goal: remove used quote from quotes array
    refreshQuote();
}

refreshButtonElem.addEventListener('click', refreshQuote);
addToBoardButtonElem.addEventListener('click', addToBoard);
