const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
const productRoute = require("./routes/productRoute")

app.use(cors());

app.use(express.json());

//create product route with path of /product
app.use("/product",productRoute)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
