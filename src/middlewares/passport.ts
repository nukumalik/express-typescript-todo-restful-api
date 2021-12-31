import passport from 'passport'
import {Router} from 'express'

const router = Router()

router.use(passport.initialize())

export default router
