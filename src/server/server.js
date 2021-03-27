const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.us(cors({
	origin: "http://localhost:3000",
	credentials: true
}))

app.use(express.static('public'));

const sundaeOptionsRaw = fs.readFileSync('./sundae-options.json', 'utf-8');
const sundaeOptions = JSON.parse(sundaeOptionsRaw);

app.get('/scoops', (req, res) => {
	res.json(sundaeOptions.iceCreamFlavors)
})

app.get('/toppings', (req, res) => {
	res.json(sundaeOptions.toppings)
})

app.post('/order', (req, res) => {
	const orderNumber = Math.floor(Math.random() * 100000000000);
	res.status(201).json({ orderNumber })
})

if (require.main === module) {
	app.listen(3030, () => console.log('Listening on port 3030'))
}

module.exports = app;

