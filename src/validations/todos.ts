import {check} from 'express-validator'

export const title = check('title').not().isEmpty().withMessage('Title is required')

export const description = check('description')
  .not()
  .isEmpty()
  .withMessage('Description is required')
