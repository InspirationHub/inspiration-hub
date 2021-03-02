'use strict';

//Board Object
function Board(quote, author){
    this.quote=quote;
    this.author=author;

    Board.all.push(this);
}
Board.all=[];



//function for adding to localSorage
function addtoLocalStorage(value){
    const JSONQuote=JSON.stringify(value);
    localStorage.setItem('localquote', JSONQuote);
}





//checking if a user already have the data in a local storage
let quoteinLocal=null;
 if (localStorage.length==0){
    addtoLocalStorage(Board.all);
    const localInfo=localStorage.getItem('localquote');
    quoteinLocal=JSON.parse(localInfo);
 }else{
    const localInfo=localStorage.getItem('localquote');
    quoteinLocal=JSON.parse(localInfo);
 }





//calling function everytime you get new data to add to local storge
function addTextToLocal(authorT, quoteT){
    quoteinLocal.push({quote:quoteT, author:authorT});
    addtoLocalStorage(quoteinLocal);
 }


let displayArea=document.querySelector('#quote-board');
function Display(){
 for (let i=0;i<quoteinLocal.length;i++){
         let newDiv=document.createElement('DIV');
         let newDiv2=document.createElement('DIV');
         displayArea.appendChild(newDiv).textContent=quoteinLocal[i].quote;
         displayArea.appendChild(newDiv2).textContent=quoteinLocal[i].author;
     }
}
Display();



//After sumbit
function afterclick(event){
    event.preventDefault();
    //grabs data in add into to local Storage
    let authorText=event.target.authorText.value;
    let quoteText=event.target.quoteText.value;
    addTextToLocal(authorText, quoteText);

    //clears value after submittion
    event.target.authorText.value="";
    event.target.quoteText.value="";

    //display
    let newDiv=document.createElement('DIV');
    let newDiv2=document.createElement('DIV');
    displayArea.appendChild(newDiv).textContent=quoteText;
    displayArea.appendChild(newDiv2).textContent=authorText;

}
//formSubmit
let form=document.querySelector("form");
form.addEventListener("submit", afterclick);







