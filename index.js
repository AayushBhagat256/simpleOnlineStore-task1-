const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')


dotenv.config()
const app = express();
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json())

require('./models/Model');
console.log("Models synchronised")

const proCtrl = require('./controllers/productCtrl');
// CRUD Operations for products
app.post('/addproduct',proCtrl.addProduct);
app.get('/getproducts',proCtrl.getProducts);
app.get('/getproduct/:id',proCtrl.getproductID);
app.patch('/updateProduct/:id',proCtrl.updateProduct);
app.delete('/deletePro/:id',proCtrl.deletePro);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listening to post ${PORT}`);
})

