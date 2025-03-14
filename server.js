const express = require('express');
const connectDB = require('./config/dbConnection');
const errorHandler = require("./middleware/errorHandler")
const dotenv = require('dotenv').config();
const app = express();
connectDB();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRouter"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});