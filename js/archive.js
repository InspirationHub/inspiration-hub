'use strict';

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

let removedIDArray = [];
let removedCounter = 0;

const archivedQuotes = JSON.parse(localStorage.getItem('archive'));
for(let i = 0; i < archivedQuotes.length; i++){
  new ArchiveQuote(archivedQuotes[i].quoteText, archivedQuotes[i].author, i);
}

function renderArchivedQuotes() {
  const archiveTableElem = document.getElementById('tableBody');
  console.log(ArchiveQuote.all);
  for(let i = 0; i < ArchiveQuote.all.length; i++){
    const tableRowElem = document.createElement('tr');
    tableRowElem.id = 'table-row-' + i;
    archiveTableElem.appendChild(tableRowElem);

    const tableQuoteElem = document.createElement('td');
    tableQuoteElem.textContent = ArchiveQuote.all[i].quoteText;
    tableRowElem.appendChild(tableQuoteElem);

    const tableAuthorElem = document.createElement('td');
    tableAuthorElem.textContent = ArchiveQuote.all[i].author;
    tableRowElem.appendChild(tableAuthorElem);

    const tableAddElem = document.createElement('td');
    tableAddElem.textContent = '+';
    tableAddElem.id = i;
    tableRowElem.appendChild(tableAddElem);

    const tableRemoveElem = document.createElement('td');
    tableRemoveElem.textContent = 'x';
    tableRemoveElem.id = i;
    tableRowElem.appendChild(tableRemoveElem);

    tableAddElem.addEventListener('click', restoreHandler);
    tableRemoveElem.addEventListener('click', tableRemoveHandler);
  }
}

const storedQuotes = JSON.parse(localStorage.getItem('quotes'));
for(let i = 0; i < storedQuotes.length; i++){
  new Quote(storedQuotes[i].quoteText, storedQuotes[i].author, i);
}

function restoreHandler(event){
  event.preventDefault();
  const id = event.target.id;
  console.log(id);
  const tableRowElem = document.getElementById('table-row-' + id);
  tableRowElem.remove();

  for(let i = 0; i < removedIDArray.length; i++){
    if(removedIDArray[i] < id){
      removedCounter+=1;
    }
  }

  console.log('arr', removedIDArray);

  removedIDArray.push(id);

  let newRestoredQuote = ArchiveQuote.all[id - removedCounter];

  let index = ArchiveQuote.all.indexOf(newRestoredQuote);

  console.log('new restore', newRestoredQuote);

  if(localStorage.quotes === undefined){
    new Quote(newRestoredQuote.quoteText, newRestoredQuote.author, 0);
  }

  if(localStorage.quotes !== undefined){
    new Quote(newRestoredQuote.quoteText, newRestoredQuote.author, Quote.all.length);
  }

  localStorage.setItem('quotes', JSON.stringify(Quote.all));

  console.log(Quote.all);

  ArchiveQuote.all.splice(index, 1);

  localStorage.setItem('archive', JSON.stringify(ArchiveQuote.all));


  removedCounter = 0;
}

function tableRemoveHandler(event){
  event.preventDefault();
  const id = event.target.id;
  console.log(id);
  const tableRowElem = document.getElementById('table-row-' + id);
  tableRowElem.remove();

  for(let i = 0; i < removedIDArray.length; i++){
    if(removedIDArray[i] < id){
      removedCounter+=1;
    }
  }

  console.log('arr', removedIDArray);

  const removedQuote = ArchiveQuote.all[id - removedCounter];

  let index = ArchiveQuote.all.indexOf(removedQuote);

  ArchiveQuote.all.splice(index, 1);

  localStorage.setItem('archive', JSON.stringify(ArchiveQuote.all));

  removedIDArray.push(id);

  removedCounter = 0;
}

if(localStorage.archive !== undefined){
  renderArchivedQuotes();
}
