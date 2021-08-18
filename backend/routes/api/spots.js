const express = require("express");
const asyncHandler = require('express-async-handler');

// const { restoreUser } = require("../../utils/auth"); //will need to verify user
// const { handleValidationErrors } = require("../../utils/validation");
// const { check } = require('express-validator');

const { Spot, Image, User, Review, Booking } = require("../../db/models"); //if used later can access the tables themselves.

const router = express.Router();
//will have validation checks here later.
//will have a get route for all spots, single spot, POST for singleSpot, Patch for single spot, delete for singlespot

//get all spots
router.get('/', asyncHandler(async(req, res) => {
    const spots = await Spot.findAll({include: [Image, User, Review]});
    return res.json(spots);
}));

//get a single spot based on id
router.get('/:id', asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id);
    const spot = await Spot.findByPk(id, {include: [Image, User, Review, Booking]}); //verify this gives all that I want to have access to. REVIEW? where: {} and nested objects here.
    // const spot = await Spot.findOne({
    //     where: spotId
    // })
    return res.json(spot);
}));

//create a spot
router.post('/', asyncHandler(async(req, res) => {
    let { userId, guestCap, address, city, state, spotName, description, price, url: url } = req.body;
    const addSpot = await Spot.create({ userId, guestCap, address, city, state, spotName, description, price });

    const { id: spotId } = addSpot;
    await Image.create({spotId, url})
    return res.json(addSpot);
}))

//edit spot
router.patch('/:id', asyncHandler(async(req, res) => {
    const { guestCap, address, city, state, spotName, description, price, url: url } = req.body;
    const { id } = req.params;
    const spot = await Spot.findByPk(id); //do i include Review and Booking here? Or would that go into its own booking or review edit?
    await spot.update({guestCap, address, city, state, spotName, description, price})
    const image = await Image.findOne({ where: {spotId: id}})
    await image.update({id, url})

    const updated = await Spot.findOne({where: {id: id}, include: Image})
    return res.json(updated);
}) );

//delete spot
router.delete('/:id', asyncHandler(async(req, res) => {
    const {id} = req.params;
    const spot = await Spot.findByPk(id);
    const image = await Image.findOne({where: {id:id}});
    await image.destroy()
    await spot.destroy();

    return res.json({})
}))
module.exports = router;
