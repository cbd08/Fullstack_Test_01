import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { http } from '../../services/http'
//import { useAuthStore } from '../../store/authStore'
import { CreateProjectModal } from '../../components/projects/CreateProjectModal'
import { EditProjectModal } from '../../components/projects/EditProjectModal'
import { DeleteProjectModal } from '../../components/projects/DeleteProjectModal'

interface Project {
  id: string
  name: string
  description?: string
}

export const ProjectsListPage = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null)
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null)

  //const user = useAuthStore((state) => state.user)

  const [search, setSearch] = useState('')

  const fetchProjects = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await http.get<Project[]>('/projects')
      setProjects(res)
    } catch (err: any) {
      console.error(err)
      setError(err?.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void fetchProjects()
  }, [])

  const handleEditClick = (project: Project) => {
    setProjectToEdit(project)
    setShowEditModal(true)
  }

  const handleDeleteClick = (project: Project) => {
    setProjectToDelete(project)
    setShowDeleteModal(true)
  }

  const filteredProjects = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return projects

    return projects.filter((p) => {
      const name = p.name?.toLowerCase() ?? ''
      const desc = p.description?.toLowerCase() ?? ''
      return name.includes(term) || desc.includes(term)
    })
  }, [projects, search])

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Proyectos</h1>
          <p className="text-xs text-gray-500">
            Gestiona tus proyectos colaborativos
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCreateModal(true)}
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
          >
            + Nuevo Proyecto
          </button>
          <Link
            to="/"
            className="text-xs text-blue-600 hover:underline"
          >
            ← Volver a dashboard
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg border shadow-sm p-3 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Buscar
          </label>
          <input
            type="text"
            placeholder="Buscar por nombre o descripción..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>

      {loading && <p className="text-sm text-gray-500">Cargando proyectos...</p>}
      {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg bg-white p-4 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="font-semibold text-gray-800">
                    {project.name}
                  </h2>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => handleEditClick(project)}
                      className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteClick(project)}
                      className="text-xs px-2 py-1 rounded border border-red-300 text-red-600 hover:bg-red-50"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {project.description || 'Sin descripción'}
                </p>
              </div>

              <div className="flex justify-end">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-xs text-blue-600 hover:underline"
                >
                  Ver detalles →
                </Link>
              </div>
            </div>
          ))}

          {!loading && !error && projects.length === 0 && (
            <p className="text-sm text-gray-500">No se encontraron proyectos.</p>
          )}

          {!loading &&
            !error &&
            projects.length > 0 &&
            filteredProjects.length === 0 && (
              <p className="text-sm text-gray-500">
                No hay proyectos que coincidan con la búsqueda actual.
              </p>
            )}
        </div>
      )}

      <CreateProjectModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreated={fetchProjects}
      />

      <EditProjectModal
        open={showEditModal}
        project={projectToEdit}
        onClose={() => {
          setShowEditModal(false)
          setProjectToEdit(null)
        }}
        onUpdated={fetchProjects}
      />

      <DeleteProjectModal
        open={showDeleteModal}
        project={projectToDelete}
        onClose={() => {
          setShowDeleteModal(false)
          setProjectToDelete(null)
        }}
        onDeleted={fetchProjects}
      />
    </div>
  )
}
