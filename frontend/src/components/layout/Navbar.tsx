import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

export const Navbar = () => {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">Project Manager</span>
        </div>

        <div className="flex items-center gap-3">
          {user && (
            <div className="flex flex-col text-right">
              <span className="text-sm font-medium text-gray-800">
                {user.name}
              </span>
              <span className="text-xs text-gray-500">{user.email}</span>
            </div>
          )}

          <button
            type="button"
            onClick={handleLogout}
            className="text-xs px-3 py-1 rounded-lg border border-slate-300 hover:bg-slate-100"
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </header>
  )
}
