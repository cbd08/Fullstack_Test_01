import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { http } from '../../services/http'
import toast from 'react-hot-toast'
import type { TaskStatus, TaskPriority } from '../../types/task'

interface ProjectMember {
  id: number
  name: string
  email: string
}

const schema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres.'),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  status: z.enum(['todo', 'in_progress', 'done']),
  priority: z.enum(['low', 'medium', 'high']).optional(),
  assigneeIds: z.array(z.string()).optional(),
})

type FormValues = z.infer<typeof schema>

interface Props {
  open: boolean
  projectId: string
  onClose: () => void
  onCreated: () => void
}

export const CreateTaskModal = ({
  open,
  projectId,
  onClose,
  onCreated,
}: Props) => {
  const [members, setMembers] = useState<ProjectMember[]>([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      status: 'todo',
      priority: 'medium',
      assigneeIds: [],
    },
  })

  useEffect(() => {
    if (!open) return

    const fetchMembers = async () => {
      try {
        const res = await http.get<ProjectMember[]>(
          `/projects/${projectId}/members`
        )
        setMembers(res)
      } catch (err: any) {
        console.error(err)
        toast.error(err?.message || 'Error')
      }
    }

    fetchMembers()
  }, [open, projectId])

  if (!open) return null

  const onSubmit = async (data: FormValues) => {
    try {
      const assigneeIds = (data.assigneeIds ?? []).map((id) => Number(id))

      await http.post(`/projects/${projectId}/tasks`, {
        title: data.title,
        description: data.description,
        dueDate: data.dueDate || undefined,
        status: data.status as TaskStatus,
        priority: data.priority as TaskPriority,
        assigneeIds,
      })

      toast.success('Tarea creada')
      reset({
        title: '',
        description: '',
        dueDate: '',
        status: 'todo',
        priority: 'medium',
        assigneeIds: [],
      })
      onCreated()
      onClose()
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Crear tarea</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Título</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              {...register('title')}
            />
            {errors.title && (
              <p className="text-xs text-red-500 mt-1">
                {errors.title.message}
              </p>
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

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">
                Fecha de vencimiento
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 text-sm"
                {...register('dueDate')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Prioridad
              </label>
              <select
                className="w-full border rounded-lg px-3 py-2 text-sm"
                {...register('priority')}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">
                Estado
              </label>
              <select
                className="w-full border rounded-lg px-3 py-2 text-sm"
                {...register('status')}
              >
                <option value="todo">To Do</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Asignados
            </label>
            <select
              multiple
              className="w-full border rounded-lg px-3 py-2 text-sm h-24"
              {...register('assigneeIds')}
            >
              {members.map((m) => (
                <option key={m.id} value={m.id.toString()}>
                  {m.name} ({m.email})
                </option>
              ))}
            </select>
            <p className="text-[11px] text-gray-400 mt-1">
              Usa Ctrl / Cmd para seleccionar múltiples usuarios.
            </p>
          </div>

          <div className="flex justify-end gap-2 pt-1">
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
              {isSubmitting ? 'Creando...' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
