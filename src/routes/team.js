const router = require('express').Router()
const teamController = require('../controllers/team.controller')
const { auth } = require('../utils/auth')

router.route('/').get(teamController.list)

module.exports = router