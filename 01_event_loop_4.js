console.log('NODE USES AN EVENT LOOP\n')

var fs = require('fs')
var glob = require('glob')

glob('*.js', function(err, files) {

  files.forEach(function(f) {
    // read a file asynchronously
    fs.readFile(f, 'utf8', function(err, data) {
      console.log('Length:', data.length, f)
    })
  })

})
