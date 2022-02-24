const e = require('express');
const models =require('../models/index');

//list
exports.index = async (req , res) =>{
  const products =  await models.products.findAll();
   res.status(200).json({
     kuy:products,
   })
 }