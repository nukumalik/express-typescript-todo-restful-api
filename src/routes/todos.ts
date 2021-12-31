import {Router} from 'express'
import {TodoController} from '../controllers'
import {TodoValidation} from '../validations'
import {Passport} from '../utils'

const router = Router()

router
  .get('/', Passport.authenticate, TodoController.all)
  .get('/:id', Passport.authenticate, TodoController.single)
  .post(
    '/',
    TodoValidation.title,
    TodoValidation.description,
    Passport.authenticate,
    TodoController.create
  )
  .patch('/:id', Passport.authenticate, TodoController.update)
  .delete('/:id', Passport.authenticate, TodoController.remove)

export default router
