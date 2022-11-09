import ExerciseModel from '../models/Exercise.js'

export const getAll = async (req, res) => {
  try{
    const exercises = await ExerciseModel.find();
    res.json(exercises);
  }catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to get exercises"
    });
  }
};

export const create = async (req, res) => {
  try{
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