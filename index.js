const express = require('express');
const passport = require('passport');

const app = express();

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFIle(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
