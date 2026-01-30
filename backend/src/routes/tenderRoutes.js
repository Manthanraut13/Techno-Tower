import express from 'express';
import {
  listTenders,
  getTender,
  createTender,
  updateTender,
  deleteTender
} from '../controllers/tenderController.js';
import { authMiddleware, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', listTenders);
router.get('/:id', getTender);

router.post('/', authMiddleware, requireAdmin, createTender);
router.put('/:id', authMiddleware, requireAdmin, updateTender);
router.delete('/:id', authMiddleware, requireAdmin, deleteTender);

export default router;

