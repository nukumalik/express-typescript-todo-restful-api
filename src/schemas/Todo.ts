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
  },
  {timestamps: true}
)

export const TodoModel = model('todos', todoSchema)
