const router = require('express').Router()
const userController = require('../controllers/user.controller')
const { auth } = require('../utils/auth')

router.route('/').post(userController.create)
router.route('/login').post(userController.login)

module.exports = router
