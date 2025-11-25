import type React from 'react'
import { useDraggable } from '@dnd-kit/core'
import type { Task, TaskStatus } from '../../types/task'
import { http } from '../../services/http'
import toast from 'react-hot-toast'

interface TaskCardProps {
  task: Task
  projectId: string
  onChanged: () => void
  onEdit: (task: Task) => void
}

export const TaskCard = ({ task, onChanged, onEdit }: TaskCardProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
      data: { status: task.status },
    })

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.6 : 1,
  }

  const handleStatusChange = async (newStatus: TaskStatus) => {
    try {
      await http.patch(`/tasks/${task.id}`, { status: newStatus })
      toast.success('Tarea actualizada')
      onChanged()
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error')
    }
  }

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `¿Borrar tarea "${task.title}"? Esto no se puede deshacer.`
    )
    if (!confirmed) return

    try {
      await http.delete(`/tasks/${task.id}`)
      toast.success('Tarea eliminada')
      onChanged()
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error')
    }
  }

  const priorityColor =
    task.priority === 'high'
      ? 'bg-red-100 text-red-700'
      : task.priority === 'medium'
      ? 'bg-amber-100 text-amber-700'
      : task.priority === 'low'
      ? 'bg-emerald-100 text-emerald-700'
      : ''

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-md p-3 shadow-sm border border-slate-200"
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        {/* zona draggable */}
        <div
          className="flex-1 cursor-grab active:cursor-grabbing"
          {...listeners}
          {...attributes}
        >
          <h4 className="text-sm font-semibold text-gray-800">
            {task.title}
          </h4>
        </div>

        <div className="flex gap-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onEdit(task)
            }}
            className="text-[11px] px-2 py-0.5 rounded border border-slate-300 text-gray-700 hover:bg-slate-100"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              void handleDelete()
            }}
            className="text-[11px] px-2 py-0.5 rounded border border-red-300 text-red-600 hover:bg-red-50"
          >
            Borrar
          </button>
        </div>
      </div>

      {task.description && (
        <p className="text-xs text-gray-600 mt-1 line-clamp-3">
          {task.description}
        </p>
      )}

      {task.assignees && task.assignees.length > 0 && (
        <div className="flex flex-wrap items-center gap-1 mt-2">
          {task.assignees.map((a) => (
            <span
              key={a.id}
              className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-gray-700"
            >
              👤 {a.name}
            </span>
          ))}
        </div>
      )}

      {task.priority && (
        <div className="mt-1">
          <span
            className={`text-[11px] px-2 py-0.5 rounded-full ${priorityColor}`}
          >
            {task.priority.toUpperCase()}
          </span>
        </div>
      )}

      {task.dueDate && (
        <div className="mt-1">
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-gray-700">
            📅 {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>
      )}

      <div className="mt-3">
        <label className="text-[11px] text-gray-500 block mb-1">
          Cambiar estado
        </label>
        <select
          value={task.status}
          onChange={(e) => handleStatusChange(e.target.value as TaskStatus)}
          className="w-full text-xs border rounded-md px-2 py-1"
        >
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  )
}
