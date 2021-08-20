const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review, Spot, User } = require('../../db/models');

const router = express.Router();
//dont want an update, when you leave a review you can't change it.
//get
router.get('/', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll({include: [Spot, User]});
    return res.json(reviews)
}));
//post
router.post('/', asyncHandler(async(req, res) => {
    const { userId, spotId, review, rating } = req.body;
    const userRev = await Review.create({userId, spotId, review, rating});
    return res.json(userRev);
}));
//delete
router.delete('/:id', asyncHandler(async(req, res) => {
    // const reviewId = parseInt(req.params);
    const { id } = req.params;
    const review = await Review.findOne({where: {id: id}})
    await review.destroy();
    return res.json({})
}));

module.exports = router;
