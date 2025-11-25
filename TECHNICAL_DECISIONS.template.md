# Decisiones Técnicas
## Sebastian Diaz

## 📋 Información General
- **Nombre del Candidato**: Sebastian Diaz
- **Fecha de Inicio**: 22/11/2025
- **Fecha de Entrega**: 24/11/2025
- **Tiempo Dedicado**: ~20 horas

## 🛠️ Stack Tecnológico Elegido

### Backend
| Tecnología | Versión | Razón de Elección |
|------------|---------|-------------------|
| Node.js | 18.x | LTS, estable, soporte amplio |
| Express | 4.x | Minimalista y flexible |
| MySQL | 8.x | Relacional, ideal para entidades con relaciones |
| Prisma | 5.x | Migraciones, tipado fuerte, DX excelente |
| Zod | Última | Validación moderna reutilizable |
| Jest | Última | Testing simple y robusto |

### Frontend
| Tecnología | Versión | Razón |
|------------|---------|--------|
| React | 18.x | SPA moderna y declarativa |
| Vite | Última | Dev server ultra rápido |
| Zustand | Última | Estado global simple |
| TailwindCSS | 3.x | Estilos rápidos y consistentes |
| React Hook Form | Última | Manejo eficiente de formularios |

## 🏗️ Arquitectura

### Backend
```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── prisma/
│   └── app.js
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── hooks/
│   ├── services/
│   └── main.jsx
```

## 🗄️ Base de Datos

### Elección: MySQL

**Razones:**
- Relacional
- Integridad referencial
- Fácil modelado para Usuarios-Proyectos-Tareas

### Decisiones:
- Normalización hasta 3FN
- Relaciones 1:N para proyectos y tareas
- Índices en claves foráneas para optimizar consultas

## 🔐 Seguridad
- Hash de contraseñas con bcrypt
- JWT con expiración de 7 días
- Validación Zod para inputs
- CORS configurado a dominios permitidos
- Helmet para headers de seguridad

## 🎨 UI/UX
- TailwindCSS → consistencia visual
- Diseño responsive
- Loading states en Peticiones
- Feedback visual con toasts
- Validación en formularios del lado del cliente y servidor

## 🧪 Testing
### Backend
- Pruebas de rutas principales: auth, proyectos, tareas
- Supertest para endpoints
### Frontend
- Tests de componentes clave: Login, ProtectedRoute, ProjectsList
- React Testing Library

## 🐳 Docker
(Planeado, no aplicado por entorno actual)
- multi‑stage build
- imágenes ligeras basadas en Alpine

## ⚡ Optimizaciones
- Controladores desacoplados de servicios
- Reutilización de esquemas Zod
- Cache de usuario autenticado en Zustand

## 🚧 Desafíos y Soluciones

### 1. Manejo de autenticación global
**Solución:** Zustand + persistencia local

### 2. Renderizado protegido
**Solución:** ProtectedRoute validando token

### 3. Tests fallando por asincronía
**Solución:** Mock de stores + waitFor

## 🎯 Trade-offs

### Prisma vs SQL puro
- Prisma agiliza desarrollo, pero menos flexibilidad en queries complejas

### Zustand vs Redux
- Zustand es más rápido, Redux más estructurado

## 🔮 Mejoras Futuras
1. Roles y permisos
2. WebSockets para tareas en tiempo real
3. Dockerización completa del entorno

## 📚 Recursos Consultados
- Documentación Prisma
- Documentación React
- StackOverflow
- MDN

## 🤔 Reflexión Final
- **Qué salió bien:** Arquitectura limpia y mantenible
- **Qué mejorar:** Más test coverage con tiempo adicional
- **Qué aprendí:** Mejor dominio de Zustand, Prisma y testing avanzado

**Fecha última actualización:** 24/11/2025
