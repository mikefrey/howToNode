console.log('EMITTING TO YOUR CRIMES\n')

var EventEmitter = require('events').EventEmitter

var ee = new EventEmitter()

ee.on('someEvent', console.log)

setTimeout(function() {
  ee.emit('someEvent', new Date())
}, 300)
