const fs = require('fs') //file system
const path = require('path')

/* fs.mkdir(path.join(__dirname, 'test'), (err) => {
	if(err){
		throw err
	}
	console.log('Papka sozdana');
}) */

const filePath = path.join(__dirname, 'test', 'text.txt')

/*fs.writeFile(filePath, 'Hello NodeJS', (err) => {
	if(err){
		throw err
	}
	console.log('File sozdan');

	
}) */

fs.readFile(filePath, 'utf-8', (err, content) => {
	if(err){
		throw err
	}
	console.log(content)
	/* const data = Buffer.from(content)
	console.log('Content: ', data.toString()); */
})