import {body} from 'express-validator'

export const registerValidation = [
  body('email', 'Неверная почта').isEmail(),
  body('password', 'Пароль должен содержать минимум 5 символов').isLength({min: 5}),
  body('fullName', 'Имя хотя бы из 3 символов').isLength({min: 3}),
  body('avatarUrl', 'Неверная ссылка на аватар').optional().isURL()
];