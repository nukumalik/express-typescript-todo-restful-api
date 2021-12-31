import express from 'express'
import 'dotenv/config'
import {Connection} from './utils'
import middlewares from './middlewares'
import routes from './routes'

const app = express()

Connection.mongoDB()

app.use(middlewares).use('/api/v1', routes)

const port = process.env.PORT

app.listen(port, () => console.log('Server is running on port', port))
