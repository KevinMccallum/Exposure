const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/User')

const { catchErrors, isLogged } = require('../middleware/catchErrors')
const { signup, login, logout, currentUser } = require('../controllers/auth')

router.post('/signup', catchErrors(signup))
router.post('/login', login)
router.get('/logout', logout)
router.get('/currentuser', isLogged, currentUser)

module.exports = router
