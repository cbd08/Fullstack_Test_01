import { prisma } from '../../config/prisma'

export interface UserDTO {
  id: number
  name: string
  email: string
}

export const usersService = {
  async getAll(): Promise<UserDTO[]> {
    const users = await prisma.user.findMany({
      orderBy: { name: 'asc' },
    })
    return users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
    }))
  },
}
