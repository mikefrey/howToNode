console.log('ESCAPING CALLBACK HELL/CUTTING DOWN THE CHRISTMAS TREE OF DEATH\n')

console.log('this file doesn\'t actually run')
process.exit(0)

var http = require('http')
var db = require('db')
var cache = require('cache')

exports.getStuff = function(x, callback) {
  loadFromCache(x, callback)
}

function loadFromCache(x, callback) {
  cache.fetch(x, function(err, data) {
    if (!err && !data) return loadFromDB(x, callback)
    callback(err, data)
  })
}

function loadFromDB(x, callback) {
  queryStuff(x, function(err, data) {
    loadFromURL(data, callback)
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
