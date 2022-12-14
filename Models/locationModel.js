module.exports = (sequelize, DataTypes) => {
    sequelize.define("location",{
        locationID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        streetAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
};