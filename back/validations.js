import {body} from 'express-validator'

export const registerValidation = [
  body('email', 'Неверная почта').isEmail(),
  body('password', 'Пароль должен содержать минимум 5 символов').isLength({min: 5}),
  body('fullName', 'Имя хотя бы из 3 символов').isLength({min: 3}),
  body('avatarUrl', 'Неверная ссылка на аватар').optional().isURL()
];

export const loginValidation =[
  body('email', 'Неверная почта').isEmail(),
  body('password', 'Пароль должен содержать минимум 5 символов').isLength({min: 5}),
];

export const createExerciseValidation =[
  body('title', 'Введите название упражнения').isLength({min: 3}).isString(),
  body('text', 'Введите описание упражнения').isLength({min: 10}).isString(),
  body('repetitions', 'Введите количество повторений').isInt({min: 3}),
  body('tags', 'Неверный формат тэгов').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];