//importing db.js file with the constant pool so we can use it
const pool = require('./db.js')

async function testConnection() {
    
    //Using a try catch block so that we can catch any errors at run time.
    //Await pauses on pool.query because it is going through 
    // the database pool from 'db.js' to find all of the 
    //comics. Catch is to grab any errors and print them to the console so we can 
    //troubleshoot.
    try {
        const [comics]= await pool.query('SELECT * FROM comics');
        console.log(comics)

    } catch (error) {

        console.log(error)
    }
}

//calling the function so that it will actually do something
testConnection();

