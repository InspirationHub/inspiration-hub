'use strict';

//Quote Object
function Quote(quoteText, author) {
  this.quoteText = quoteText;
  this.author = author;

  Quote.all.push(this);
}

Quote.all = [];

Quote.prototype.render = function() {
  const boardElem = document.getElementById('quote-board');

  const quoteElem = document.createElement('div');
  quoteElem.id = 'quote-container';
  boardElem.appendChild(quoteElem);

  const removeButtonElem = document.createElement('button');
  removeButtonElem.id = 'remove-quote-button';
  removeButtonElem.textContent = 'X';
  quoteElem.appendChild(removeButtonElem);

  const quoteTextElem = document.createElement('div');
  quoteTextElem.id = 'quote-text';
  quoteTextElem.textContent = '"' + this.quoteText + '"';
  quoteElem.appendChild(quoteTextElem);

  const quoteAuthorElem = document.createElement('div');
  quoteAuthorElem.id = 'quote-author';
  quoteAuthorElem.textContent = '-' + this.author;
  quoteElem.appendChild(quoteAuthorElem);

  localStorage.setItem('quotes', JSON.stringify(Quote.all));
};

function renderStoredQuotes() {
  const storedQuotes = JSON.parse(localStorage.getItem('quotes'));
  for(let i = 0; i < storedQuotes.length; i++){
    let newQuote = new Quote(storedQuotes[i].quoteText, storedQuotes[i].author);
    newQuote.render();
  }
}

//form submit
const form = document.getElementById('new-quote-form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const newQuote = new Quote(event.target.quoteText.value, event.target.authorText.value);

  //clears value
  event.target.authorText.value='';
  event.target.quoteText.value='';

  newQuote.render();
}

if(localStorage.quotes !== undefined){
  renderStoredQuotes();
}




