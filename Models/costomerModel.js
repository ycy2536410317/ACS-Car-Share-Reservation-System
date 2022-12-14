module.exports = (sequelize,DataTypes) => {
    sequelize.define("customer", {
        uid: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creditcard: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isStudent: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        licence: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tickets: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stateissue: {
            type: DataTypes.ENUM,
            values: ["NY","GA","PA"],
             allowNull: false
        },
        expiration: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
};
