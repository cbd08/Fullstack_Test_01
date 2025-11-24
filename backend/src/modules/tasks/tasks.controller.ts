import type { Request, Response } from 'express'
import {
  tasksService,
  type ClientTaskStatus,
  type ClientTaskPriority,
} from './tasks.service'

export const getProjectTasks = async (req: Request, res: Response) => {
  const { projectId } = req.params

  try {
    const tasks = await tasksService.getByProject(Number(projectId))
    return res.json(tasks)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al obtener las tareas del proyecto' })
  }
}

export const createTaskHandler = async (req: Request, res: Response) => {
  const { projectId } = req.params
  const { title, description, dueDate, status, priority, assigneeIds } =
    req.body as {
      title: string
      description?: string
      dueDate?: string
      status?: ClientTaskStatus
      priority?: ClientTaskPriority
      assigneeIds?: number[]
    }

  if (!title) {
    return res.status(400).json({ message: 'Se requiere título' })
  }

  try {
    const task = await tasksService.create(Number(projectId), {
      title,
      description,
      dueDate,
      status,
      priority,
      assigneeIds,
    })

    return res.status(201).json(task)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al crear la tarea' })
  }
}

export const updateTaskHandler = async (req: Request, res: Response) => {
  const { taskId } = req.params
  const { title, description, dueDate, status, priority, assigneeIds } =
    req.body as {
      title?: string
      description?: string
      dueDate?: string
      status?: ClientTaskStatus
      priority?: ClientTaskPriority
      assigneeIds?: number[]
    }

  try {
    const updated = await tasksService.update(Number(taskId), {
      title,
      description,
      dueDate,
      status,
      priority,
      assigneeIds,
    })

    if (!updated) {
      return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    return res.json(updated)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al actualizar la tarea' })
  }
}

export const deleteTaskHandler = async (req: Request, res: Response) => {
  const { taskId } = req.params

  try {
    const ok = await tasksService.delete(Number(taskId))

    if (!ok) {
      return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    return res.status(204).send()
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al eliminar la tarea' })
  }
}
