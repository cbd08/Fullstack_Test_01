import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { http } from '../../services/http'
import type { Task } from '../../types/task'
import { KanbanBoard } from '../../components/tasks/KanbanBoard'
import { ProjectMembersModal } from '../../components/projects/ProjectMembersModal'

interface Project {
  id: string
  name: string
  description?: string
}

interface ProjectDetail {
  id: number
  name: string
  description?: string | null
}

export const ProjectDetailsPage = () => {
  const { projectId } = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])

  const [loadingProject, setLoadingProject] = useState(false)
  const [loadingTasks, setLoadingTasks] = useState(false)
  const [errorProject, setErrorProject] = useState<string | null>(null)
  const [errorTasks, setErrorTasks] = useState<string | null>(null)

  const [showMembersModal, setShowMembersModal] = useState(false)

  const fetchProject = async () => {
    if (!projectId) return
    setLoadingProject(true)
    setErrorProject(null)
    try {
      const res = await http.get<Project>(`/projects/${projectId}`)
      setProject(res)
    } catch (err: any) {
      console.error(err)
      setErrorProject(err?.message || 'Error')
    } finally {
      setLoadingProject(false)
    }
  }

  const fetchTasks = async () => {
    if (!projectId) return
    setLoadingTasks(true)
    setErrorTasks(null)
    try {
      const res = await http.get<Task[]>(`/projects/${projectId}/tasks`)
      setTasks(res)
    } catch (err: any) {
      console.error(err)
      setErrorTasks(err?.message || 'Error')
    } finally {
      setLoadingTasks(false)
    }
  }

  useEffect(() => {
    fetchProject()
    fetchTasks()
  }, [projectId])

  if (loadingProject) {
    return <p className="text-sm text-gray-500">Cargando proyecto...</p>
  }

  if (errorProject) {
    return <p className="text-sm text-red-500">{errorProject}</p>
  }

  if (!project) {
    return <p className="text-sm text-gray-500">Proyecto no encontrado.</p>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            {project.name}
          </h1>
          <p className="text-xs text-gray-500">Detalles y tareas del proyecto</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowMembersModal(true)}
            className="text-sm px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100"
          >
            Administrar miembros
          </button>
          <Link
            to="/projects"
            className="text-xs text-blue-600 hover:underline"
          >
            ← Volver a proyectos
          </Link>
        </div>
      </div>

      {project.description && (
        <p className="text-sm text-gray-700">{project.description}</p>
      )}

      <div className="border-t pt-4">
        {loadingTasks && (
          <p className="text-sm text-gray-500 mb-2">Cargando tareas...</p>
        )}
        {errorTasks && (
          <p className="text-sm text-red-500 mb-2">{errorTasks}</p>
        )}

        <KanbanBoard
          projectId={project.id}
          tasks={tasks}
          onRefresh={fetchTasks}
        />

        <ProjectMembersModal
          open={showMembersModal}
          projectId={projectId as string}
          onClose={() => setShowMembersModal(false)}
        />
      </div>
    </div>
  )
}
