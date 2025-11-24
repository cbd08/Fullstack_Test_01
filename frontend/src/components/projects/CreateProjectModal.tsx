import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { http } from '../../services/http'
import toast from 'react-hot-toast'

const schema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  description: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

interface Props {
  open: boolean
  onClose: () => void
  onCreated: () => void
}

export const CreateProjectModal = ({ open, onClose, onCreated }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  if (!open) return null

  const onSubmit = async (data: FormValues) => {
    try {
      await http.post('/projects', data)
      toast.success('Project created!')
      reset()
      onCreated()
      onClose()
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error creating project')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Crear nuevo proyecto</h2>

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
              Descripción (opcional)
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
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Creando...' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
