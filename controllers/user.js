const router = require('express').Router()
const User = require('../models/user')

// GET: get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'error gettings users' })
    }
})

// GET: get user by id
router.get('/id/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'error gettings users' })
    }
})

// POST: create a user
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, age } = req.body
        const createdUser = await new User({
            firstName,
            lastName,
            age
        }).save()

        res.json(createdUser)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'error creating user' })
    }
})

module.exports = router