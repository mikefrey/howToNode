console.log('SIMPLE SERVER')

var http = require('http')

// create a server
var server = http.createServer(handleRequest)

// start it up
server.listen(1337, function() {
  console.log('listening on http://localhost:1337/')
})

// handle requests
function handleRequest(req, res) {
  console.log('processing request')
  res.setHeader('Content-Type', 'text/plain')
  res.statusCode = 200
  res.end('Hooray!\n')
}
