const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");


app.use(cors());

app.use(express.json());

//create product route with path of "/product"

app.use("/product", productRouter);

//create user route with path of "/user"
app.use("/user", userRouter);

//create comment route with path of "/comment"
app.use("/comment", commentRouter);


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
