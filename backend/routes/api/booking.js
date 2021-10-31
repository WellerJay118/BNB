const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Booking } = require("../../db/models");

const router = express.Router();

router.get('/', asyncHandler(async(req,res) => {
    const { id } = req.user
    const bookings = await Booking.findAll({where: {userId:id}, include: Spot})
    return res.json(bookings);
}))


router.post('/', asyncHandler(async(req,res) => {
    const { spotId, userId, startDate, endDate } = req.body;
    const newBooking = await Booking.create({spotId, userId, startDate, endDate})
    return res.json(newBooking)
}))

router.put('/:bookingId', asyncHandler(async(req,res) => {
    const bookingId = parseInt(req.params.bookingId)
    const booking = await Booking.findOne({where: {id: bookingId}})
    await booking.update({spotId, userId, startDate, endDate})
    return res.json(booking)
}))

router.delete('/:bookingId', asyncHandler(async(req,res) => {
    const bookingId = parseInt(req.params.bookingId)
    const booking = await Booking.findOne({where: {id: bookingId}})
    await booking.destroy();
    return res.json({booking})
}))

module.exports = router;
