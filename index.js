const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const server = http.createServer((req, res) => {

	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
	const ext = path.extname(filePath)
	let contentType = 'text/html'

	switch (ext) {
		case '.css':
			contentType = 'text/css'
			break;
		case '.js':
			contentType = 'text/javascript'
			break;
		default:
			contentType = 'text/html'
			break;
	}


	if (!ext) {
		filePath += '.html';
	}

	fs.readFile(filePath, (err, content) => {
		if (err) {
			fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
				if (err) {
					res.writeHead(500)
					res.end('Error')
				} else {
					res.writeHead(200, {
						'Content-Type': 'text/html'
					})
					res.end(data)
				}
			})
		} else {
			res.writeHead(200, {
				'Content-Type': contentType
			})
			res.end(content)
		}
	})
})


const urlencodedParser = bodyParser.urlencoded({extended: true});
 
app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
  
app.get("/", function(request, response){
    response.send("Главная страница");
});

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
	console.log(`Server has been started on ${PORT}...`);
})


