const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const cardsController = require('../controllers/cardsController')

router.get('/users', userController.getListUsers)
router.get('/cards/:id', cardsController.getListCards)

module.exports = router;
 