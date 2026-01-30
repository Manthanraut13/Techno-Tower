import express from 'express';
import {
  createEnquiry,
  listEnquiries,
  getEnquiry,
  updateEnquiry
} from '../controllers/enquiryController.js';
import { authMiddleware, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public create
router.post('/', createEnquiry);

// Admin
router.get('/', authMiddleware, requireAdmin, listEnquiries);
router.get('/:id', authMiddleware, requireAdmin, getEnquiry);
router.patch('/:id', authMiddleware, requireAdmin, updateEnquiry);

export default router;

