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

//get products by ID
const getproductID = async (req,res) => {
    try{
        const proID = req.params.id;
        const products = await product.findByPk(proID);
        res.status(200).json(products);
    }catch (error) {
        console.error('Error retrieving Products:', error);
        res.status(500).json({
          message: "Error retrieving Products",
        });
    }
}

//updating with ID
const updateProduct = async (req, res) => {
    try {
      const proId = req.params.id;
      const updatedFields = req.body;
  
      const Product = await product.findByPk(proId);
  
      if (!Product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      await Product.update(updatedFields);
  
      res.status(200).json({
        message: 'Product updated successfully',
        data: Product,
      });
    } catch (error) {
      console.error('Error updating Product:', error);
      res.status(500).json({
        message: 'Error updating Product',
      });
    }
};



module.exports = {
    addProduct,
    getProducts,
    getproductID,
    updateProduct,
}