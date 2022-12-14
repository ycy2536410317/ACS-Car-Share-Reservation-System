const { Sequelize,DataTypes } = require("sequelize");
const config = require("../configs/config");
const costomerBuild = require("./costomerModel");
const carBuild = require("./carModel");
const locationBuild = require("./locationModel");
const bookingBuild = require("./bookingModel");
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
testConnection();
costomerBuild(sequelize,DataTypes);
carBuild(sequelize,DataTypes);
locationBuild(sequelize,DataTypes);
bookingBuild(sequelize,DataTypes);
sequelize.sync();
module.exports = sequelize.models;