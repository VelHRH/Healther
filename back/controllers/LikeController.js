import MealModel from '../models/Meal.js'

export const like = async (req, res) => {
  try{
    const meal = await MealModel.findById(req.params.id);
    if (meal.likes.filter(like => like.toString() === req.userId).length==0){
      if (meal.dislikes.filter(like => like.toString() === req.userId).length==0){
        meal.likes.unshift(req.userId);
      }
    }
    else if (meal.likes.filter(like => like.toString() === req.userId).length==1){
      meal.likes.splice(meal.likes.indexOf(req.userId), 1);
    }
    await meal.save();
    res.json(meal.likes.length);
  }
  catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to like"
    });
  }
};

export const dislike = async (req, res) => {
  try{
    const meal = await MealModel.findById(req.params.id);
    if (meal.dislikes.filter(like => like.toString() === req.userId).length==0){
      if (meal.likes.filter(like => like.toString() === req.userId).length==0){
        meal.dislikes.unshift(req.userId);
      }
    }
    else if (meal.dislikes.filter(like => like.toString() === req.userId).length==1){
      meal.dislikes.splice(meal.dislikes.indexOf(req.userId), 1);
    }
    await meal.save();
    res.json(meal.dislikes.length);
  }
  catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to dislike"
    });
  }
};