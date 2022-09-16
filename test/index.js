var http = require('http');
const { readFileSync, writeFileSync } = require('fs');
var server = http.createServer(function(req, res) {
	//Gasim de cate ori a fost vazuta pagina
	count = readFileSync('./count.txt', 'utf-8');
	newcount = parseInt(count) + 1;
	writeFileSync("./count.txt", newcount);
    //Scriem si trimitem user-ului html-ul
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    <html>
        <head>
            <title>Vazut</title>
        </head>
        <body>
            <h1>Aceasta pagina a fost vazuta de ${newcount} ori</h1>
        </body>
    </html>
`);
});
server.listen(3000);
console.log("http://localhost:3000")