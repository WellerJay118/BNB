const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review, Spot, User } = require('../../db/models');

const router = express.Router();
//dont want an update, when you leave a review you can't change it.

//get /api/reviews
router.get('/', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll({include: [Spot, User]});
    return res.json(reviews)
}));
//post /api/reviews
router.post('/', asyncHandler(async(req, res) => {
    const { userId, spotId, review, rating } = req.body;
    const newReview = await Review.create({userId, spotId, review, rating});
    return res.json(newReview);
}));
//delete /api/reviews/:reviewId
// /spots/2
router.delete('/:reviewId', asyncHandler(async(req, res) => {
    // const reviewId = parseInt(req.params.reviewId);
    console.log("%%%%%%%%%", reviewId)
    const { reviewId } = req.params;
    const review = await Review.findOne({where: {id: reviewId}})
    const delReview = await review.destroy();
    if(review) {
        return res.json({"Deleted": true})
    } else {
        return res.json({ "Deleted": false })
    }
}));

module.exports = router;
