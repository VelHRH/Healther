import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.soz1hvz.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("DB OK"))
.catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Healther');
});

app.post('/auth/login',(req, res) =>{
  console.log(req.body);
  const token = jwt.sign(
    {
      email: req.body.email,
      fullname: "Вася Пупкин"
    }, "secretkey"
  )
  res.json({
    success: true,
    token,
  });
})

app.listen(4444, (err) => {
  if (err){
    console.log(err);
  }
  else{
    console.log("Server OK");
  }
})