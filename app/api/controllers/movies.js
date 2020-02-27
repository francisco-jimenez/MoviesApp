const movieModel = require('../models/movies');
module.exports = {
  getById: function (req, res, next) {
    console.log(req.body);
    movieModel.findById(req.params.movieId, function (err, movieInfo) {
      if (err) {
        next(err);
      } else {
        res.json({ status: "success", message: "Movie found!!!", data: { movies: movieInfo } });
      }
    });
  },
  getAll: function (req, res, next) {
    let moviesList = [];
    movieModel.find({}, function (err, movies) {
      if (err) {
        next(err);
      } else {
        for (let movie of movies) {
          moviesList.push({
            id: movie._id,
            name: movie.name,
            released_date: movie.released_date,
            director: movie.director,
            score: movie.score,
            plot_description: movie.plot_description,
          });
        }
        res.json({ status: "success", message: "Movies list found!!!", data: { movies: moviesList } });

      }
    });
  },
  updateById: function (req, res, next) {
    movieModel.findByIdAndUpdate(req.params.movieId, {
      name: req.body.name,
      released_date: req.body.released_date,
      director: req.body.director,
      score: req.body.score,
      plot_description: req.body.plot_description,
    }, function (err, movieInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "Movie updated successfully!!!", data: null });
      }
    });
  },
  deleteById: function (req, res, next) {
    movieModel.findByIdAndRemove(req.params.movieId, function (err, movieInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "Movie deleted successfully!!!", data: null });
      }
    });
  },
  create: function (req, res, next) {
    movieModel.create({
      name: req.body.name,
      released_date: req.body.released_date,
      director: req.body.director,
      score: req.body.score,
      plot_description: req.body.plot_description,
    }, function (err, result) {
      if (err)
        next(err);
      else
        res.json({ status: "success", message: "Movie added successfully!!!", data: null });

    });
  },
}