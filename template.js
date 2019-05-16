module.exports = ({title, section01}) => `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>${title}</title>
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
			column-gap: 1em;
			row-gap: 1em;

			margin: 2em;
			padding: 1em;
			background-color: #dedede;
			border-radius: 10px;
		}
	</style>
</head>
<body>
	<main>
		<section>
			${section01}
		</section>
	</main>
</body>
</html>`;
