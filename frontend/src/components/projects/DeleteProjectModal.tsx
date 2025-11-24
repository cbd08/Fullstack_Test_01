import { http } from '../../services/http'
import toast from 'react-hot-toast'

interface Project {
  id: string
  name: string
  description?: string
}

interface Props {
  open: boolean
  project: Project | null
  onClose: () => void
  onDeleted: () => void
}

export const DeleteProjectModal = ({
  open,
  project,
  onClose,
  onDeleted,
}: Props) => {
  if (!open || !project) return null

  const handleDelete = async () => {
    try {
      await http.delete(`/projects/${project.id}`)
      toast.success('Project deleted')
      onDeleted()
      onClose()
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
        <h2 className="text-lg font-semibold mb-3 text-red-600">
          Eliminar proyecto
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          ¿Estás seguro de que deseas eliminar el proyecto?{' '}
          <span className="font-semibold">&quot;{project.name}&quot;</span>?
          Esta acción no se puede deshacer.
        </p>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="text-sm px-3 py-1 rounded-lg border hover:bg-slate-100"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="text-sm px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
