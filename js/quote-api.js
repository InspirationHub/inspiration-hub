'use strict';

const url= "http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=json&lang=en";
// const params= {
//     method: "getQuote", 
//     key: 457653,
//     format: "JSON",
//     lang: "en",
// }
axios.get (url)
.then (data=>console.log(data))
.catch (err=>console.log(err))

