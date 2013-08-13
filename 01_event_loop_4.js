console.log('NODE USES AN EVENT LOOP\n')

var http = require('http')

var urls = [
  'http://nodejs.org',
  'http://www.npmjs.org',
  'http://www.google.com',
  'http://www.node.mn'
]

var c = urls.length
urls.forEach(function(url, i) {
  http.get(url, function(res) {
    console.log(i+':', url, res.statusCode)
    if (--c == 0) process.exit()
  })
  console.log(i+':', url)
})
console.log('')
