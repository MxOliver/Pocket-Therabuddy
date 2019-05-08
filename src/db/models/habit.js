'use strict';
module.exports = (sequelize, DataTypes) => {
  var Habit = sequelize.define('Habit', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
        as: "userId"
      }
    },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {});
  Habit.associate = function(models) {
    Habit.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    })
  };
  return Habit;
};