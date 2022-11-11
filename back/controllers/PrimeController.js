import PrimeModel from '../models/Prime.js'
import UserModel from '../models/User.js'
import {validationResult} from 'express-validator'
import mongoose from 'mongoose'

export const create = async (req, res) => {
  try{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json(errors.array());
    }
    const user = await UserModel.findById(req.userId);
    if (!user._doc.userPrime){
      return res.status(404).json({
        message: "You are not prime user yet"
      });
    }
    const db = mongoose.connection;
    const primePlans = await db.collection("primePlans").find({type: req.body.type}).toArray();
    let plan = {};
    for (let i = 0; i<primePlans.length; i++){
      if (req.body.weight >= primePlans[i].minWeight && req.body.weight <= primePlans[i].maxWeight){
        plan = primePlans[i];
        break;
      }
    }
    const doc = new PrimeModel({
      type: req.body.type,
      user: req.userId,
      weight: req.body.weight,
      height: req.body.height,
      activities: plan.activities,
      breakfast: plan.breakfast,
      lunch: plan.lunch,
      dinner: plan.dinner
    });
    const post = await doc.save();
    res.json(post);
  }catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to enter prime"
    });
  }
};