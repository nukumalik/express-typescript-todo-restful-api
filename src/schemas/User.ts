import {Schema, model} from 'mongoose'

export const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    todos: {
      type: Schema.Types.ObjectId,
      ref: 'todos',
    },
  },
  {timestamps: true}
)

export const UserModel = model('users', userSchema)
