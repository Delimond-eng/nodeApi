//.env config
require("dotenv").config();

//express
const express = require("express");
const app = express();
/*  begin body parser  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*  end body parser   */
//app routes:
const userRouter = require("./api/users/users.router");
app.use("/api/users", userRouter);

//medias
const mediaRouter = require("./api/medias/medias.router");
app.use("/media", express.static("upload/medias"));
app.use("/api/medias", mediaRouter);
/*upload error interceptor*/

//listener**
app.listen(process.env.APP_PORT, () => {
  console.log(
    "server up and running on => http://localhost:" + process.env.APP_PORT
  );
});
