const express = require("express");
require("dotenv").config(); // .env

const systemConfix = require("./config/system");

const database = require("./config/database");

const router = require("./routers/client/index.route"); // cấu hình router
const routerAdmin = require("./routers/admin/index.route"); // cấu hình router admin

const app = express();
const port = process.env.PORT; // lấy port từ file .env

app.use(express.static("public"));

database.connect();

router(app); // sử dụng router
routerAdmin(app);

app.set("views", `${__dirname}/view`);
app.set("view engine", "pug");

app.locals.prefixAdmin = systemConfix.prefixAdmin;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
