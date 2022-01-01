import {Schema, model} from 'mongoose'

export const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {timestamps: true}
)

export const UserModel = model('users', userSchema)
