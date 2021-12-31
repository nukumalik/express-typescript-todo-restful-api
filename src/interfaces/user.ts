import {Todo} from './todo'

export interface User {
  _id?: string
  email?: string
  password?: string
  todos?: Todo[]
  createdAt?: string
  updatedAt?: string
}
