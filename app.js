//.env config
require("dotenv").config();

//express
const express = require("express");
const app = express();

//use JSON
app.use(express.json());
//app routes:
const userRouter = require("./api/users/users.router");
app.use("/api/users", userRouter);
//listener
app.listen(process.env.APP_PORT, () => {
  console.log("server up and running on port :", process.env.APP_PORT);
});
