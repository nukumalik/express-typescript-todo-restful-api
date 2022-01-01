import {Router} from 'express'
import {UserController} from '../controllers'
import {UserValidation} from '../validations'
import {Passport} from '../utils'

const router = Router()

router
  .get('/profile', Passport.authenticate, UserController.profile)
  .post('/login', UserValidation.email, UserValidation.password, UserController.login)
  .post(
    '/register',
    UserValidation.email,
    UserValidation.password,
    UserValidation.password2,
    UserController.register
  )
  .patch('/:id', Passport.authenticate, UserController.update)
  .delete('/:id', UserController.remove)

export default router
