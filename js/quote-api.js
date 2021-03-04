'use strict';

const url = "https://quote-garden.herokuapp.com/api/v3/quotes";
let quotes = [];
axios.get(url, {
    params: {
        genre: "inspirational",
        page: 2,
    }
})
    .then(response => {
        // console.log(response.data.data);
        let data = response.data;
        for (let i = 0; i < 10; i++) {
        let quote = response.data.data[i];
        // console.log(quote.quoteAuthor)
        // console.log(quote.quoteText)
        quotes.push([quote.quoteAuthor, quote.quoteText])
        }



    })
    .catch(err => console.log(err))
    console.log(quotes)
