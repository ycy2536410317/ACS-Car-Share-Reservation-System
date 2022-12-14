module.exports = (sequelize, Datatypes) => {
    sequelize.define("car", {
        carID: {
            type: Datatypes.STRING,
            primaryKey: true
        },
        make: {
            type: Datatypes.STRING,
            allowNull: false
        },
        model: {
            type: Datatypes.STRING,
            allowNull: false
        },
        pricePerHour: {
            type: Datatypes.REAL,
            allowNull: false
        },
        pricePerDay: {
            type: Datatypes.REAL,
            allowNull: false
        },
        numberOfPassenger: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });
};
