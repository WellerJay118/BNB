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

router.delete('/:reviewId', asyncHandler(async(req, res) => {
    const { reviewId } = req.params;
    const review = await Review.findOne({where: {id: reviewId}})
    await review.destroy();
    // return res.json();
    const delReview = await review.destroy();
    if(review) {
        return res.json({"deleted": true})
    } else {
        return res.json({ "deleted": false })
    }
}));
//bug noted for After making a review only the first one shows up with a Delete button.

module.exports = router;
