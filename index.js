import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import {registerValidation} from './validations/auth.js';
import {validationResult} from 'express-validator'
import UserModel from './models/user.js'


mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.soz1hvz.mongodb.net/healther?retryWrites=true&w=majority')
.then(() => console.log("DB OK"))
.catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.post('/auth/login', async (req, res) =>{
  try{
    const user = await UserModel.findOne({email: req.body.email});

    if (!user){
      return res.status(404).json({message: "incorrect username or password"});
    }

    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

    if (!isValidPass){
      return res.status(400).json({message: "incorrect username or password"});
    }

    const token = jwt.sign(
      {
        _id: user._id
      },
      'secret123',
      {
        expiresIn: '30d'
      }
    );
  
    const {passwordHash, ...userData} = user._doc;
  
    return res.json({...userData, token});

  } catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to login"
    });
  }
})

app.post('/auth/register', registerValidation, async (req, res) =>{
  try {
    const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(400).json(errors.array());
  }

  const password = req.body.password;
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const doc = new UserModel({
    email: req.body.email,
    fullName: req.body.fullName,
    passwordHash: hash,
    avatarUrl: req.body.avatarUrl,
    userPrime: false
  });

  const user = await doc.save();

  const token = jwt.sign(
    {
      _id: user._id
    },
    'secret123',
    {
      expiresIn: '30d'
    }
  );

  const {passwordHash, ...userData} = user._doc;

  return res.json({...userData, token});
  } catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to register :("
    });
  }
});

app.listen(4444, (err) => {
  if (err){
    console.log(err);
  }
  else{
    console.log("Server OK");
  }
})