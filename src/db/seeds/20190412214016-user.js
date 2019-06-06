const faker = require('faker');
const bcrypt = require('bcryptjs');
const User = require('../models').User;

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Users', [{
        name: "Dev Tester",
        email: "devtester@exampletest.com",
        password: bcrypt.hashSync('plantdad', 7),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
    }], {});

    const user = await User.findOne({
      where: {
        email: 'devtester@exampletest.com'
      }
    });

    await queryInterface.bulkInsert('Moods', [{
      moodselect: faker.random.arrayElement(['happy', 'sad', 'active', 'tired', 'fine', 'anxious', 'angry']),
      moodlevel: faker.random.number({min:5, max:100}),
      moodnotes: faker.lorem.words(),
      userId: user.id,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
  }], {});

  return await queryInterface.bulkInsert('Habits', [{
    type: faker.random.arrayElement(['sleep', 'exercise', 'time outside', 'social interaction', 'time alone', 'hydration', 'leisure activities']),
    frequency: faker.random.number({min: 1, max: 99}),
    userId: user.id,
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Habits', null, {});
    await queryInterface.bulkDelete('Moods', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
