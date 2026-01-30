import express from 'express';
import {
  listCampaigns,
  getCampaign,
  createCampaign,
  updateCampaign
} from '../controllers/campaignController.js';
import { authMiddleware, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, requireAdmin, listCampaigns);
router.get('/:id', authMiddleware, requireAdmin, getCampaign);
router.post('/', authMiddleware, requireAdmin, createCampaign);
router.put('/:id', authMiddleware, requireAdmin, updateCampaign);

export default router;

