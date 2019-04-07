'use strict';

module.exports = (sequelize, DataTypes) => {
  const Op = require('sequelize').Op;
  
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
   
    Mood.addScope("lastWeek", () => {
      let today = new Date();
      return {
        where: { createdAt: { [Op.between]: [today, new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)] } },
        order: [["createdAt", "DESC"]]
        }
    });
  };
  return Mood;
};