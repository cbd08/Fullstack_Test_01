import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import {
  getMyProjects,
  getProject,
  createProjectHandler,
  updateProjectHandler,
  deleteProjectHandler,
  getProjectMember,
  addProjectMembers,
  removeProjectMembers,
} from './projects.controller';

const router = Router();

router.use(authMiddleware);

router.get('/', getMyProjects);         
router.get('/:id', getProject);       
router.post('/', createProjectHandler);  
router.put('/:id', updateProjectHandler);
router.delete('/:id', deleteProjectHandler); 
router.get('/:id/members', getProjectMember);
router.post('/:id/members', addProjectMembers);
router.delete('/:id/members/:userId', removeProjectMembers);

export default router;
