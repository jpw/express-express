const express = require('express');
const favicon = require('serve-favicon')
const path = require('path')
const template = require('./template');
const app = express();
const port = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

const testHash = '1cab1755-155f-4052-86f8-2fe5384c9f12-test';
const prodHash = '1cab1755-155f-4052-86f8-2fe5384c9f12';
const routeContentMap = {
	'/': {
		title: 'C is for Cookie',
		section01: `
			<h1>This drops some YT & doubleclick 3rd party <b>cookies</b>!</h1>
			<!-- OneTrust Cookies Consent Notice start -->
			<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
				type="text/javascript" charset="UTF-8"
				data-domain-script="${testHash}"></script>
			<script type="text/javascript">
				function OptanonWrapper() { }
			</script>
			<!-- OneTrust Cookies Consent Notice end -->

			<iframe width="560" height="315" src="https://www.youtube.com/embed/9PnbKL3wuH4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

			<p>To test that the "Accept Cookies" button allows 3rd party cookies:</p>
			<ol>
				<li>Click Cookie Settings in the banner</li>
				<li>Check that Targeting Cookies are off</li>
				<li>Close the Privacy Preference Centre (X)</li>
				<li>Click Accept Cookies in the banner</li>
				<li>Click this button to check Targeting Cookies now on <a class="optanon-show-settings">Review Cookie Settings</a></li>
			</ol>
			`,
		section02: `
		<p><a href="https://nature.com">Here is a link</a> for a11y testing purposes.</p>
		`,
		section03: `
			<h2>FYI: OneTrust Cookies List output:</h2>
			<!-- OneTrust Cookies List start -->
			<div id="ot-sdk-cookie-policy"></div>
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
