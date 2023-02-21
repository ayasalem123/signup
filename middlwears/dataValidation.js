import { body } from 'express-validator';
export const dataValidation=[
    // email must be an email
  body('email',"email invalid").isEmail(),
  body('password',"minmum 5").isLength({ min: 5 }),
]