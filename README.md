# Blogs API

## •Description
An API and a database for producing content for a Blog using Node.js and the Sequelize package to make a CRUD of posts. 

## •Technologies and Libraries
- Javascript
- Node.js
- Express

## •How to run the application
- Clone the repository on your machine
- In the terminal, install the application's dependencies: `npm install`
- Run the app: `npm start`
- Create an .env file in the root of the project with the environment variables:
```#### SERVER VARS
NODE_ENV=development
API_PORT=3000

#### DATABASE VARS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=password

#### SECRECT VARS
JWT_SECRET=secretJWT```
