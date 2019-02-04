const router = require('express').Router()
const fastFoodController = require('../controllers/fast-foods')

router.route('/fast-foods')
  .get(fastFoodController.index)
  .post(fastFoodController.create)



  module.exports = router
