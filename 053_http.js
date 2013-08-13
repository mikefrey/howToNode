console.log('SIMPLE UPLOAD SERVER')

var http = require('http')
var fs = require('fs')

// create a server
var server = http.createServer(handleRequest)

// start it up
server.listen(1337, function() {
  console.log('listening on http://localhost:1337/')
})

// handle requests
function handleRequest(req, res) {
  console.log('processing request')

  var ws = fs.createWriteStream(__dirname+'/image.png', {encoding:'binary'})
  ws.on('open', function() {
    // pipe the request to the writeable stream
    req.pipe(ws)
  })
  ws.on('finish', function() {
    res.setHeader('Content-Type', 'text/plain')
    res.statusCode = 200
    res.end('Upload completed\n')
  })
}

/*

curl -H "Content-Type: image/png" --data-binary @assets/nodejs.png http://localhost:1337/

*/