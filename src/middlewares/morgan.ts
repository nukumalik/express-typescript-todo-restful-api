import morgan from 'morgan'
import {Router} from 'express'

const router = Router()

router.use(
  morgan(`==============================
method: :method
uri: :url
status: :status
time: :response-time ms
`)
)

export default router
