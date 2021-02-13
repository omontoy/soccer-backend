const router = require('express').Router()
const leagueController = require('../controllers/league.controller')
const { auth } = require('../utils/auth')

router.route('/').get(auth, leagueController.list)

module.exports = router