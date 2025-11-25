# CONFIGURATION.md
## Configuración del Proyecto – Sebastián Díaz

Este archivo documenta toda la configuración necesaria para ejecutar el proyecto **localmente**, incluyendo variables de entorno, estructura de carpetas y pasos para levantar el backend y frontend.

---

# 🔧 1. Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js 18+**
- **npm** o **pnpm**
- **MySQL 8+**
- **Git**
- **Vite** (instalado automáticamente con el frontend)
- **Prisma CLI** (incluido con el backend)

---

# 🔐 2. Variables de Entorno

El proyecto se divide en:

- `backend/`
- `frontend/`

Cada sección requiere su propio archivo `.env`.

---

## 2.1 Backend – Archivo `.env`

Crear en:

```
backend/.env
```

Contenido recomendado:

```env
# Puerto del servidor backend
PORT=5000

# Entorno
NODE_ENV=development

# Base de datos MySQL
DATABASE_URL="mysql://root:password@localhost:3306/project_manager"

# JWT
JWT_SECRET="super_secret_jwt_key"
JWT_EXPIRES_IN="7d"

# CORS
CORS_ORIGIN="http://localhost:5173"

# Bcrypt
BCRYPT_SALT_ROUNDS=10
```

---

## 2.2 Frontend – Archivo `.env`

Crear en:

```
frontend/.env
```

Contenido:

```env
VITE_API_URL="http://localhost:5000/api"
```

---

# 🗄️ 3. Configuración del Backend

1. Ir a la carpeta del backend:

```bash
cd backend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear la base de datos MySQL:

```sql
CREATE DATABASE project_manager CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

4. Ejecutar migraciones Prisma:

```bash
npx prisma migrate dev
```

5. Levantar el backend:

```bash
npm run dev
```

El backend estará disponible en:

```
http://localhost:5000
```

Documentación Swagger:

```
http://localhost:5000/api/docs
```

---

# 🎨 4. Configuración del Frontend

1. Ir a la carpeta del frontend:

```bash
cd frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Levantar el frontend:

```bash
npm run dev
```

La aplicación se abrirá en:

```
http://localhost:5173
```

---

# 📂 5. Estructura General del Proyecto

```
/
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── tests/
│   └── .env (local)
├── frontend/
│   ├── src/
│   ├── public/
│   └── .env (local)
├── TECHNICAL_DECISIONS.md
├── CONFIGURATION.md
└── README.md
```

---

# 🚀 6. Flujo de Levantamiento Rápido

1. Encender MySQL  
2. Backend:
```bash
npm run dev
```
3. Frontend:
```bash
npm run dev
```

---

# 🧪 7. Ejecutar Tests

### Backend
```bash
npm run test
```

### Frontend
```bash
npm run test
```

