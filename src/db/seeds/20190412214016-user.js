const faker = require('faker');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        id: faker.random.number({min: 6, max: 7})
    }], {});

    await queryInterface.bulkInsert('Moods', [{
      moodselect: faker.random.arrayElement(['happy', 'sad', 'active', 'tired', 'fine', 'anxious', 'angry']),
      moodlevel: faker.random.number({min:5, max:100}),
      moodnotes: faker.lorem.words(),
      userId: faker.random.number({min: 6, max: 7}),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
  }], {});

    return await queryInterface.bulkInsert('Habits', [{
      type: faker.random.arrayElement(['sleep', 'exercise', 'time outside', 'social interaction', 'time alone', 'hydration', 'leisure activities']),
      frequency: faker.random.number({min: 1, max: 99}),
      userId: faker.random.number({min: 6, max: 7}),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Moods', null, {});
    await queryInterface.bulkDelete('Habits', null, {});
  }
};
