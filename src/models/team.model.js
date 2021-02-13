
const { model, Schema, models } = require('mongoose')

const teamSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  api_id: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

const Team = model('Team', teamSchema)

module.exports = Team