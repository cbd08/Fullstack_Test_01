import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../pages/auth/LoginPage'
import { RegisterPage } from '../pages/auth/RegisterPage'
import { ProjectsListPage } from '../pages/projects/ProjectsListPage'
import { ProjectDetailsPage } from '../pages/projects/ProjectDetailsPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProtectedRoute } from './ProtectedRoute'
import { AppLayout } from '../components/layout/AppLayout'
import { DashboardPage } from '../pages/dashboard/DashboardPage'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Públicas */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Privadas */}

      {/* Dashboard como home */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AppLayout>
              <DashboardPage />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Lista de proyectos */}
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <AppLayout>
              <ProjectsListPage />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Detalle de proyecto */}
      <Route
        path="/projects/:projectId"
        element={
          <ProtectedRoute>
            <AppLayout>
              <ProjectDetailsPage />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* Redirecciones / errores */}
      {/* raíz -> dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
