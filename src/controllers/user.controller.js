const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

module.exports = {
  async create(req, res) {
    try {
      const { email, password, name } = req.body

      const encPassword = await bcrypt.hash(password, 8)
      const user = await User.create({ email, password: encPassword, name })

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 }
      )

      res.status(201).json({ token })
    }
    catch(err) {
      res.status(400).json({ message: err.message })
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })

      if(!user) {
        throw new Error('Invalid email or password')
      }

      const isValid = await bcrypt.compare(password, user.password)
      if(!isValid) {
        throw new Error('Invalid email or password')
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 }
      )
      res.status(200).json({ token })
    }
    catch(err) {
      res.status(401).json({ message: err.message })
    }
  },

}
