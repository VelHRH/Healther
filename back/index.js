import express from 'express';
import mongoose from 'mongoose';
import {registerValidation, loginValidation, createExerciseValidation} from './validations.js';
import checkAuth from './utils/checkAuth.js'
import * as UserController from './controllers/UserController.js'
import * as ExerciseController from './controllers/ExerciseController.js'

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.soz1hvz.mongodb.net/healther?retryWrites=true&w=majority')
.then(() => console.log("DB OK"))
.catch((err) => console.log("DB error", err));

const PORT = process.env.PORT || 4444;

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login)
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/exercises', checkAuth, createExerciseValidation, ExerciseController.create);
app.get('/exercises', ExerciseController.getAll);

app.listen(PORT, (err) => {
  if (err){
    console.log(err);
  }
  else{
    console.log("Server OK");
  }
})