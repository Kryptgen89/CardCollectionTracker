import express from 'express';
import { getUser, registerUser, loginUser } from '../controllers/userController.js';

const souter = express.Router();

router.get('/user', getUser);
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);

export default router;
