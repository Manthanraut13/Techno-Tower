import express from 'express';
import {
  listProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';
import { authMiddleware, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', listProjects);
router.get('/:slug', getProjectBySlug);

router.post('/', authMiddleware, requireAdmin, createProject);
router.put('/:id', authMiddleware, requireAdmin, updateProject);
router.delete('/:id', authMiddleware, requireAdmin, deleteProject);

export default router;

