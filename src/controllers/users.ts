import 'dotenv/config'
import {compareSync, genSaltSync, hashSync} from 'bcrypt'
import {Request, Response} from 'express'
import {User} from '../interfaces/user'
import {UserModel} from '../schemas/User'
import {jsonResponse} from '../utils/response'
import jwt from 'jsonwebtoken'
import {JWTPayload} from '../interfaces/jwt'

export const profile = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const user: User = await UserModel.findById(id)
    if (!user) return jsonResponse(res, 404, 'User is not found')

    const data: User = {
      _id: user?._id,
      email: user?.email,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    }
    jsonResponse(res, 200, 'Success to get user', data)
  } catch (error) {
    jsonResponse(res, 500, 'Failed to get user', {}, error)
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const {email, password, password2} = req.body
    if (password !== password2) return jsonResponse(res, 400, 'Password is not match')

    const user: User = await UserModel.findOne({email})
    if (user) return jsonResponse(res, 400, 'Email was registered')

    const data = {email, password: hashSync(password, genSaltSync(10))}
    const registered = await new UserModel(data).save()
    jsonResponse(res, 201, 'Success to register user', registered)
  } catch (error) {
    jsonResponse(res, 500, 'Failed to register user', {}, error)
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password}: User = req.body
    const user: User = await UserModel.findOne({email})
    if (!user) return jsonResponse(res, 400, 'Email not registered yet')

    console.log(user)

    const isMatch = compareSync(password ?? '', user?.password ?? '')
    if (!isMatch) return jsonResponse(res, 400, 'Password is invalid')

    const payload: JWTPayload = {
      _id: user?._id,
      email: user?.email,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    }

    const token = await jwt.sign(payload, process.env.SECRET_OR_KEY ?? '', {expiresIn: 3600})
    if (!token) return jsonResponse(res, 400, 'Failed to create jwt token')

    jsonResponse(res, 200, 'Success to login user', {token})
  } catch (error) {
    jsonResponse(res, 500, 'Failed to login user', {}, error)
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const user: User = await UserModel.findById(id)
    if (!user) return jsonResponse(res, 404, 'User is not found')

    const {email, password}: User = req.body
    const data: User = {
      email: email ?? user.email,
      password: password ? hashSync(password, genSaltSync(10)) : user.password,
    }

    const updated = await UserModel.findByIdAndUpdate(id, data, {new: true})
    jsonResponse(res, 201, 'Success to update user', updated)
  } catch (error) {
    jsonResponse(res, 500, 'Failed to update user', {}, error)
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const user: User = await UserModel.findById(id)
    if (!user) return jsonResponse(res, 404, 'User is not found')

    await UserModel.findByIdAndRemove(id)
    jsonResponse(res, 200, 'Success to delete user')
  } catch (error) {
    jsonResponse(res, 500, 'Failed to delete user', {}, error)
  }
}
