const path = require('path')

console.log('Name of file: ', path.basename(__filename));

console.log('Name of directory: ', path.dirname(__filename));

console.log('Ext: ', path.extname(__filename));

console.log('Parse: ', path.parse(__filename));

console.log(path.join(__dirname, 'server', 'index.html'));

