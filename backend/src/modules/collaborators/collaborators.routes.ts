import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import {
  addCollaboratorHandler,
  listCollaboratorsHandler,
  removeCollaboratorHandler,
} from './collaborators.controller';

const router = Router();
router.use(authMiddleware);

router.post('/add', addCollaboratorHandler);
router.get('/:projectId', listCollaboratorsHandler);
router.delete('/:projectId/:userId', removeCollaboratorHandler);

export default router;
