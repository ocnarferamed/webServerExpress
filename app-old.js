const http = require('http');
const PORT = 8080;
http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'application/json' });
        let miobj = {
            nombre: "Franco",
            edad: 31,
            url: req.url
        }
        res.write(JSON.stringify(miobj));
        res.end();
    })
    .listen(PORT);

console.log('servidor corriendo', PORT);