const express = require('express')
const app = express()
const port = 3000

const html = {
    title: 'test express',
    body: 'hi!'
};

const htmlResponse = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${html.title}</title>
  <link rel="stylesheet" href="css/styles.css?v=1.0">
</head>
<body>
    ${html.body}
</body>
</html>`;

app.get('/', (req, res) => res.send(htmlResponse))

app.listen(port, () => console.log(`Listening on port ${port}...`))
