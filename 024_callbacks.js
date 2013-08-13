console.log('ASYNC MAKES IT BETTER\n')

var async = require('async')
var http = require('http')

var urls = [
  'http://nodejs.org',
  'http://www.npmjs.org',
  'http://www.google.com',
  'http://www.node.mn',
  'http://www.sportngin.com',
  'http://www.yahoo.com',
  'http://www.duckduckgo.com',
  'http://www.reddit.com/r/node',
  'http://www.github.com',
  'http://www.xkcd.com',
  'http://www.twitter.com'
]

async.map(urls, makeRequest, function(err, results) {
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
