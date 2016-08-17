module.exports = function(sequelize, DataTypes) {
  var TheDate = sequelize.define("TheDate", {
    dayOutOfTheWeek : {
      type: DataTypes.STRING( 255 ),
      allowNull: false
    },
    dayOutOfTheMonth : {
      type: DataTypes.STRING( 255 ),
      allowNull: false
    },
  });

  return TheDate;
};