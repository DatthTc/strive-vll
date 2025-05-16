const mongose = require("mongoose");

const productSchema = new mongose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean,
});
// mongoose.model: Đây là một hàm trong thư viện Mongoose, được sử dụng để tạo ra một model.
//"Product": Đây là tên của model, bạn sẽ sử dụng tên này để tương tác với collection "products" trong database.
// productSchema: Đây là một schema (sơ đồ) định nghĩa cấu trúc của dữ liệu trong collection "products". Nó xác định các trường (fields), kiểu dữ liệu của từng trường và các ràng buộc (constraints).
// "products": Đây là tên của collection trong database mà model này sẽ tương tác ( ví dụ ở đây là database in mongo atlas)
const Product = mongose.model("Product", productSchema, "products");

module.exports = Product;
