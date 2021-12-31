import {Router} from 'express'

// Routes
import todoRoutes from './todos'
import userRoutes from './users'

const router = Router()

router.use('/todos', todoRoutes).use('/users', userRoutes)

export default router
