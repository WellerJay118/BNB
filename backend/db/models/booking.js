'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Spot, {foreignKey: 'spotId'}),
    Booking.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Booking;
};
