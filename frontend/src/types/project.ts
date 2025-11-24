export type ProjectMemberRole = 'OWNER' | 'ADMIN' | 'MEMBER'

export interface ProjectMember {
  id: number
  name: string
  email: string
  role: ProjectMemberRole
}
