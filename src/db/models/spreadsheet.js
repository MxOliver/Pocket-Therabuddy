'use strict';
module.exports = (sequelize, DataTypes) => {
  var Spreadsheet = sequelize.define('Spreadsheet', {
    id: {
      type: DataTypes.INTEGER,
    },
    sheetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Spreadsheet.associate = function(models) {
    // associations can be defined here
  };
  return Spreadsheet;
};