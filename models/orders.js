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
  
//     Order.associate = (models) => {
//       Order.belongsTo(models.Product, {
//         foreignKey: 'ProductId',
//         as: 'product'
//       });
//     };
      
  
    return Order;
  };

  


// const Product = require('./product');

// module.exports = (sequelize, DataTypes, Model) => {
//   const Order = sequelize.define(
//     'Order',
//     {
//       // Model attributes are defined here
//       Quantity: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       ProductId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: Product,
//           key: 'ProductId'
//         }
//       }
//     },
//     {
//       // Other model options go here
//       tableName: 'Order',
//       timestamps: false
//     }
//   );

//   Order.associate = (models) => {
//     Order.belongsTo(models.Product, {
//       foreignKey: 'ProductId',
//       as: 'product'
//     });
//   };

//   Order.prototype.toJSON = function () {
//     const order = { ...this.get() };
//     if (order.product) {
//       order.product = order.product.toJSON();
//     }
//     return order;
//   };

//   return Order;
// };


  