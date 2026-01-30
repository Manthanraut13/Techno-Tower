import express from 'express';
import {
  listGalleryItems,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem
} from '../controllers/galleryController.js';
import { authMiddleware, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', listGalleryItems);

router.post('/', authMiddleware, requireAdmin, createGalleryItem);
router.put('/:id', authMiddleware, requireAdmin, updateGalleryItem);
router.delete('/:id', authMiddleware, requireAdmin, deleteGalleryItem);

export default router;

