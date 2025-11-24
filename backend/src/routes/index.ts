import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';
import { authMiddleware, AuthRequest } from '../middlewares/authMiddleware';
import projectsRoutes from '../modules/projects/projects.routes';
import collaboratorsRoutes from '../modules/collaborators/collaborators.routes';
import tasksRoutes  from '../modules/tasks/tasks.routes';
import dashboardRoutes  from '../modules/dashboard/dashboard.routes';
import userRoutes  from '../modules/users/users.routes';

const router = Router();

router.get('/status', (_req, res) => {
  res.json({ ok: true, message: 'API online' });
});

// Ruta de autenticación publicas 
router.use('/auth', authRoutes);

// Ruta protegida de prueba
router.get('/me', authMiddleware, (req: AuthRequest, res) => {
  return res.json({
    message: 'Usuario autenticado',
    user: req.user,
  });
});

// Rutas protegidas
router.use('/projects', projectsRoutes);
router.use('/collaborators', collaboratorsRoutes);
router.use(tasksRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes);

export default router;
