const express = require('express');
const app = express();

const PORT = 8181;

app.use( express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
	return res.sendFile('public/index.html');
})

app.listen(PORT, () => {
	console.log(`Server it's running in port ${PORT}`);
});



