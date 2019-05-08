'use strict';

module.exports = (sequelize, DataTypes) => {
  
  var Mood = sequelize.define('Mood', {
    moodlevel: {
      type: DataTypes.INTEGER,
    },
    moodselect: {
      type: DataTypes.STRING,
      allowNull: false
    },
    moodnotes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
        as: "userId"
      }
    }
  }, {});
  Mood.associate = function(models) {

    Mood.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });

  };
  return Mood;
};