import { useEffect, useMemo, useState } from 'react'
import { http } from '../../services/http'
import toast from 'react-hot-toast'
import type { ProjectMember } from '../../types/project'

interface UserOption {
  id: number
  name: string
  email: string
}

interface Props {
  open: boolean
  projectId: string
  onClose: () => void
}

export const ProjectMembersModal = ({ open, projectId, onClose }: Props) => {
  const [members, setMembers] = useState<ProjectMember[]>([])
  const [users, setUsers] = useState<UserOption[]>([])
  const [selectedUserId, setSelectedUserId] = useState<string>('')
  const [selectedRole, setSelectedRole] = useState<'OWNER' | 'ADMIN' | 'MEMBER'>(
    'MEMBER'
  )
  const [loading, setLoading] = useState(false)

  const availableUsers = useMemo(
    () =>
      users.filter(
        (u) => !members.some((m) => m.id === u.id)
      ),
    [users, members]
  )

  const loadData = async () => {
    try {
      setLoading(true)
      const [membersRes, usersRes] = await Promise.all([
        http.get<ProjectMember[]>(`/projects/${projectId}/members`),
        http.get<UserOption[]>(`/users`),
      ])
      setMembers(membersRes)
      setUsers(usersRes)
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (open) {
      void loadData()
    }
  }, [open, projectId])

  if (!open) return null

  const handleAdd = async () => {
    if (!selectedUserId) return

    try {
      const body = {
        userId: Number(selectedUserId),
        role: selectedRole,
      }

      const newMember = await http.post<ProjectMember>(
        `/projects/${projectId}/members`,
        body
      )

      setMembers((prev) => [...prev, newMember])
      setSelectedUserId('')
      toast.success('Miembro agregado')
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error')
    }
  }

  const handleRemove = async (userId: number) => {
    try {
      await http.delete(`/projects/${projectId}/members/${userId}`)
      setMembers((prev) => prev.filter((m) => m.id !== userId))
      toast.success('Miembro eliminado')
    } catch (err: any) {
      console.error(err)
      toast.error(err?.message || 'Error')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Miembros del proyecto</h2>
          <button
            type="button"
            className="text-sm text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {loading ? (
          <p className="text-sm text-gray-500">Cargando...</p>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Miembros actuales</h3>
              {members.length === 0 ? (
                <p className="text-xs text-gray-500">
                  Aún no hay miembros. Agrega algunos usuarios a continuación.
                </p>
              ) : (
                <ul className="divide-y border rounded-lg">
                  {members.map((m) => (
                    <li
                      key={m.id}
                      className="flex items-center justify-between px-3 py-2 text-sm"
                    >
                      <div>
                        <div className="font-medium">{m.name}</div>
                        <div className="text-xs text-gray-500">
                          {m.email} · {m.role}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemove(m.id)}
                        className="text-xs text-red-600 border border-red-300 rounded px-2 py-0.5 hover:bg-red-50"
                      >
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t pt-4 mt-2">
              <h3 className="text-sm font-medium mb-2">Agregar miembro</h3>
              <div className="flex gap-2 items-center">
                <select
                  value={selectedUserId}
                  onChange={(e) => setSelectedUserId(e.target.value)}
                  className="flex-1 border rounded-lg px-2 py-1.5 text-sm"
                >
                  <option value="">Seleccionar usuario...</option>
                  {availableUsers.map((u) => (
                    <option key={u.id} value={u.id.toString()}>
                      {u.name} ({u.email})
                    </option>
                  ))}
                </select>

                <select
                  value={selectedRole}
                  onChange={(e) =>
                    setSelectedRole(e.target.value as 'OWNER' | 'ADMIN' | 'MEMBER')
                  }
                  className="border rounded-lg px-2 py-1.5 text-sm"
                >
                  <option value="MEMBER">Member</option>
                  <option value="ADMIN">Admin</option>
                  <option value="OWNER">Owner</option>
                </select>

                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={!selectedUserId}
                  className="text-sm bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 disabled:opacity-50"
                >
                  Agregar
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
