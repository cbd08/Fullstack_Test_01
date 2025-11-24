import { prisma } from '../../config/prisma';

export async function addCollaborator(projectId: number, userId: number, role: 'ADMIN' | 'MEMBER') {
  return prisma.projectmember.create({
    data: {
      projectId,
      userId,
      role,
    },
  });
}

export async function listCollaborators(projectId: number) {
  return prisma.projectmember.findMany({
    where: { projectId },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
    },
  });
}

export async function removeCollaborator(projectId: number, userId: number) {
  return prisma.projectmember.delete({
    where: {
      projectId_userId: {
        projectId,
        userId,
      },
    },
  });
}

export async function isProjectOwner(projectId: number, userId: number) {
  const project = await prisma.project.findFirst({
    where: { id: projectId, ownerId: userId },
  });
  return !!project;
}
