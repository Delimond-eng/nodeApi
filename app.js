//.env config
require("dotenv").config();

//express
const express = require("express");
const app = express();

//app route
app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This api rest message",
  });
});

//listener
app.listen(process.env.APP_PORT, () => {
  console.log("server up and running on port :", process.env.APP_PORT);
});
