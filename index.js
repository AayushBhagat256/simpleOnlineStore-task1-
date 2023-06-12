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

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listening to post ${PORT}`);
})
