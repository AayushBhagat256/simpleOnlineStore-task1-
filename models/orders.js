const Product = require('./product')
module.exports = (sequelize, DataTypes, Model) => {
    const Order = sequelize.define(
      'Order',
      {
        // Model attributes are defined here
        Quantity: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        // Other model options go here
        tableName: 'Order',
        timestamps: false
      }
    );
   
    return Order;
  };

  


