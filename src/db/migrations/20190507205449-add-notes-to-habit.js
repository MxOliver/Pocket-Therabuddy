'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Habits', 'notes', {
    type: Sequelize.TEXT,
    allowNull: true
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Habits', 'notes');
  }
};
