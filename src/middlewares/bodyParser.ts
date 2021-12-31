import bodyParser from 'body-parser'
import {Router} from 'express'

const router = Router()

router.use(bodyParser.urlencoded({extended: false})).use(bodyParser.json())

export default router
