const faker = require('faker');

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Moods', [{
        moodselect: faker.random.arrayElement(['happy', 'sad', 'active', 'tired', 'fine', 'anxious', 'angry']),
        moodlevel: faker.random.number({min:5, max:55}),
        moodnotes: faker.lorem.words(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Moods', null, {});
  }
};
