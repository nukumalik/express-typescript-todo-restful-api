import {check} from 'express-validator'

export const checkTitle = check('title').not().isEmpty().withMessage('Title is required')

export const checkDescription = check('description')
  .not()
  .isEmpty()
  .withMessage('Description is required')
