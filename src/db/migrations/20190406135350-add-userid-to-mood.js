'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn("Moods", "userId", {
     type: Sequelize.INTEGER,
     references: {
       model: "Users",
       key: "id",
       as: "userId"
     }
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Moods", "userId");
  }
};
