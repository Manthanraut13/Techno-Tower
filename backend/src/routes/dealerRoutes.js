import express from 'express';
import {
  createDealerApplication,
  listDealerApplications,
  updateDealerApplication
} from '../controllers/dealerController.js';
import { authMiddleware, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public application endpoint
router.post('/applications', createDealerApplication);

// Admin endpoints
router.get('/applications', authMiddleware, requireAdmin, listDealerApplications);
router.patch('/applications/:id', authMiddleware, requireAdmin, updateDealerApplication);

export default router;

