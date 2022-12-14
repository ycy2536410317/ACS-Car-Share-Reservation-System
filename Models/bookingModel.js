const { type } = require("os");

module.exports = (sequelize,DataTypes)=>{
    const booking =  sequelize.define("bookRecord", {
        reservationNumber: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        pricePerHour: {
            type: DataTypes.REAL,
            allowNull: false
        },
        pricePerDay: {
            type: DataTypes.REAL,
            allowNull: false
        },
        reservedDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        pickUpTime: {
            type: DataTypes.DATE
        },
        dropOfTime: {
            type: DataTypes.DATE
        }
    });   
    booking.belongsTo(sequelize.models.car); 
    booking.belongsTo(sequelize.models.customer); 
    booking.belongsTo(sequelize.models.location); 
    booking.sync({alter: true})
}