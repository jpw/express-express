const express = require('express');
const template = require('./template');
const app = express();
const port = process.env.PORT || 3000;

const routeContentMap = {
	'/': {
		title: 'test badging',
		section01: 'hi!'
	},
	'/alt': {
		title: 'iframe test',
		section01: '<iframe  frameborder="0"  scrolling="no" src="https://openbadgepassport.com/app/badge/info/239909/pic/embed" width="200" height="270"></iframe>'
	}
};

Object.entries(routeContentMap).forEach(([route, content]) => {
	console.log(`setting up ${route}`);
	app.get(route, (req, res) => res.send(template(content)));
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
