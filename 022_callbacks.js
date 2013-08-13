console.log('WHAT IF ORDER MATTERS?\n')

var http = require('http')

var urls = [
  'http://nodejs.org',
  'http://www.npmjs.org',
  'http://www.google.com',
  'http://www.node.mn'
]

var results = []

makeRequest(0, function(err) {
  console.log('')
  for (var i = 0; i < urls.length; i++) {
    console.log(i+':', urls[i], results[i])
  }
  process.exit()
})

function makeRequest(i, callback) {
  console.log(i+':', urls[i])
  http.get(urls[i], function(res) {
    results[i] = res.statusCode
    if (i < urls.length-1) {
      return makeRequest(++i, callback)
    }
    callback()
  }).on('error', callback)
}
