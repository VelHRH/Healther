import MealModel from '../models/Meal.js'
import {validationResult} from 'express-validator'
import mongoose from 'mongoose'

export const getAll = async (req, res) => {
  try{
    const meals = await MealModel.find().sort({ likes: -1 });
    res.json(meals);
  }
  catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to get recipes"
    });
  }
};

export const getOne = async (req, res) => {
  try{
    const mealId = req.params.id;
    MealModel.findOne(
      {
        _id: mealId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Unable to get the recipe"
          });
        }
        if (!doc){
          return res.status(404).json({
            message: "Recipe not found"
          });
        }
        res.json(doc);
      }
    );
  }
  catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to get the recipe"
    });
  }
}

export const create = async (req, res) => {
  try{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json(errors.array());
    }
    const db = mongoose.connection;
    let calAvg = 0;
    for (let i = 0; i<req.body.products.length; i++) {
      const prod = await db.collection("products").find({title: req.body.products[i]}).toArray();
      calAvg+= prod[0].cals
    }
    calAvg = Math.ceil(calAvg/req.body.products.length);
    const doc = await new MealModel({
      title: req.body.title,
      recipe: req.body.recipe,
      type: req.body.type,
      products: req.body.products,
      imageUrl: req.body.imageUrl,
      cals: calAvg,
      user: req.userId,
    });
    const post = await doc.save();
    res.json(post);
  }
  catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to create recipes"
    });
  }
};

export const deleteM = async (req, res) => {
  try{
    const mealId = req.params.id;
    MealModel.findOneAndDelete(
      {
        _id: mealId,
        user: req.userId
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Unable to delete the recipe"
          });
        }
        if (!doc){
          return res.status(404).json({
            message: "Meal not found"
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
      message: "Unable to delete the recipe"
    });
  }
};