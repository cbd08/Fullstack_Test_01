import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { http } from '../../services/http'
import toast from 'react-hot-toast'

const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  description: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

interface Project {
  id: string
  name: string
  description?: string
}

interface Props {
  open: boolean
  project: Project | null
  onClose: () => void
  onUpdated: () => void
}

export const EditProjectModal = ({ open, project, onClose, onUpdated }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (project) {
      reset({
        name: project.name,
        description: project.description ?? '',
      })
    }
  }, [project, reset])

  if (!open || !project) return null

  const onSubmit = async (data: FormValues) => {
    try {
      await http.put(`/projects/${project.id}`, data)
      toast.success('Proyecto actualizado')
      onUpdated()
      onClose()
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Editar proyecto</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Descripción
            </label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 text-sm"
              {...register('description')}
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="text-sm px-3 py-1 rounded-lg border hover:bg-slate-100"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm bg-emerald-600 text-white px-3 py-1 rounded-lg hover:bg-emerald-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Guardando...' : 'Guardar cambios'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
