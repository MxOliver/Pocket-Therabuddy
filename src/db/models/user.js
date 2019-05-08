'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING
    },
  }, {});
  User.associate = function(models) {
   User.hasMany(models.Mood, {
     foreignKey: "userId"
   });
   User.hasMany(models.Habit, {
     foreignKey: "userId"
   })
  };
  return User;
};