import {User} from './user'
import {Request} from 'express'

export interface AuthenticatedRequest extends Request {
  user?: User
}
