const express = require('express');
const router = express.Router();
const movieController = require('../app/api/controllers/movies');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
router.get('/', movieController.getAll);
router.post('/', movieController.create);
router.get('/:movieId', movieController.getById);
router.put('/:movieId', movieController.updateById);
router.delete('/:movieId', movieController.deleteById);
module.exports = router;