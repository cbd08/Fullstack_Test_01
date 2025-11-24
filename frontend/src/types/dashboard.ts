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
