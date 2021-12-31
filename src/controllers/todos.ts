import {Request, Response} from 'express'
import {Todo} from '../interfaces/todo'
import {TodoModel} from '../schemas/Todo'
import {jsonResponse} from '../utils/response'

export const all = async (req: Request, res: Response) => {
  try {
    const todos: Todo[] = await TodoModel.find()
    if (!todos.length) return jsonResponse(res, 200, 'Todo is empty', [])
    jsonResponse(res, 200, 'Success to get todos', todos)
  } catch (error) {
    jsonResponse(res, 500, 'Failed to get todos', [], error)
  }
}

export const single = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const todo: Todo = await TodoModel.findById(id)
    if (!todo) return jsonResponse(res, 404, 'Todo is not found')
    jsonResponse(res, 200, 'Success to get todo', todo)
  } catch (error) {
    jsonResponse(res, 500, 'Failed to get todo', {}, error)
  }
}

export const create = async (req: Request, res: Response) => {
  try {
    const {title, description}: Todo = req.body
    const data = {title, description}
    const created = await new TodoModel(data).save()
    jsonResponse(res, 201, 'Success to create todo', created)
  } catch (error) {
    jsonResponse(res, 500, 'Failed to create todo', {}, error)
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const todo: Todo = await TodoModel.findById(id)
    if (!todo) return jsonResponse(res, 404, 'Todo is not found')

    const {title, description, isCompleted}: Todo = req.body
    const data: Todo = {}
    if (title) data.title = title
    if (description) data.description = description
    if (isCompleted) data.isCompleted = isCompleted

    const updated = await TodoModel.findByIdAndUpdate(id, data, {new: true})
    jsonResponse(res, 201, 'Success to update todo', updated)
  } catch (error) {
    jsonResponse(res, 500, 'Failed to update todo', {}, error)
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const todo: Todo = await TodoModel.findById(id)
    if (!todo) return jsonResponse(res, 404, 'Todo is not found')

    await TodoModel.findByIdAndRemove(id)
    jsonResponse(res, 200, 'Success to delete todo')
  } catch (error) {
    jsonResponse(res, 500, 'Failed to delete todo', {}, error)
  }
}
