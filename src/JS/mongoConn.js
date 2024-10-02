const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/mydatabase"; // Connection URI
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("mydatabase");
    const collection = db.collection("users");
    // Perform operations here
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close(); // Close the connection
  }
}

connectToDatabase();
