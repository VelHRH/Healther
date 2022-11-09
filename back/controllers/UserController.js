import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {validationResult} from 'express-validator'
import UserModel from '../models/User.js'

export const register = async (req, res) => {
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
};

export const login = async (req, res) => {
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
};

export const getMe = async (req, res) => {
  try{
    const user = await UserModel.findById(req.userId);
    if (!user){
      return res.status(404).json({message: "No access"});
    }
    const {passwordHash, ...userData} = user._doc;
  
    return res.json(userData);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error"
    });
  }
};