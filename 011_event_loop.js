console.log('NODE USES AN EVENT LOOP\n')

var fs = require('fs')

// read a file asynchronously
fs.readFile(__filename, 'utf8', fileLoaded)

// do something with the file once it's loaded
function fileLoaded(err, data) {
  console.log('Length:', data.length)
}

console.log('The file isn\'t loaded yet\n')
