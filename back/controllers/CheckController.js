import CheckModel from '../models/Check.js'

export const create = async (req, res) => {
  try{
    const doc = new CheckModel({
      user: req.userId,
      pulse: req.body.pulse,
      temperature: req.body.temperature,
      weight: (req.body.weight || ''),
      height: (req.body.height || ''),
    });
    const post = await doc.save();
    res.json(post);
  }catch (err){
    console.log(err);
    return res.status(500).json({
      message: "Unable to check your health"
    });
  }
};