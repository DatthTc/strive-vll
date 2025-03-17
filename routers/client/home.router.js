const express = require("express"); // là 1 framework của nodeJs nhúng vào file để sử dụng các tính năng của nó

const router = express.Router(); // tạo một instance của router từ express giúp quản lý có cấu trúc

const controllers = require("../../controllers/client/home.controller");

router.get("/", controllers.home);
// router có phương thức http là get cho đường dẫn là "/" (đường dẫn gốc), khi có yêu cầu (req) GET đến đường dẫn này thì server trả về chuỗi như trog hình
module.exports = router;
// export router để sử dụng ở file khác
