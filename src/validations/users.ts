import {check} from 'express-validator'

export const email = check('email')
  .not()
  .isEmpty()
  .withMessage('Email is required')
  .isEmail()
  .withMessage('Please input correct email')

export const password = check('password')
  .not()
  .isEmpty()
  .withMessage('Password is required')
  .isLength({min: 8})
  .withMessage('Password must be at least 8 characters')

export const password2 = check('password2')
  .not()
  .isEmpty()
  .withMessage('Confirmation Password is required')
  .custom((value, {req}) => {
    if (value !== req.body.password) throw new Error('Password is not match')
    return value
  })
