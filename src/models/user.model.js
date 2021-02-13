const { model, Schema, models } = require('mongoose')

const emailRegexp  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const userSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true,
    match: [ emailRegexp, 'Invalid Email'],
    validate: [
      {
        validator(value) {
          return models.User.findOne({ email: value })
            .then(user => !user)
            .catch(() => false)
        },
        message: "Email already exists"
      }
    ]
  },
  password: {
    type: String,
    required: true
  },
  teams: {
    type: [{ type: Schema.Types.ObjectId,
    ref: 'Team'
    }],
    required: true
  },
  leagues: {
    type: [{ type: Schema.Types.ObjectId,
    ref: 'League'  
    }],
    required: true
  }
}, {
  timestamps: true
})

const User = model('User', userSchema)

module.exports = User
