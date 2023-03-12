const { Sequelize,DataTypes } = require('sequelize');

const db = require("../db/connection")



const apuesta = db.define('apuesta',{
    uid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    value1:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value2:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value3:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value4:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}
)


module.exports = apuesta;