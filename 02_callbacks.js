console.log('CALLBACK HELL/CHRISTMAS TREE OF DEATH\n')

console.log('this file doesn\'t actually run')
process.exit(0)

var http = require('http')
var db = require('db')
var cache = require('cache')

exports.getStuff = function(x, callback) {
  cache.fetch(x, function(err, data) {
    if (!data) {
      db.connect(function(err) {
        db.collection('stuff', function(err, col) {
          col.query(x, function(err, data) {
            http.get('http://example.com/'+x, function(res) {
              callback(err, res.data)
            })
          })
        })
      })
    }
  })
}
