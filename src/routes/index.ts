import {Router} from 'express'

// Routes
import todoRoutes from './todos'

const router = Router()

router.use('/todos', todoRoutes)

export default router
