console.log('USING MODULES\n')

// core modules or modules installed to node_modules directory
var fs = require('fs')

// local modules
var reverse = require('./utils/reverse')

fs.readFile(__filename, 'utf8', fileLoaded)

function fileLoaded(err, data) {
  var reversed = reverse(data)
  console.log(reversed)
}
