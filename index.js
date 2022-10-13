import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import {registerValidation} from './validations/auth.js';
import {validationResult} from 'express-validator'


mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.soz1hvz.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("DB OK"))
.catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.post('/auth/register', registerValidation, (req, res) =>{
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(400).json(errors.array());
  }
  return res.json({
    success: true
  });
});

app.listen(4444, (err) => {
  if (err){
    console.log(err);
  }
  else{
    console.log("Server OK");
  }
})