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
		<!-- OneTrust Cookies Consent Notice end -->

		<div id="div-gpt-ad-right-2" class="div-gpt-ad medium-rectangle advert js-ad text-center hide-print grade-c-hide" data-gpt-unitpath="/285/nature.com/article" data-gpt-sizes="300x250" data-gpt-targeting="pos=right;artid=/articles/d41586-019-03202-2;path=/articles/d41586-019-03202-2" data-ad-type="right" data-google-query-id="CICZkKHuweUCFWxZFQgdwdgEzw">
    <div id="google_ads_iframe_/270604982/nature/nature/articles_1__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/270604982/nature/nature/articles_1" title="3rd party ad content" name="google_ads_iframe_/270604982/nature/nature/articles_1" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc="" data-google-container-id="1" style="border: 0px; vertical-align: bottom;" data-load-complete="true"></iframe></div></div>
`,
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
