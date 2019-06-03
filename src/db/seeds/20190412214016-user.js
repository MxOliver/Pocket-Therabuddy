const faker = require('faker');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync();

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        name: "Tester",
        email: "testing@tester.com",
        password: bcrypt.hashSync("testerpassword", salt),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        id: faker.random.number({min: 6, max: 25})
    }], {});

    const TestUser = User.findOne({where: {email: "testing@tester.com"}});

    await queryInterface.bulkInsert('Moods', [{
      moodselect: faker.random.arrayElement(['happy', 'sad', 'active', 'tired', 'fine', 'anxious', 'angry']),
      moodlevel: faker.random.number({min:5, max:100}),
      moodnotes: faker.lorem.words(),
      userId: TestUser.id,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
  }], {});

    return await queryInterface.bulkInsert('Habits', [{
      type: faker.random.arrayElement(['sleep', 'exercise', 'time outside', 'social interaction', 'time alone', 'hydration', 'leisure activities']),
      frequency: faker.random.number({min: 1, max: 99}),
      userId: TestUser.id,
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
