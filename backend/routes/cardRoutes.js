import express from 'express';
import { getCards, addCard, updateCard, deleteCard } from '../controllers/cardController.js';

const souter = express.Router();

router.get('/cards', getCards);
router.post('/cards', addCard);
router.put('/cards/:id', updateCard);
router.delete('/cards/:id', deleteCard);

export default router;
