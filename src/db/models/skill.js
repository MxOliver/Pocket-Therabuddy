'use strict';
module.exports = (sequelize, DataTypes) => {
  var skill = sequelize.define('skill', {
    type: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.TEXT
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
  skill.associate = function(models) {
    Skill.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    })
  };
  return skill;
};