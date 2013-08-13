console.log('PIPING THROUGH')

var through = require('through')

var uppercase = through(function(buf) {
  this.queue(buf.toString().toUpperCase())
})

var noVowels = through(function(buf) {
  this.queue(buf.toString().replace(/[aeiou]/ig, ''))
})

process.stdin.pipe(noVowels)
             .pipe(uppercase)
             .pipe(process.stdout)
