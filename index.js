const express = require( 'express');
const fetch = require("node-fetch");
var faker = require("faker");

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/damages', async (req, res) => {
 var symbol = faker.finance.currencySymbol();
 var amount = faker.finance.amount();
 var btc = faker.finance.bitcoinAddress();

 res.render('damages', {"symbol":symbol, "amount":amount, "btc":btc})

});


app.get('/', (req, res) => {
res.render('index');
});



app.get('/origin', (req, res) => {
res.render('origin');
});

app.get('/sources', (req, res) => {
res.render('sources');
});


app.get('/validation', (req, res) => {
res.render('validation');
});

app.get('/videos', (req, res) => {
res.render('videos');
});



app.listen (3000, () => {
  console.log('server started');
});
