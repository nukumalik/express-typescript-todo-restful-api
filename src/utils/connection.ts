import mongoose from 'mongoose'
import 'dotenv/config'

export const mongoDB = () =>
  mongoose
    .connect(process.env.MONGODB_URI ?? '')
    .then(() => console.log('MongoDB connected...'))
    .catch(error => console.error(error))
