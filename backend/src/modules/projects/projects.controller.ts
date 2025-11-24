import { Response } from 'express';
import { AuthRequest } from '../../middlewares/authMiddleware';
import type { projectmember_role } from '@prisma/client'
import {
  listProjectsByUser,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getProjectMembersService,
  addProjectMember,
  removeProjectMemberService,
} from './projects.service';

export async function getMyProjects(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.userId;

    const projects = await listProjectsByUser(userId);
    return res.json(projects);
  } catch (error) {
    console.error('Error en getMyProjects:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function getProject(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.userId;
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Id de proyecto inválido' });
    }

    const project = await getProjectById(id, userId);

    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    return res.json(project);
  } catch (error) {
    console.error('Error en getProject:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function createProjectHandler(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.userId;
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre del proyecto es requerido' });
    }

    const project = await createProject({
      name,
      description,
      ownerId: userId,
    });

    return res.status(201).json(project);
  } catch (error) {
    console.error('Error en createProjectHandler:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function updateProjectHandler(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.userId;
    const id = Number(req.params.id);
    const { name, description } = req.body;

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Id de proyecto inválido' });
    }

    const data: { name?: string; description?: string | null } = {};
    if (name !== undefined) data.name = name;
    if (description !== undefined) data.description = description;

    const updated = await updateProject(id, userId, data);

    return res.json(updated);
  } catch (error: any) {
    if (error.message === 'PROJECT_NOT_FOUND_OR_FORBIDDEN') {
      return res.status(404).json({ message: 'Proyecto no encontrado o sin permisos' });
    }

    console.error('Error en updateProjectHandler:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function deleteProjectHandler(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.userId;
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Id de proyecto inválido' });
    }

    await deleteProject(id, userId);

    return res.status(200).json({ message: 'Project deleted' })
  } catch (error: any) {
    if (error.message === 'PROJECT_NOT_FOUND_OR_FORBIDDEN') {
      return res.status(404).json({ message: 'Proyecto no encontrado o sin permisos' });
    }

    console.error('Error en deleteProjectHandler:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function getProjectMember(req: AuthRequest, res: Response) {
  const { id: projectIdParam } = req.params

  try {
    const projectId = Number(projectIdParam)
    if (Number.isNaN(projectId)) {
      return res.status(400).json({ message: 'ID de proyecto no válido' })
    }

    const members = await getProjectMembersService(projectId)
    return res.json(members)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al obtener miembros del proyecto' })
  }
}

export async function addProjectMembers(req: AuthRequest, res: Response) {
  const { id: projectIdParam } = req.params
  const { userId, role } = req.body as {
    userId: number
    role?: projectmember_role
  }

  try {
    const projectId = Number(projectIdParam)
    if (Number.isNaN(projectId) || !userId) {
      return res.status(400).json({ message: 'ID de proyecto o ID de usuario no válido' })
    }

    const member = await addProjectMember(
      projectId,
      Number(userId),
      role ?? 'MEMBER'
    )

    return res.status(201).json(member)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al agregar miembro del proyecto' })
  }
}

export async function removeProjectMembers(req: AuthRequest, res: Response) {
  const { id: projectIdParam, userId: userIdParam } = req.params

  try {
    const projectId = Number(projectIdParam)
    const userId = Number(userIdParam)

    if (Number.isNaN(projectId) || Number.isNaN(userId)) {
      return res.status(400).json({ message: 'ID de proyecto o ID de usuario no válido' })
    }

    const ok = await removeProjectMemberService(projectId, userId)
    if (!ok) {
      return res.status(404).json({ message: 'Miembro no encontrado' })
    }
    return res.status(200).json({ message: 'Miembro eliminado' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al eliminar el miembro del proyecto' })
  }
}