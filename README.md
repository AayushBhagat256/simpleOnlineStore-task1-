# Simple Online Store
# API Documentation

This API allows users to perform basic CRUD operations on products and orders. It is built using MySQL as the database, Sequelize as the ORM (Object-Relational Mapping) library, and XAMPP as the server environment.

## Base URL

The base URL for the API endpoints is: `http://localhost:5000`

## Product Endpoints

- Create a new product:
  - URL: `http://localhost:5000/addproduct/`
  - Method: `POST`
  - Description: Create a new product.

- Retrieve a list of all products:
  - URL: `http://localhost:5000/getproducts/`
  - Method: `GET`
  - Description: Retrieve a list of all products.

- Retrieve a single product by ID:
  - URL: `http://localhost:5000/getproduct/:id`
  - Method: `GET`
  - Description: Retrieve a single product by its ID.

- Update a product by ID:
  - URL: `http://localhost:5000/updateProduct/:id`
  - Method: `PATCH`
  - Description: Update a product by its ID.

- Delete a product by ID:
  - URL: `http://localhost:5000/deletePro/:id`
  - Method: `DELETE`
  - Description: Delete a product by its ID.

## Order Endpoints

- Create a new order:
  - URL: `http://localhost:5000/addorder/`
  - Method: `POST`
  - Description: Create a new order.

- Retrieve a list of all orders:
  - URL: `http://localhost:5000/getorders/`
  - Method: `GET`
  - Description: Retrieve a list of all orders.

- Retrieve a single order by ID:
  - URL: `http://localhost:5000/getordid/:id`
  - Method: `GET`
  - Description: Retrieve a single order by its ID.

## Installation

1. Install XAMPP and start the Apache and MySQL services.
2. Create a new MySQL database for the project.
3. Clone the project repository.
4. Install the dependencies by running `npm install` in the project root directory.
5. Configure the database connection by updating the `config/config.json` file with your MySQL database credentials.
6. Run the database migrations to create the necessary tables by executing `npx sequelize-cli db:migrate`.
7. Start the API server by running `npm start`.

## Conclusion

This API provides the functionality to perform basic CRUD operations on products and orders. Feel free to explore and integrate it into your applications!

