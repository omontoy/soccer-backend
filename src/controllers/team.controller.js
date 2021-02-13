const Team = require('../models/team.model')

module.exports = {

  async list(req, res) {
    try {
      const teams = await Team.find()
      res.status(200).json({ message: 'Teams found', data: teams })
    }
    catch(err) {
      res.status(200).json({ message: err.message })
    }
  },

  async show(req, res) {
    try {
      const id = req.userId
      const team = await Team.findById(id)


    }
    catch(err) {
      
    }
  }
}