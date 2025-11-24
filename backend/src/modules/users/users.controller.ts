import type { Request, Response } from 'express'
import { usersService } from './users.service'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersService.getAll()
    return res.json(users)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error getting users' })
  }
}
