const homeRouter = require("./home.router");
const productRouter = require("./products.router");

module.exports = (app) => {
  app.use("/", homeRouter); // hiểu đơn giản là tất cả các router được định nghĩa trong homeRouter sẽ được use khi có yêu cầu đến đường dẫn gốc
  app.use("/products", productRouter);
};
