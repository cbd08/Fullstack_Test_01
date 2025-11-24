export type TaskStatus = 'todo' | 'in_progress' | 'done'
export type TaskPriority = 'low' | 'medium' | 'high'

export interface TaskAssignee {
  id: number
  name: string
  email: string
}

export interface Task {
  id: number
  title: string
  description?: string | null
  status: TaskStatus
  priority?: TaskPriority
  dueDate?: string | null
  projectId: number
  assignees: TaskAssignee[]
}
