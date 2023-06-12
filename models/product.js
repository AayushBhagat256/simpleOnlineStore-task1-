
module.exports = (sequelize,DataTypes, Model) =>{
    const Product = sequelize.define('Product', {
      // Model attributes are defined here
      productName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      productDesc: {
        type: DataTypes.STRING,
        allowNull : false
        // allowNull defaults to true
      },
      price : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
    }, {
      // Other model options go here
      tableName:'Product',
      timestamps:false,
    });
    
    // `sequelize.define` also returns the model
    console.log(Product === sequelize.models.Product); // true
  
    return Product
    
  }
  
  
  