import type { Response } from 'express'
import type { AuthRequest } from '../../middlewares/authMiddleware'
import { getDashboardSummary } from './dashboard.service'

export async function getDashboard(req: AuthRequest, res: Response) {
  try {
    const userId = req.user?.userId
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const summary = await getDashboardSummary(userId)
    return res.json(summary)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error getting dashboard summary' })
  }
}
