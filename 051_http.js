console.log('JSON UPLOADS!')

var http = require('http')
var StringDecoder = require('string_decoder').StringDecoder

// create a server
var server = http.createServer(handleRequest)

// start it up
server.listen(1337, function() {
  console.log('listening on http://localhost:1337/')
})

// handle requests
function handleRequest(req, res) {
  console.log('processing request')

  var buffer

  // read some data
  req.on('data', function(chunk) {
    if (buffer) buffer = Buffer.concat([buffer, chunk])
    else buffer = chunk
  })

  // no more data to read
  req.on('end', function() {
    var decoder = new StringDecoder('utf8')
    var data = buffer && decoder.write(buffer) || ''

    data = JSON.parse(data)

    // add a random ID as if we saved it to a database
    data.id = (Math.random()*100000)|0

    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(data)+'\n')
  })
}

/*

curl -H "Content-Type: application/json" -d '{"foo":"bar"}' http://localhost:1337/

*/
