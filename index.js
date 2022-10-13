import express from 'express';
import mongoose from 'mongoose';
import {registerValidation} from './validations/auth.js';
import checkAuth from './utils/checkAuth.js'
import {register, login, getMe} from './controllers/UserController.js'

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.soz1hvz.mongodb.net/healther?retryWrites=true&w=majority')
.then(() => console.log("DB OK"))
.catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.post('/auth/login', login)

app.post('/auth/register', registerValidation, register);

app.get('/auth/me', checkAuth, getMe);

app.listen(4444, (err) => {
  if (err){
    console.log(err);
  }
  else{
    console.log("Server OK");
  }
})