import { useState } from 'react'
import {
  DndContext,
  useDroppable,
  type DragEndEvent,
} from '@dnd-kit/core'
import type { Task, TaskStatus } from '../../types/task'
import { TaskCard } from './TaskCard'
import { CreateTaskModal } from './CreateTaskModal'
import { EditTaskModal } from './EditTaskModal'
import { http } from '../../services/http'
import toast from 'react-hot-toast'

const COLUMNS: { key: TaskStatus; label: string }[] = [
  { key: 'todo',         label: 'To Do' },
  { key: 'in_progress',  label: 'In Progress' },
  { key: 'done',         label: 'Done' },
]

interface KanbanBoardProps {
  projectId: string
  tasks: Task[]
  onRefresh: () => void
}

interface ColumnProps {
  status: TaskStatus
  label: string
  tasks: Task[]
  projectId: string
  onChanged: () => void
  onEditTask: (task: Task) => void
}

const KanbanColumn = ({
  status,
  label,
  tasks,
  projectId,
  onChanged,
  onEditTask,
}: ColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  })

  return (
    <div
      ref={setNodeRef}
      className={`bg-slate-100 rounded-lg p-3 min-h-[80px] transition-all ${
        isOver ? 'ring-2 ring-emerald-400 ring-offset-2' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-700">{label}</h3>
        <span className="text-xs text-gray-500">{tasks.length}</span>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            projectId={projectId}
            onChanged={onChanged}
            onEdit={onEditTask}
          />
        ))}

        {tasks.length === 0 && (
          <p className="text-xs text-gray-400 italic">Sin tareas</p>
        )}
      </div>
    </div>
  )
}

export const KanbanBoard = ({ projectId, tasks, onRefresh }: KanbanBoardProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null)

  const tasksByStatus = (status: TaskStatus) =>
    tasks.filter((t) => t.status === status)

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const taskId = String(active.id)
    const newStatus = over.id as TaskStatus
    const currentStatus = active.data.current?.status as TaskStatus | undefined

    if (!newStatus || newStatus === currentStatus) return

    try {
      await http.patch(`/tasks/${taskId}`, { status: newStatus })
      toast.success('Tarea movida')
      onRefresh()
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error')
    }
  }

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task)
    setShowEditModal(true)
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Tareas (Kanban)</h2>
          <button
            type="button"
            onClick={() => setShowCreateModal(true)}
            className="text-sm bg-emerald-600 text-white px-3 py-1 rounded-lg hover:bg-emerald-700"
          >
            + Nueva tarea
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <KanbanColumn
              key={col.key}
              status={col.key}
              label={col.label}
              tasks={tasksByStatus(col.key)}
              projectId={projectId}
              onChanged={onRefresh}
              onEditTask={handleEditTask}
            />
          ))}
        </div>

        <CreateTaskModal
          open={showCreateModal}
          projectId={projectId}
          onClose={() => setShowCreateModal(false)}
          onCreated={onRefresh}
        />

        <EditTaskModal
          open={showEditModal}
          task={taskToEdit}
          onClose={() => {
            setShowEditModal(false)
            setTaskToEdit(null)
          }}
          projectId={projectId}
          onUpdated={onRefresh}
        />
      </div>
    </DndContext>
  )
}
