const express = require('express');
const app = express();
const port = 3000;

const content = {
	title: 'test express',
	body: 'hi!'
};


const htmlResponse = `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>${content.title}</title>
	<link rel="stylesheet" href="https://unpkg.com/normalize.css@8.0.1/normalize.css">
	<style>
	* {
		box-sizing: border-box:
	}
	html, body {
		background-color: #ccc;
	}
	main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(100px, auto);
		margin: 2em;
		column-gap: 1em;
		row-gap: 1em;
		padding: 1em;
		background-color: #dedede;
		border-radius: 10px;
	}
	</style>
	</head>
<body>
<div>
	<main>
		<section>
			${content.body}
		</section>
	</main>
</div>
</body>
</html>`;

app.get('/', (req, res) => res.send(htmlResponse));

app.listen(port, () => console.log(`Listening on port ${port}...`));
