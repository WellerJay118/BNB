'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {	spotId:	1, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/1400942739848.jpeg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	2, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/26e2223a747bfaac9bf4c469d47d1817.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	3, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/Basement-Apartment-1.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	4, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/Basement-Apartment-Decorating-23.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	5, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/Kitchen+Basement+Apartment+Ideas+-deliadurber.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	6, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/SM_Gallery_IdealBasement_Photo10.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	7, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/Sleek-kitchen-in-a-basement-apartment.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	8, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/Suite+Basement+Apartment+Ideas+-whitebrassandmarble.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	9, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/WH-Finished-Basement-14.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	10, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/basement-apartment-kitchen.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	11, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/basementapartment_shutterstock_1398747974.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	12, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/d1004d4982233908f81a99fe818439f2.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	13, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/download.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	14, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/f76be7793435ea2bb171373665014342.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	15, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/spacious-open-basement-apartment-bluffdale-ut-primary-photo.jpg", createdAt:	new Date(), updatedAt:	new Date()	},
{	spotId:	16, url:	"https://aajw-bnb-clone.s3.us-east-2.amazonaws.com/at_house+tours_2020-03_House+calls_basement_5.jpg", createdAt:	new Date(), updatedAt:	new Date()	},

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
