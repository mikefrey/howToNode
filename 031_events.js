console.log('EMITTING TO YOUR CRIMES\n')

var EventEmitter = require('events').EventEmitter
var util = require('util')

// inherit from EventEmitter
util.inherits(CoffeeMaker, EventEmitter)

function CoffeeMaker(capacity) {
  this.capacity = capacity
  this.cups = 0
  // don't forget to initialize the EventEmitter!
  EventEmitter.call(this)
}

CoffeeMaker.prototype.brew = function() {
  console.log('Brewing...')
  setTimeout(function() {
    console.log('Coffee Maker is full\n')
    this.cups = this.capacity
    this.emit('full')
  }.bind(this), 2500)
}

CoffeeMaker.prototype.pour = function() {
  if (!this.cups) {
    this.emit('empty')
    return false
  }
  return --this.cups
}




var maker = new CoffeeMaker(4)
var interval

maker.on('full', function() {
  interval = setInterval(function() {
    var remaining = maker.pour()
    if (remaining !== false) console.log(remaining + ' cups remaining.')
  }, 700)
})

maker.on('empty', function() {
  clearInterval(interval)
  console.log('\nOut of coffee!')
})

maker.brew()
