import Movie from "../model/movieModel.js";

const createMovie = (req, res, next) => {
    const movieData = req.body;
    const newMovie = new Movie(movieData);

    newMovie.save()
        .then((result) => {
            res.json(201).json({
                message: "Movie created successfully",
                data: result
            });
        })
        .catch((err) => {
            err.message = "Problem while creating movie " + err.message;
            next(err);
        });
};

const readMovies = (req, res, next) => {
    const { category } = req.query;
    const filter = category ? { category } : {};

    Movie.find(filter)
        .then((result) => {
            res.status(200).json({
                message: "Movies retrieved successfully",
                data: result
            });
        })
        .catch((err) => {
            err.message = "Problem while retrieving movies " + err.message;
            next(err);
        });
};

const readMovieById = (req, res, next) => {
    const { id } = req.params;

    Movie.findById(id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: "Movie not found"
                });
            }

            res.status(200).json({
                message: "Movie retrieved successfully",
                data: result
            });
        })
        .catch((err) => {
            err.message = "Problem while retrieving movie " + err.message;
            next(err);
        });
};

const updateMovieById = (req, res, next) => {
    const { id } = req.params;
    const updateData = req.body;

    Movie.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    })
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: "Movie not found"
                });
            }

            res.status(200).json({
                message: "Movie updated successfully",
                data: result
            });
        })
        .catch((err) => {
            err.message = "Problem while updating movie " + err.message;
            next(err);
        });
};

const deleteMovieById = (req, res, next) => {
    const { id } = req.params;

    Movie.findByIdAndDelete(id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: "Movie not found"
                });
            }

            res.status(200).json({
                message: "Movie deleted successfully",
                data: result
            });
        })
        .catch((err) => {
            err.message = "Problem while deleting movie " + err.message;
            next(err);
        });
};

export {
    createMovie,
    readMovies,
    readMovieById,
    updateMovieById,
    deleteMovieById
};