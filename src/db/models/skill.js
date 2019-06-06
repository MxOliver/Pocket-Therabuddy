'use strict';
module.exports = (sequelize, DataTypes) => {
  var Skill = sequelize.define('Skill', {
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
  Skill.associate = function(models) {
    Skill.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    })
  };
  return Skill;
};