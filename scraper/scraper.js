var request = require('request');
console.log('scraping now');

request('https://news.ycombinator.com/item?id=9812245', function(error, response, html) {
    if(!error) {
        console.log(html.substring(0, 80));
    }
});
