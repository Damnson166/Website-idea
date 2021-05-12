const os = require('os')

console.log('OS: ', os.platform());

console.log('Processor: ', os.arch());

console.log('Info about processors:', os.cpus());

console.log("Free memory: ", os.freemem());

console.log("Total memory: ", os.totalmem());

console.log("Home directoty: ", os.homedir());

console.log('On OS: ', os.uptime());