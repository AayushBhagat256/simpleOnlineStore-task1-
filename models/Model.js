//connecting to database

const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PWD, {
    host: process.env.HOST,
    dialect: process.env.DIA,
    port:process.env.PORTT,
    logging: false , //this will remove the console printing part
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;




db.product  = require('./product')(sequelize,DataTypes,Model)
db.order = require('./orders')(sequelize,DataTypes,Model)

db.order.belongsTo(db.product);
db.product.hasMany(db.order)
db.sequelize.sync();



module.exports = db