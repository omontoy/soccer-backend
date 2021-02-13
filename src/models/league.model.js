
const { model, Schema, models } = require('mongoose')

const leagueSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  api_id: {
    type: Number,
    default: ''
  }
}, {
  timestamps: true
})

const League = model('League', leagueSchema)

module.exports = League