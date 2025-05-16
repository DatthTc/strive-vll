const express = require("express");
require("dotenv").config(); // .env

const database = require("./config/database");

const router = require("./routers/client/index.route"); // cấu hình router

const app = express();
const port = process.env.PORT; // lấy port từ file .env

app.use(express.static("public"));

database.connect();

router(app); // sử dụng router
app.set("views", `${__dirname}/view`);
app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
