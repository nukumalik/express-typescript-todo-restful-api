import {Router} from 'express'

// Middlewares
import bodyParser from './bodyParser'

const router = Router()

router.use(bodyParser)

export default router
