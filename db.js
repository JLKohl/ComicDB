//this is pulling in the mysq12 library so that we can use 
//async and await when we pull our data
const mysql = require(`mysql2/promise`);

//Loading the .env into process.env
// has to run before const pool so that everything will
//load into that const.
require('dotenv').config();


//creating a connection "pool". Pools manage multiple connections 
// and hand htme out as needed it is better then opening and closing
// new connections every time a query is run
const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


//exproting the pool, so we can use it :) 
module.exports = pool;