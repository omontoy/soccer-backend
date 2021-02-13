const mongoose = require('mongoose')

function connect() {
  mongoose.connect('mongodb://localhost:27017/soccer', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  mongoose.connection.once('open', () => 
    console.log('Connected with Soccer Database')
  )

  mongoose.connection.on('error', (err) => 
    console.log('something went wrong')
  )
}

module.exports = { connect }