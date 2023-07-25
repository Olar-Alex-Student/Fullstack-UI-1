import { Role } from "./role.model"

export interface User {
  userId: string,
  email: string,
  name: string,
  username: string,
  nickname: string,
  picture: string,
  roleId?: string,
  role?: Role
}