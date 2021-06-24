const { Router } = require("express");
const router = Router();

const Movie = require("../models/movie");

router.get("/", (req, res) => {
  Movie.find({})
    .then(movies => {
      console.log("Here comes the data", movies);
      res.json({ movies }); //this is the data of all the movies for show to the user
    })
    .catch(err => {
      console.log("An error happened bringing the movies", err);
    });
});

// router.get("/", (req, res) => {
//     const movies = await Movie.find();
//     console.log(movies); only for test
//     res.json({movies}); this will be the object for all the movies
//   }); in this way we can make the code of above to bring all the movies

router.get("/:id", (req, res) => {
  Movie.find({ _id: req.params.id })
    .then(result => {
      res.json({ success: true, result });
    })
    .catch(err => {
      console.log("Error finding unique movie", err);
    });
});

router.post("/", (req, res) => {
  const { title, genre, actors, rate, country, language } = req.body;

  Movie.create({
    title,
    genre,
    actors,
    rate,
    country,
    language
  })
    .then(movie => {
      res.json({ success: true, movie }); //with this will appear the movie in the data
    })
    .catch(err => {
      console.log("An error occurred creating the movie", err);
    });
});

router.patch("/:id", (req, res) => {
  const { title, genre, actors, rate, country, language } = req.body;
  const id = { _id: req.params.id };
  const correction = {
    //data that can be change by the administrator
    title,
    genre,
    actors,
    rate,
    country,
    language
  };
  const options = { new: true };
  Movie.findByIdAndUpdate(id, correction, options) // here we update the change on the movie
    .then(movie => {
      res.json({ success: true, movie });
    })
    .catch(err => {
      console.log("The editing went wrong", err);
    });
});

router.delete("/:id", (req, res) => {
  Movie.remove({ _id: req.params.id })
    .then(result => {
      res.json({ success: true, result });
    })
    .catch(err => {
      console.log("It wasn't possible to eliminate the movie", err);
    });
});

module.exports = router;
