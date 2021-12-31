import {Router} from 'express'
import {TodoController} from '../controllers'
import {checkDescription, checkTitle} from '../validations/todos'

const router = Router()

router
  .get('/', TodoController.all)
  .get('/:id', TodoController.single)
  .post('/', checkTitle, checkDescription, TodoController.create)
  .patch('/:id', checkTitle, checkDescription, TodoController.update)
  .delete('/:id', TodoController.remove)

export default router
