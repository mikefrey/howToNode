console.log('ASYNC MAKES IT BETTER\n')

console.log('this file doesn\'t actually run')
process.exit(0)

var async = requier('async')
var http = require('http')
var db = require('db')
var cache = require('cache')

exports.getStuff = function(x, callback) {

  var load = async.compose(db.connect, queryStuff, loadFromURL)

  cache.fetch(x, function(err, data) {
    if (!err && !data) return load(x, callback)
    callback(err, data)
  })
}

function queryStuff(x, callback) {
  if (!db.connected) return db.connect(queryStuff.bind(this, x, callback))
  db.collection('stuff', function(err, col) {
    col.query(x, callback)
  })
}

function loadFromURL(data, callback) {
  http.get('http://example.com/'+data, function(res) {
    callback(null, res)
  })
}
