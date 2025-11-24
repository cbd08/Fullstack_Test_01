import { Router } from 'express'
import { authMiddleware } from '../../middlewares/authMiddleware'
import {
  getProjectTasks,
  createTaskHandler,
  updateTaskHandler,
  deleteTaskHandler,
} from './tasks.controller'

const router = Router()

router.use(authMiddleware)

router.get('/projects/:projectId/tasks', getProjectTasks)
router.post('/projects/:projectId/tasks', createTaskHandler)

router.patch('/tasks/:taskId', updateTaskHandler)
router.delete('/tasks/:taskId', deleteTaskHandler)

export default router
