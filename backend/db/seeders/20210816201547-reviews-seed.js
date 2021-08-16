'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {	userId:	1, spotId:	1, review:	faker.lorem.sentence(), rating:	3, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	2, spotId:	2, review:	faker.lorem.sentence(), rating:	2, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	3, spotId:	3, review:	faker.lorem.sentence(), rating:	4, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	4, spotId:	4, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	5, spotId:	5, review:	faker.lorem.sentence(), rating:	1, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	6, spotId:	6, review:	faker.lorem.sentence(), rating:	2, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	7, spotId:	7, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	8, spotId:	8, review:	faker.lorem.sentence(), rating:	1, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	8, spotId:	9, review:	faker.lorem.sentence(), rating:	4, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	7, spotId:	10, review:	faker.lorem.sentence(), rating:	2, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	6, spotId:	11, review:	faker.lorem.sentence(), rating:	1, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	5, spotId:	12, review:	faker.lorem.sentence(), rating:	2, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	4, spotId:	13, review:	faker.lorem.sentence(), rating:	3, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	3, spotId:	15, review:	faker.lorem.sentence(), rating:	4, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	2, spotId:	14, review:	faker.lorem.sentence(), rating:	3, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	1, spotId:	13, review:	faker.lorem.sentence(), rating:	2, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	1, spotId:	3, review:	faker.lorem.sentence(), rating:	1, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	2, spotId:	1, review:	faker.lorem.sentence(), rating:	4, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	3, spotId:	2, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	4, spotId:	4, review:	faker.lorem.sentence(), rating:	1, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	5, spotId:	3, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	6, spotId:	6, review:	faker.lorem.sentence(), rating:	4, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	7, spotId:	7, review:	faker.lorem.sentence(), rating:	1, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	8, spotId:	3, review:	faker.lorem.sentence(), rating:	2, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	7, spotId:	2, review:	faker.lorem.sentence(), rating:	4, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	5, spotId:	8, review:	faker.lorem.sentence(), rating:	3, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	2, spotId:	9, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	4, spotId:	10, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	3, spotId:	1, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	5, spotId:	2, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	6, spotId:	3, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	6, spotId:	4, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	1, spotId:	5, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},
      {	userId:	3, spotId:	6, review:	faker.lorem.sentence(), rating:	5, createdAt:	new Date(), updatedAt:	new Date()},

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
