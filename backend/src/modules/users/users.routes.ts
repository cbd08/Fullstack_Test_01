import { Router } from 'express'
import { authMiddleware } from '../../middlewares/authMiddleware'
import { getUsers } from './users.controller'

const router = Router()

router.use(authMiddleware)

router.get('/', getUsers)

export default router
