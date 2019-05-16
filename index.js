const express = require('express');
const app = express();
const port = 3000;

const content = {
	title: 'test express',
	body: 'hi!'
};

//  <link rel="stylesheet" href="css/">
const htmlResponse = `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>${content.title}</title>
</head>
<body>
	${content.body}
</body>
</html>`;

app.get('/', (req, res) => res.send(htmlResponse));

app.listen(port, () => console.log(`Listening on port ${port}...`));
