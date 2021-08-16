'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    guestCap: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    spotName: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL
  }, {});
  Spot.associate = function(models) {
    Spot.hasMany(models.Booking, {foreignKey: 'spotId'}),
    Spot.hasMany(models.Image, {foreignKey: 'spotId'}),
    Spot.belongsTo(models.User, {foreignKey: 'userId'}),
    Spot.hasMany(models.Review, {foreignKey: 'spotId'})
  };
  return Spot;
};
