const express = require('express');
const template = require('./template');
const app = express();
const port = 3000;

const routeContentMap = {
	'/': {
		title: 'test express',
		body: 'hi!'
	}
};

Object.entries(routeContentMap).forEach(([route, content]) => {
	console.log(`seting up ${route}`)
	app.get(route, (req, res) => res.send(template(content)));
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
