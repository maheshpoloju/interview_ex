// 1. Import the mysql2 package
const mysql = require("mysql2");

// 2. Create a connection object
const connection = mysql.createConnection({
  host: "localhost", // Your database host (e.g., 'localhost' for local DB)
  user: "root", // Your MySQL username
  password: "password", // Your MySQL password
  database: "testdb", // The name of the database you want to connect to
});

// 3. Establish the connection
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as ID " + connection.threadId);
});

// 4. Example query to retrieve data
connection.query("SELECT * FROM users", (err, results, fields) => {
  if (err) {
    console.error("Error executing query: " + err.stack);
    return;
  }
  console.log("Query results: ", results);
});

// 5. Close the connection
connection.end();
