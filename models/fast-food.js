const mongoose = require('mongoose')

const fastFoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  yearEstablished: { type: Number, required: true },
  image: { type: String }
})



module.exports = mongoose.model('FastFood', fastFoodSchema)
