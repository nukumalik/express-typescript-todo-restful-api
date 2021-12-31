import {Response} from 'express'

export const jsonResponse = (
  res: Response,
  code: number,
  message: string,
  data: any = {},
  error: any = null
) => {
  return res.status(code).json({code, message, data, error})
}
