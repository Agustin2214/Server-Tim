const { Sequelize,DataTypes } = require('sequelize');

const db = require("../db/connection")

const numero = db.define('numero',{
    uid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
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
    value5:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value6:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value7:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value8:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value9:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value10:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value11:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value12:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value13:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value14:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value15:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value16:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value17:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value18:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value19:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    value20:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}
)


module.exports = numero;