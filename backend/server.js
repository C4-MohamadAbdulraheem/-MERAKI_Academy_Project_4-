const express = require("express");

const cors = require("cors");

require("./database/db");

require("dotenv").config();

const app = express();

const productRouter = require("./routes/productRouter");

const userRouter = require("./routes/userRouter");

const commentRouter = require("./routes/commentRouter");

const roleRouter = require("./routes/roleRouter");

const registerRouter = require("./routes/registerRouter");

const loginRouter = require("./routes/loginRouter");

const categoryRouter = require("./routes/categoryRouter");

app.use(cors());

app.use(express.json());

//create product route with path of "/product"

app.use("/product", productRouter);

//create user route with path of "/user"
app.use("/user", userRouter);

//create comment route with path of "/comment"
app.use("/comment", commentRouter);

//create role route with path of "/comment"
app.use("/role", roleRouter);

//create register route with path of "/register"
app.use("/register", registerRouter);

//create login route with path of "/login"
app.use("/login", loginRouter);
//create category route with path of "/category"
app.use("/category", categoryRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
