import {User} from './user'

export interface Todo {
  _id?: string
  title?: string
  description?: string
  isCompleted?: boolean
  user?: User | string
  createdAt?: string
  updatedAt?: string
}
