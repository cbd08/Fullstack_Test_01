import { prisma } from '../../config/prisma';
import { Prisma } from '@prisma/client';
import type { projectmember_role } from '@prisma/client'

export interface CreateProjectInput {
  name: string;
  description?: string;
  ownerId: number;
}

export interface UpdateProjectInput {
  name?: string;
  description?: string | null;
}

export interface ProjectMemberDTO {
  id: number
  name: string
  email: string
  role: projectmember_role
}

export async function listProjectsByUser(userId: number) {
  return prisma.project.findMany({
    where: {
      ownerId: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getProjectById(id: number, userId: number) {
  const project = await prisma.project.findFirst({
    where: {
      id,
      ownerId: userId,
    },
  });

  return project;
}

export async function createProject(input: CreateProjectInput) {
  const { name, description, ownerId } = input;

  const project = await prisma.project.create({
    data: {
      name,
      description,
      ownerId,
    },
  });

  return project;
}

export async function updateProject(id: number, userId: number, data: UpdateProjectInput) {
  const exists = await prisma.project.findFirst({
    where: {
      id,
      ownerId: userId,
    },
  });

  if (!exists) {
    throw new Error('PROJECT_NOT_FOUND_OR_FORBIDDEN');
  }

  const updated = await prisma.project.update({
    where: { id },
    data,
  });

  return updated;
}

export async function deleteProject(id: number, userId: number) {
  const exists = await prisma.project.findFirst({
    where: {
      id,
      ownerId: userId,
    },
  });

  if (!exists) {
    throw new Error('PROJECT_NOT_FOUND_OR_FORBIDDEN');
  }

  await prisma.project.delete({
    where: { id },
  });

  return true;
}

export async function getProjectMembersService(
  projectId: number
): Promise<ProjectMemberDTO[]> {
  const members = await prisma.projectmember.findMany({
    where: { projectId },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
    },
    orderBy: { createdAt: 'asc' },
  })

  return members.map((m) => ({
    id: m.user.id,
    name: m.user.name,
    email: m.user.email,
    role: m.role,
  }))
}

export async function addProjectMember(
  projectId: number,
  userId: number,
  role: projectmember_role = 'MEMBER'
): Promise<ProjectMemberDTO> {
  const pm = await prisma.projectmember.upsert({
    where: {
      projectId_userId: { projectId, userId },
    },
    update: {
      role,
    },
    create: {
      projectId,
      userId,
      role,
    },
    include: {
      user: { select: { id: true, name: true, email: true } },
    },
  })

  return {
    id: pm.user.id,
    name: pm.user.name,
    email: pm.user.email,
    role: pm.role,
  }
}

export async function removeProjectMemberService(
  projectId: number,
  userId: number
): Promise<boolean> {
  const existing = await prisma.projectmember.findUnique({
    where: {
      projectId_userId: { projectId, userId },
    },
  })

  if (!existing) return false

  await prisma.projectmember.delete({
    where: {
      projectId_userId: { projectId, userId },
    },
  })

  return true
}