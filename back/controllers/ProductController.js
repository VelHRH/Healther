import ProductModel from '../models/Product.js'
import {validationResult} from 'express-validator'

export const getAll = async (req, res) => {
  try{
    const products = await ProductModel.find();
    res.json(products);
  }
  catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to get products"
    });
  }
}

export const create = async (req, res) => {
  try{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json(errors.array());
    }
    const doc = new ProductModel({
      title: req.body.title,
      cals: req.body.cals,
      imageUrl: req.body.imageUrl,
    });
    const post = await doc.save();
    res.json(post);
  }catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to create product"
    });
  }
};