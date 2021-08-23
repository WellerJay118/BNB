'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {	userId:	1, guestCap:	6, address:	"1301 24th St W", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	"Geraldine", description:	"Basement apartment recently renovated (2020). Pet friendly. Non-smoking", price:	79, lat:	48.166261, lng:	-103.642285, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	2, guestCap:	4, address:	"1007 24th St W Suite 104", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	"Buntrock", description:	"Just a cot and restroom", price:	69, lat:	48.166301, lng:	-103.638522, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	3, guestCap:	2, address:	"1703 2nd Ave E", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	139, lat:	48.160843, lng:	-103.620618, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	4, guestCap:	2, address:	"2009 Timbers St W", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	149, lat:	48.166771, lng:	-103.654522, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	5, guestCap:	4, address:	"3307 Wheat Ridge St", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	67, lat:	48.173667, lng:	-103.671094, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	6, guestCap:	3, address:	"1706 6th St W", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	49, lat:	48.148802, lng:	-103.647209, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	7, guestCap:	18, address:	"812 14th Ave W", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	88, lat:	48.151807, lng:	-103.64382, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	8, guestCap:	3, address:	"916 5th Ave W", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	77, lat:	48.153011, lng:	-103.630017, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	8, guestCap:	7, address:	"503 10th St W", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	66, lat:	48.153107, lng:	-103.63063, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	7, guestCap:	4, address:	"1219 4th Ave E", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	55, lat:	48.156225, lng:	-103.617801, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	6, guestCap:	8, address:	"1310 4th Ave E", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	99, lat:	48.157368, lng:	-103.617332, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	5, guestCap:	4, address:	"1311 University Ave", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	99, lat:	48.157641, lng:	-103.615361, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	4, guestCap:	3, address:	"1404 E Hillcourt", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	111, lat:	48.158408, lng:	-103.616042, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	3, guestCap:	2, address:	"1407 University Ave", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	122, lat:	48.158682, lng:	-103.615273, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	2, guestCap:	1, address:	"901 20th St E", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	57, lat:	48.163113, lng:	-103.609752, createdAt:	new Date(), updatedAt:	new Date()	},
      {	userId:	1, guestCap:	1, address:	"416 22nd St E", city:	"Williston", state:	"North Dakota", zip: 58801, spotName:	faker.name.firstName(), description:	faker.lorem.paragraph(), price:	100, lat:	48.164921, lng:	-103.61611, createdAt:	new Date(), updatedAt:	new Date()	},

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
