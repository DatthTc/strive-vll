const express = require("express");
require("dotenv").config(); // .env

const router = require("./routers/client/index.route"); // cấu hình router

const app = express();
const port = process.env.PORT; // lấy port từ file .env

app.use(express.static("public"));

router(app); // sử dụng router
app.set("views", `${__dirname}/view`);
app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
