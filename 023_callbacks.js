console.log('ASYNC MAKES IT BETTER\n')

var async = require('async')
var http = require('http')

var urls = [
  'http://nodejs.org',
  'http://www.npmjs.org',
  'http://www.google.com',
  'http://www.node.mn'
]

async.mapSeries(urls, makeRequest, function(err, results) {
  console.log('')
  for (var i = 0; i < urls.length; i++) {
    console.log(urls[i], results[i])
  }
  process.exit()
})

function makeRequest(url, callback) {
  console.log(url)
  http.get(url, function(res) {
    callback(null, res.statusCode)
  }).on('error', callback)
}
