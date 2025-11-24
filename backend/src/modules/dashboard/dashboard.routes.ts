import { Router } from 'express'
import { authMiddleware } from '../../middlewares/authMiddleware'
import { getDashboard } from './dashboard.controller'

const router = Router()

router.use(authMiddleware)

router.get('/summary', getDashboard)

export default router
