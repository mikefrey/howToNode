console.log('STREAMS ARE JUST EVENT EMITTERS')

// stdin and stdout are streams
process.stdin.on('data', function(data) {
  process.stdout.write(data)
})
