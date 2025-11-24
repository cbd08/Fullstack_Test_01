import { Response } from 'express';
import { AuthRequest } from '../../middlewares/authMiddleware';
import {
  addCollaborator,
  listCollaborators,
  removeCollaborator,
  isProjectOwner,
} from './collaborators.service';

export async function addCollaboratorHandler(req: AuthRequest, res: Response) {
  try {
    const ownerId = req.user!.userId;
    const { projectId, userId, role } = req.body;

    if (!projectId || !userId || !role) {
      return res.status(400).json({ message: 'Faltan parámetros (projectId, userId, role)' });
    }

    const isOwner = await isProjectOwner(projectId, ownerId);
    if (!isOwner) {
      return res.status(403).json({ message: 'No tienes permiso (solo el dueño del proyecto puede agregar)' });
    }

    const member = await addCollaborator(projectId, userId, role);
    return res.json(member);
  } catch (error) {
    console.error('Error en addCollaborator:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function listCollaboratorsHandler(req: AuthRequest, res: Response) {
  try {
    const projectId = Number(req.params.projectId);

    if (isNaN(projectId)) {
      return res.status(400).json({ message: 'projectId inválido' });
    }

    const collaborators = await listCollaborators(projectId);
    return res.json(collaborators);
  } catch (error) {
    console.error('Error en listCollaborators:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function removeCollaboratorHandler(req: AuthRequest, res: Response) {
  try {
    const ownerId = req.user!.userId;
    const projectId = Number(req.params.projectId);
    const userId = Number(req.params.userId);

    const isOwner = await isProjectOwner(projectId, ownerId);
    if (!isOwner) {
      return res.status(403).json({ message: 'No permitido' });
    }

    await removeCollaborator(projectId, userId);
    return res.status(204).send();
  } catch (error) {
    console.error('Error en removeCollaborator:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
