const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database Connected:", connect.connection.host, connect.connection.name);
  } catch (err) {
    console.error("Database Connection Failed");
    console.error("Error Message:", err.message);
    console.error("Full Error:", err);
    process.exit(1);
  }
};

module.exports = connectDb;
 