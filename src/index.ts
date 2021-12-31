import express from 'express'
import 'dotenv/config'
import {Connection, Passport} from './utils'
import middlewares from './middlewares'
import routes from './routes'

const app = express()

// Middlewares
app.use(middlewares)

// Utils
Connection.mongoDB()
Passport.strategy()

// Routes
app.use('/api/v1', routes)

const port = process.env.PORT

app.listen(port, () => console.log('Server is running on port', port))
