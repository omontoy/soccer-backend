const League = require('../models/league.model')

module.exports = {

  async list(req, res) {
    try {
      const leagues = await League.find()

      res.status(200).json({ message: 'Leagues found', data: leagues })
    }
    catch(err) {
      res.status(404).json({ message: err.message })
    }
  }
}