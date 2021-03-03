'use strict';

//Quote Object
function Quote(quoteText, author, id) {
  this.quoteText = quoteText;
  this.author = author;
  this.id = id;

  Quote.all.push(this);
}

Quote.all = [];

function ArchiveQuote(quoteText, author, id) {
  this.quoteText = quoteText;
  this.author = author;
  this.id = id;

  ArchiveQuote.all.push(this);
}

ArchiveQuote.all = [];

Quote.prototype.render = function() {
  const boardElem = document.getElementById('quote-board');

  const quoteElem = document.createElement('div');
  quoteElem.id = 'quote-container-' + this.id;
  quoteElem.className = 'card';
  boardElem.appendChild(quoteElem);

  const flipCardInnerElem = document.createElement('div');
  flipCardInnerElem.className = 'flip-card-inner';
  quoteElem.appendChild(flipCardInnerElem);

  const quoteTextElem = document.createElement('div');
  quoteTextElem.id = 'quote-text-' + this.id;
  quoteTextElem.className = 'flip-card-front';
  quoteTextElem.textContent = '"' + this.quoteText + '"';
  flipCardInnerElem.appendChild(quoteTextElem);

  const quoteAuthorElem = document.createElement('div');
  quoteAuthorElem.id = 'quote-author-' + this.id;
  quoteAuthorElem.className = 'flip-card-back';
  quoteAuthorElem.textContent = this.author;
  flipCardInnerElem.appendChild(quoteAuthorElem);

  const removeButtonElem = document.createElement('button');
  removeButtonElem.id = this.id;
  removeButtonElem.className = 'removeCardButton';
  removeButtonElem.textContent = 'X';
  quoteAuthorElem.appendChild(removeButtonElem);

  removeButtonElem.addEventListener('click', removeHandler);

  localStorage.setItem('quotes', JSON.stringify(Quote.all));
};

if(localStorage.archive !== undefined){
  const archivedQuotes = JSON.parse(localStorage.getItem('archive'));
  for(let i = 0; i < archivedQuotes.length; i++){
    new ArchiveQuote(archivedQuotes[i].quoteText, archivedQuotes[i].author, i);
  }
}

function removeHandler(event){
  event.preventDefault();
  const id = event.target.id;
  console.log(id);
  const quoteElem = document.getElementById('quote-container-' + id);
  quoteElem.remove();

  const storedQuotes = JSON.parse(localStorage.getItem('quotes'));
  const newArchiveQuote = Quote.all[id];

  console.log('newarchive', newArchiveQuote);

  if(localStorage.archive === undefined){
    new ArchiveQuote(newArchiveQuote.quoteText, newArchiveQuote.author, 0);
  }

  if(localStorage.archive !== undefined){
    new ArchiveQuote(newArchiveQuote.quoteText, newArchiveQuote.author, ArchiveQuote.all.length);
  }

  localStorage.setItem('archive', JSON.stringify(ArchiveQuote.all));

  storedQuotes.splice(newArchiveQuote.id, 1);
  localStorage.setItem('quotes', JSON.stringify(storedQuotes));

}

function renderStoredQuotes() {
  const storedQuotes = JSON.parse(localStorage.getItem('quotes'));
  for(let i = 0; i < storedQuotes.length; i++){
    let id = i;
    let newQuote = new Quote(storedQuotes[i].quoteText, storedQuotes[i].author, id);
    newQuote.render();
  }
}

//form submit
const form = document.getElementById('new-quote-form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  let id;
  if(localStorage.quotes === undefined){
    id = 0;
  }
  if(localStorage.quotes !== undefined){
    id = Quote.all.length;
  }

  const newQuote = new Quote(event.target.quoteText.value, event.target.authorText.value, id);
  console.log(newQuote);

  //clears value
  event.target.authorText.value='';
  event.target.quoteText.value='';

  newQuote.render();
}

if(localStorage.quotes !== undefined){
  renderStoredQuotes();
}

//display and hide form
form.style.display='none';

let openButton=document.getElementById('openButton');
let closeButton=document.getElementById('close-button');
openButton.addEventListener('click', function(){
  form.style.display='block';
});
closeButton.addEventListener('click', function(){
  form.style.display='none';
});
