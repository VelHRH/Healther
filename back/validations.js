import {body} from 'express-validator'

export const registerValidation = [
  body('email', 'Invalid email').isEmail(),
  body('password', 'Password should be longer then 5 symbols').isLength({min: 5}),
  body('fullName', 'At least 3 caracters in full name').isLength({min: 3}),
  body('avatarUrl', 'Invalid avatar link').optional().isURL()
];

export const loginValidation =[
  body('email', 'incorrect username or password').isEmail(),
  body('password', 'incorrect username or password').isLength({min: 5}),
];

export const createExerciseValidation =[
  body('title', 'Enter the name of the exercise').isLength({min: 3}).isString(),
  body('text', 'Enter a description of the exercise').isLength({min: 10}).isString(),
  body('repetitions', 'Enter the number').isInt(),
  body('tags', 'Wrong tag format').optional().isString(),
  body('imageUrl', 'Invalid image link').optional().isString(),
];

export const createProductValidation =[
  body('title', 'Enter the name of the product').isLength({min: 3}).isString(),
  body('cals', 'Enter the number').isInt(),
  body('imageUrl', 'Invalid image link').isString(),
];