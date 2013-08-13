console.log('SIMPLE SERVER')

var http = require('http')
var concat = require('concat-stream')

// create a server
var server = http.createServer(handleRequest)

// start it up
server.listen(1337, function() {
  console.log('listening on http://localhost:1337/')
})

// handle requests
function handleRequest(req, res) {
  console.log('processing request')

  req.setEncoding('utf8')

  // concat will buffer all the data for us
  var write = concat(function(data) {
    data = JSON.parse(data)

    // add a random ID as if we saved it to a database
    data.id = (Math.random()*100000)|0

    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(data)+'\n')
  })

  // pipe the data through concat
  req.pipe(write)
}
