import { prisma } from '../../config/prisma'
import { task_status, task_priority } from '@prisma/client'

export type ClientTaskStatus = 'todo' | 'in_progress' | 'done'
export type ClientTaskPriority = 'low' | 'medium' | 'high'

export interface CreateTaskInput {
  title: string
  description?: string
  dueDate?: string
  status?: ClientTaskStatus
  priority?: ClientTaskPriority
  assigneeIds?: number[]
}

export interface UpdateTaskInput {
  title?: string
  description?: string
  dueDate?: string
  status?: ClientTaskStatus
  priority?: ClientTaskPriority
  assigneeIds?: number[]
}

export interface TaskAssigneeDTO {
  id: number
  name: string
  email: string
}

export interface TaskDTO {
  id: number
  title: string
  description: string | null
  status: ClientTaskStatus
  priority: ClientTaskPriority
  dueDate: string | null
  projectId: number
  assignees: TaskAssigneeDTO[]
  createdAt: string
  updatedAt: string
}

export interface UserDTO {
  id: number
  name: string
  email: string
}

function mapStatusClientToDb(status?: ClientTaskStatus): task_status {
  switch (status) {
    case 'in_progress':
      return 'IN_PROGRESS'
    case 'done':
      return 'DONE'
    case 'todo':
    default:
      return 'TODO'
  }
}

function mapStatusDbToClient(status: task_status): ClientTaskStatus {
  switch (status) {
    case 'IN_PROGRESS':
      return 'in_progress'
    case 'DONE':
      return 'done'
    case 'TODO':
    default:
      return 'todo'
  }
}

function mapPriorityClientToDb(priority?: ClientTaskPriority): task_priority {
  switch (priority) {
    case 'low':
      return 'LOW'
    case 'high':
      return 'HIGH'
    case 'medium':
    default:
      return 'MEDIUM'
  }
}

function mapPriorityDbToClient(priority: task_priority): ClientTaskPriority {
  switch (priority) {
    case 'LOW':
      return 'low'
    case 'HIGH':
      return 'high'
    case 'MEDIUM':
    default:
      return 'medium'
  }
}

function mapPrismaTaskToDTO(task: any): TaskDTO {
  return {
    id: task.id,
    title: task.title,
    description: task.description ?? null,
    status: mapStatusDbToClient(task.status),
    priority: mapPriorityDbToClient(task.priority),
    dueDate: task.dueDate ? task.dueDate.toISOString() : null,
    projectId: task.projectId,
    assignees: task.assignments.map((a: any) => ({
      id: a.user.id,
      name: a.user.name,
      email: a.user.email,
    })),
    createdAt: task.createdAt.toISOString(),
    updatedAt: task.updatedAt.toISOString(),
  }
}

export const tasksService = {
  async getByProject(projectId: number): Promise<TaskDTO[]> {
    const tasks = await prisma.task.findMany({
      where: { projectId },
      include: {
        assignments: {
          include: {
            user: { select: { id: true, name: true, email: true } },
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    })

    return tasks.map(mapPrismaTaskToDTO)
  },

  async create(projectId: number, data: CreateTaskInput): Promise<TaskDTO> {
    const assigneeIds = data.assigneeIds ?? []

    if (assigneeIds.length > 0) {
      const members = await prisma.projectmember.findMany({
        where: { projectId },
        select: { userId: true },
      })
      const allowed = new Set(members.map((m) => m.userId))
      data.assigneeIds = assigneeIds.filter((id) => allowed.has(id))
    }

    const task = await prisma.task.create({
      data: {
        projectId,
        title: data.title,
        description: data.description ?? null,
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
        status: mapStatusClientToDb(data.status),
        priority: mapPriorityClientToDb(data.priority),
        assignments:
          data.assigneeIds && data.assigneeIds.length
            ? {
                create: data.assigneeIds.map((userId) => ({ userId })),
              }
            : undefined,
      },
      include: {
        assignments: {
          include: {
            user: { select: { id: true, name: true, email: true } },
          },
        },
      },
    })

    return mapPrismaTaskToDTO(task)
  },

  async update(taskId: number, data: UpdateTaskInput): Promise<TaskDTO | null> {
    const existing = await prisma.task.findUnique({
      where: { id: taskId },
      include: {
        assignments: {
          include: {
            user: { select: { id: true, name: true, email: true } },
          },
        },
      },
    })
    if (!existing) return null

    const assigneeIds = data.assigneeIds

    const task = await prisma.task.update({
      where: { id: taskId },
      data: {
        title: data.title ?? existing.title,
        description: data.description ?? existing.description,
        dueDate: data.dueDate ? new Date(data.dueDate) : existing.dueDate,
        status: data.status
          ? mapStatusClientToDb(data.status)
          : existing.status,
        priority: data.priority
          ? mapPriorityClientToDb(data.priority)
          : existing.priority,
        assignments:
          assigneeIds !== undefined
            ? {
                deleteMany: {},
                create: assigneeIds.map((userId) => ({ userId })),
              }
            : undefined,
      },
      include: {
        assignments: {
          include: {
            user: { select: { id: true, name: true, email: true } },
          },
        },
      },
    })

    return mapPrismaTaskToDTO(task)
  },

  async delete(taskId: number): Promise<boolean> {
    const existing = await prisma.task.findUnique({ where: { id: taskId } })
    if (!existing) return false

    await prisma.task.delete({ where: { id: taskId } })
    return true
  },
}