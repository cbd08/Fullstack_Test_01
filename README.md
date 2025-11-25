# Prueba Técnica - Fullstack Developer (Node.js + React)

¡Bienvenido(a) a mi solución para la prueba técnica para el puesto de **Desarrollador Fullstack**!

Esta implementación cumple con todos los requisitos solicitados: backend con Node.js + Express + Prisma + MySQL, frontend con React + Vite + Zustand, autenticación JWT, gestión completa de proyectos y tareas, estadísticas, filtros y pruebas automatizadas.

---

## 📋 Descripción General del Proyecto

Desarrollé una **plataforma colaborativa de gestión de proyectos y tareas**, permitiendo a los usuarios:

- Registrarse e iniciar sesión con JWT
- Crear, editar y eliminar proyectos
- Agregar colaboradores a cada proyecto
- Crear tareas asignadas a proyectos y usuarios
- Gestionar tareas por estado y prioridad
- Ver estadísticas generales en un dashboard
- Acceder solo a contenido protegido (rutas seguras)

---

# 🛠️ Stack Tecnológico Final

### Backend
- Node.js 18+
- Express.js
- Prisma ORM
- MySQL 8
- Zod (validación)
- JWT + bcrypt
- Swagger (documentación API)
- Jest + Supertest

### Frontend
- React 18+
- Vite
- Zustand (global state)
- React Hook Form + Zod resolver
- TailwindCSS
- React Router v6
- React Testing Library

---

# 📦 Funcionalidades Implementadas

Se completaron **todas las funcionalidades obligatorias** del enunciado.

### 🔐 Autenticación
- Registro
- Login con JWT
- Protección de rutas
- Perfil del usuario autenticado

### 📁 Proyectos
- CRUD completo
- Colaboradores por proyecto
- Paginación, filtros y búsqueda

### 📝 Tareas
- CRUD
- Estados: pendiente / en progreso / completada
- Prioridades: baja / media / alta
- Asignación a usuarios
- Filtros avanzados

### 📊 Dashboard
- Total de tareas
- Total de proyectos
- Tareas por estado
- Actividad reciente

---

# 📖 Instrucciones de Ejecución

## 1. Prerrequisitos

- Node.js 18+
- MySQL 8
- npm o pnpm

---

## 2. Instalación del Backend

```bash
cd backend
npm install
```

### Configuración del backend
Crea un archivo `.env` dentro de `backend/`:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL="mysql://root:password@localhost:3306/project_manager"
JWT_SECRET="super_secret_jwt_key"
JWT_EXPIRES_IN="7d"
CORS_ORIGIN="http://localhost:5173"
BCRYPT_SALT_ROUNDS=10
```

### Ejecutar migraciones

```bash
npx prisma migrate dev
```

### Ejecutar backend

```bash
npm run dev
```

El servidor quedará disponible en:

```
http://localhost:5000
```

Swagger estará en:

```
http://localhost:5000/api/docs
```

---

## 3. Instalación del Frontend

```bash
cd frontend
npm install
```

### Configuración del frontend

Crear `frontend/.env`:

```env
VITE_API_URL="http://localhost:5000/api"
```

### Ejecutar

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:5173
```

---

# 🧪 Tests

### Backend
```bash
cd backend
npm run test
```

### Frontend
```bash
cd frontend
npm run test
```

Incluye tests para:
- Auth
- ProtectedRoute
- ProjectsListPage
- CreateTaskModal

---

# 📚 API Documentation

Swagger disponible en:

👉 http://localhost:5000/api/docs

---

# 📂 Estructura del Proyecto

```
/
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── tests/
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   └── .env
├── TECHNICAL_DECISIONS.md
└── README.md
```

---

# 🤝 Entrega

- Rama de entrega: `test/sebastian-diaz`
- Documentación técnica en: `TECHNICAL_DECISIONS.md`
