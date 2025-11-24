import { prisma } from '../../config/prisma'
import type { task_status } from '@prisma/client'

export interface DashboardProjectSummary {
  id: number
  name: string
  taskCount: number
}

export interface DashboardSummary {
  projectsCount: number
  tasksCount: number
  tasksByStatus: {
    todo: number
    in_progress: number
    done: number
  }
  recentProjects: DashboardProjectSummary[]
}

function mapStatus(status: task_status): 'todo' | 'in_progress' | 'done' {
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

export async function getDashboardSummary(
  userId: number
): Promise<DashboardSummary> {
  // Proyectos donde el usuario es owner o miembro
  const projects = await prisma.project.findMany({
    where: {
      OR: [
        { ownerId: userId },
        {
          projectmember: {
            some: { userId },
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      task: {
        select: {
          status: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const projectsCount = projects.length

  let tasksCount = 0
  const tasksByStatus = {
    todo: 0,
    in_progress: 0,
    done: 0,
  }

  const recentProjects: DashboardProjectSummary[] = []

  for (const p of projects) {
    const taskCount = p.task.length
    tasksCount += taskCount

    for (const t of p.task) {
      const mapped = mapStatus(t.status)
      tasksByStatus[mapped]++
    }

    recentProjects.push({
      id: p.id,
      name: p.name,
      taskCount,
    })
  }

  // Nos quedamos solo con los 5 más recientes
  const topRecent = recentProjects.slice(0, 5)

  return {
    projectsCount,
    tasksCount,
    tasksByStatus,
    recentProjects: topRecent,
  }
}
