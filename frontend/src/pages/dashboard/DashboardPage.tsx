import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { http } from '../../services/http'
import type { DashboardSummary } from '../../types/dashboard'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'

export const DashboardPage = () => {
  const [data, setData] = useState<DashboardSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadDashboard = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await http.get<DashboardSummary>('/dashboard/summary')
      setData(res)
    } catch (err: any) {
      console.error(err)
      setError(err?.message || 'Error loading dashboard')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadDashboard()
  }, [])

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-sm text-gray-500">Cargando dashboard...</p>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-sm text-red-500 mb-2">
          {error || 'Error loading dashboard'}
        </p>
        <button
          type="button"
          onClick={loadDashboard}
          className="text-sm px-3 py-1.5 rounded border border-slate-300 hover:bg-slate-100"
        >
          Reintentar
        </button>
      </div>
    )
  }

  const { projectsCount, tasksCount, tasksByStatus, recentProjects } = data

  const statusChartData = [
    { name: 'To Do', value: tasksByStatus.todo, fill: '#3b82f6' },
    { name: 'In Progress', value: tasksByStatus.in_progress, fill: '#f59e0b' },
    { name: 'Done', value: tasksByStatus.done, fill: '#10b981' },
  ]

  const projectsChartData =
    recentProjects.length > 0
      ? recentProjects.map((p) => ({
          name: p.name,
          value: p.taskCount,
          fill: '#6366f1',
        }))
      : []

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Descripción general de sus proyectos y tareas
          </p>
        </div>

        <Link
          to="/projects"
          className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700"
        >
          Ver Proyectos
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border shadow-sm p-4">
          <p className="text-xs text-gray-500 mb-1">Proyectos</p>
          <p className="text-2xl font-semibold text-slate-900">
            {projectsCount}
          </p>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-4">
          <p className="text-xs text-gray-500 mb-1">Total de Tareas</p>
          <p className="text-2xl font-semibold text-slate-900">
            {tasksCount}
          </p>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-4">
          <p className="text-xs text-gray-500 mb-1">Completado</p>
          <p className="text-2xl font-semibold text-slate-900">
            {tasksByStatus.done} / {tasksCount}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border shadow-sm p-4">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            Tareas por estado
          </h2>

          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-4">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            Tareas por proyecto reciente
          </h2>

          {projectsChartData.length === 0 ? (
            <p className="text-xs text-gray-500">Aún no hay proyectos con tareas.</p>
          ) : (
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={projectsChartData}
                  layout="vertical"
                  margin={{ left: 80, right: 20, top: 10, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    type="number"
                    allowDecimals={false}
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tick={{ fontSize: 11 }}
                    width={100}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg border shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-900">
            Proyectos recientes
          </h2>
          <Link
            to="/projects"
            className="text-xs text-blue-600 hover:underline"
          >
            Ver todo
          </Link>
        </div>

        {recentProjects.length === 0 ? (
          <p className="text-xs text-gray-500">
            Aún no tienes proyectos. Crea uno para empezar.
          </p>
        ) : (
          <ul className="divide-y">
            {recentProjects.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between py-2 text-sm"
              >
                <Link
                  to={`/projects/${p.id}`}
                  className="font-medium text-slate-800 hover:underline"
                >
                  {p.name}
                </Link>

                <span className="text-xs text-gray-500">
                  {p.taskCount} tarea{p.taskCount === 1 ? '' : 's'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
