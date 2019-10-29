const express = require('express');
const template = require('./template');
const app = express();
const port = process.env.PORT || 3000;

const routeContentMap = {
	'/': {
		title: 'C is for Cookie',
		section01: `
			<h1>Let's drop some third party <b>COOKIES</b>!</h1>
			<!-- OneTrust Cookies Consent Notice start -->
			<script src="https://optanon.blob.core.windows.net/consent/da8ae7a6-9f59-470b-ac2a-7de78fd76704.js" type="text/javascript" charset="UTF-8"></script>
			<script>
				function OptanonWrapper() { }
			</script>
			<!-- OneTrust Cookies Consent Notice end -->

			<iframe width="560" height="315" src="https://www.youtube.com/embed/9PnbKL3wuH4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		`,
		section03: `
			<h2>OneTrust Cookies List output:</h2>
			<!-- OneTrust Cookies List start -->
			<div id="optanon-cookie-policy"></div>
			<!-- OneTrust Cookies List end -->
		`
	},
	'/alt': {
		title: 'alt test express',
		section01: 'some other content!'
	}
};

Object.entries(routeContentMap).forEach(([route, content]) => {
	console.log(`setting up ${route}`);
	app.get(route, (req, res) => res.send(template(content)));
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
