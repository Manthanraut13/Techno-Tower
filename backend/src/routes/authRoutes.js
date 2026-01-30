import express from 'express';
import { login, me, forgotPassword } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', login);
router.get('/me', authMiddleware, me);
router.post('/forgot-password', forgotPassword);

export default router;

