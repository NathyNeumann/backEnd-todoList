const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const cardsController = require('../controllers/cardsController')

const {getListUsers} = userController;
const {getListCards} = cardsController;


router.get('/test', getListUsers)
router.get('/cards', getListCards)


module.exports = router;
