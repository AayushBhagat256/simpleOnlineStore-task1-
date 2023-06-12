const db = require('../models/Model')

const product = db.product

//Adding product to database
const addProduct = async (req, res) => {
    try {
      const padd = await product.create({ productName: req.body.productName, productDesc: req.body.productDesc,price: req.body.price });
      console.log(padd instanceof product); // true
      console.log(padd.firstName); // "padd"
  
      console.log('product was saved to the database!');
      res.status(200).json({
        message: "Data saved",
        data: padd.toJSON(),
      });
    } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({
        message: "Error saving user",
      });
    }
};

// getting all products
const getProducts = async (req, res) => {
    try {
      const products = await product.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).json({
        message: "Error retrieving products",
      });
    }
};



module.exports = {
    addProduct,
    getProducts,
}