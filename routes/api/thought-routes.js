const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// Set up GET all at api/thoughts
router
    .route('/')
    .get(getThoughts)
    .post(createThought)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

module.exports = router