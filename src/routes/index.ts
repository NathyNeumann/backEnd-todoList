import express from 'express';
import  * as userController  from '../controllers/userController';

const router = express.Router();

// const cardsController = require('../controllers/cardsController')

router.get('/users', userController.getListUsers)
// router.get('/cards/:id', cardsController.getListCards)
// router.post('/card', cardsController.postCreateCard)
// router.get('/card/:id', cardsController.getACard)
// router.put('/card/:id', cardsController.updateACard)
// router.delete('/card/:id', cardsController.deleteCard)

export default router;
 