const express = require('express');
const template = require('./template');
const app = express();
const port = process.env.PORT || 3000;

const routeContentMap = {
	'/': {
		title: 'cookie starts with C',
		section01: `<p>hello.</p>
		<!-- OneTrust Cookies Consent Notice start -->
		<script src="https://optanon.blob.core.windows.net/consent/da8ae7a6-9f59-470b-ac2a-7de78fd76704.js" type="text/javascript" charset="UTF-8"></script>
		<script type="text/javascript">
		function OptanonWrapper() { }
		</script>
		<!-- OneTrust Cookies Consent Notice end -->`,
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
