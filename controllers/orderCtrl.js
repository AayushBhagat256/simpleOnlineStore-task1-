const db = require('../models/Model')

const Order = db.order;
const Product = db.product;

const createOrder = ( async (req, res) => {
    try {
      const { quantity, productId } = req.body;
  
      // Create a new order using the Order model
      const order = await Order.create({
        Quantity: quantity,
        ProductId: productId
      });
  
      // Order successfully created
      console.log('New order created:', order.toJSON());
  
      res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
      // Error occurred while creating the order
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    }
});




//displaying orders
const getOrder = async (req, res) => {
    try {
      const order = await Order.findAll();
      res.status(200).json(order);
    } catch (error) {
      console.error('Error retrieving orders:', error);
      res.status(500).json({
        message: "Error retrieving orders",
      });
    }
}

//displaying orders by ID
const getOrderById = async (req, res) => {
    const orderId = req.params.id; // Assuming the ID parameter is passed as 'id' in the request URL
  
    try {
      const order = await Order.findByPk(orderId);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({
          message: "Order not found",
        });
      }
    } catch (error) {
      console.error('Error retrieving order:', error);
      res.status(500).json({
        message: "Error retrieving order",
      });
    }
  };
  

module.exports = {
    createOrder,
    getOrder,
    getOrderById
}