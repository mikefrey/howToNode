console.log('NODE USES AN EVENT LOOP\n')

var fs = require('fs')

// read a file asynchronously
fs.readFile(__filename, 'utf8', fileLoaded)

// do something with the file once it's loaded
function fileLoaded(err, data) {
  console.log('Length:', data.length)
}

console.log('The file isn\'t loaded yet\n')

console.log('Sleep 2 seconds')
var d = +new Date()
while (+new Date() - d < 2000) {}

console.log('The file STILL hasn\'t loaded!\n')
