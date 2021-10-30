const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Booking } = require("../../db/models");

const router = express.Router();

