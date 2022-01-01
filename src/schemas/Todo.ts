import {Schema, model} from 'mongoose'

export const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: String,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  {timestamps: true}
)

export const TodoModel = model('todos', todoSchema)
