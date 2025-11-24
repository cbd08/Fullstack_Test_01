import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="text-sm text-gray-600 mb-4">Página no encontrada</p>
      <Link
        to="/"
        className="text-sm text-blue-600 hover:underline"
      >
        Regresar
      </Link>
    </div>
  )
}
