const FastFood = require('../models/fast-food')

function indexRoute(req, res, next){
  FastFood
    .find(req.query)
    .then(cars => res.status(200).json(cars))
}

function createRoute(req, res, next){
  FastFood
    .create(req.body)
    .then(fastFood => res.status(201).json(fastFood))
}


module.exports = {
  index: indexRoute,
  create: createRoute
}
