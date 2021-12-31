import {Router} from 'express'

// Middlewares
import bodyParser from './bodyParser'
import passport from './passport'
import morgan from './morgan'

const router = Router()

router.use(bodyParser).use(passport).use(morgan)

export default router
