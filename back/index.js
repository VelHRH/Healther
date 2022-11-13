import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import {registerValidation, loginValidation, createExerciseValidation, createProductValidation, createPrimeValidation, createMealValidation} from './validations.js';
import checkAuth from './utils/checkAuth.js'
import {UserController, ExerciseController, ProductController, PrimeController, MealController, CheckController} from './controllers/index.js'

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.soz1hvz.mongodb.net/healther?retryWrites=true&w=majority')
.then(() => console.log("DB OK"))
.catch((err) => console.log("DB error", err));

const PORT = process.env.PORT || 4444;

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, callback) => {
    callback(null, 'uploads');
  },
  filename: (_, filename, callback) => {
    callback(null, filename.originalname);
  },
});

const upload = multer({storage});

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', loginValidation, UserController.login)
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/exercises', checkAuth, createExerciseValidation, ExerciseController.create);
app.get('/exercises', ExerciseController.getAll);
app.get('/exercises/:id', checkAuth, ExerciseController.getOne);
app.delete('/exercises/:id', checkAuth, ExerciseController.deleteEx);

app.get('/products', ProductController.getAll);
app.post('/products', checkAuth, createProductValidation, ProductController.create);

app.post('/prime', checkAuth, createPrimeValidation, PrimeController.create);
app.get('/prime/:id', checkAuth, PrimeController.myPrime);

app.get('/meals', MealController.getAll);
app.post('/meals', checkAuth, createMealValidation, MealController.create);
app.get('/meals/:id', MealController.getOne);
app.delete('/meals/:id', checkAuth, MealController.deleteM);

app.post('/check', checkAuth, CheckController.create);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `uploads/${req.file.originalname}`
  });
});

app.listen(PORT, (err) => {
  if (err){
    console.log(err);
  }
  else{
    console.log("Server OK");
  }
})