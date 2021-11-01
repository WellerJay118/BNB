'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      // {	userId:	2, spotId:	1, startDate:	"2021-07-27", endDate:	"2021-07-28", checkIn: "14:00", checkOut: "11:00", createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	3, spotId:	2, startDate:	"2021-07-26", endDate:	"2021-07-28", createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	4, spotId:	3, startDate:	"2021-07-26", endDate:	"2021-07-30", createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	5, spotId:	4, startDate:	"2021-07-26", endDate:	"2021-07-30", createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	6, spotId:	5, startDate:	"2021-07-26", endDate:	"2021-07-30", createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	7, spotId:	6, startDate:	"2021-07-24", endDate:	"2021-07-30", createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	8, spotId:	7, startDate:	"2021-07-23", endDate:	"2021-07-25", createdAt:	new Date(), updatedAt:	new Date()	},

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
