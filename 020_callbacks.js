console.log('WHAT IF ORDER MATTERS?\n')

var http = require('http')

var urls = [
  'http://nodejs.org',
  'http://www.npmjs.org',
  'http://www.google.com',
  'http://www.node.mn'
]

http.get(urls[0], function(res) {
  console.log('0:', urls[0], res.statusCode)
  http.get(urls[1], function(res) {
    console.log('1:', urls[1], res.statusCode)
    http.get(urls[2], function(res) {
      console.log('2:', urls[2], res.statusCode)
      http.get(urls[3], function(res) {
        console.log('3:', urls[3], res.statusCode)
        process.exit()
      })
    })
  })
})