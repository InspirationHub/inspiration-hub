'use strict';

function ArchiveQuote(quoteText, author, id) {
  this.quoteText = quoteText;
  this.author = author;
  this.id = id;

  ArchiveQuote.all.push(this);
}

ArchiveQuote.all = [];

function renderArchivedQuotes() {
  const archivedQuotes = JSON.parse(localStorage.getItem('archive'));
  const archiveTableElem = document.getElementById('tableBody');
  for(let i = 0; i < archivedQuotes.length; i++){
    new ArchiveQuote(archivedQuotes[i].quoteText, archivedQuotes[i].author, i);
  }
  for(let i = 0; i < ArchiveQuote.all; i++){
    const tableRowElem = document.createElement('tr');
    archiveTableElem.appendChild(tableRowElem);

    const tableQuoteElem = document.createElement('td');
    tableQuoteElem.textContent = ArchiveQuote[i].quoteText;
    tableRowElem.appendChild(tableQuoteElem);

    const tableAuthorElem = document.createElement('td');
    tableAuthorElem.textContent = ArchiveQuote[i].author;
    tableRowElem.appendChild(tableAuthorElem);

    const tableAddElem = document.createElement('td');
    tableAddElem.textContent = '+';
    tableAddElem.id = 'restore-' + i;
    tableRowElem.appendChild(tableAddElem);

    const tableRemoveElem = document.createElement('td');
    tableRemoveElem.textContent = 'X';
    tableRemoveElem.id = 'remove-' + i;
    tableRowElem.appendChild(tableRemoveElem);

  }
}

if(localStorage.archive !== undefined){
  renderArchivedQuotes();
}
