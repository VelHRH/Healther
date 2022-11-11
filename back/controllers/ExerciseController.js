import ExerciseModel from '../models/Exercise.js'
import UserModel from '../models/User.js'
import {validationResult} from 'express-validator'

export const getAll = async (req, res) => {
  try{
    const exercises = await ExerciseModel.find().populate('user').exec();
    res.json(exercises);
  }
  catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to get exercises"
    });
  }
};

export const getOne = async (req, res) => {
  try{
    const exerciseId = req.params.id;
    const user = await UserModel.findById(req.userId);
    let newStreak = user._doc.streak;
    ExerciseModel.findOneAndUpdate(
      {
        _id: exerciseId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: 'after',
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Unable to do the exercise"
          });
        }
        if (!doc){
          return res.status(404).json({
            message: "Exercise not found"
          });
        }
    
        res.json(doc);
      }
    );
    const isYesterday = (date) => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (yesterday.toDateString() === date.toDateString()) {
        return true;
      }
      return false;
    }
    isYesterday(user.lastStreakUpdateDate) ? newStreak++ : newStreak = 0;
    await UserModel.updateOne(
        {
          _id: user._doc._id,
        },
        { 
          email: user._doc.email,
          fullName: user._doc.fullName,
          passwordHash: user._doc.passwordHash,
          avatarUrl: user._doc.atarUrl,
          userPrime: user._doc.userPrime,
          streak: newStreak,
          lastStreakUpdateDate: new Date(),
        },
        (err) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "Streak was not updated"
            });
          }
        }
      );
  }
  catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to do the exercise"
    });
  }
};

export const deleteEx = async (req, res) => {
  try{
    const exerciseId = req.params.id;

    ExerciseModel.findOneAndDelete(
      {
        _id: exerciseId,
        user: req.userId
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Unable to delete the exercise"
          });
        }
        if (!doc){
          return res.status(404).json({
            message: "Exercise not found"
          });
        }
        res.json({
          success: true
        });
      }
    )
  }
  catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to do the exercise"
    });
  }
};

export const create = async (req, res) => {
  try{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json(errors.array());
    }

    const doc = new ExerciseModel({
      title: req.body.title,
      text: req.body.text,
      repetitions: req.body.repetitions,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });
    const post = await doc.save();
    res.json(post);
  }catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to create exercise"
    });
  }
};