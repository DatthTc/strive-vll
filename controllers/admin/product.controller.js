const Product = require("../../models/product-model.js");
//[GET] /admin/products
module.exports.product = async (req, res) => {
  const products = await Product.find({
    deleted: false,
  });
  console.log(products);

  res.render("admin/pages/product/index.pug", {
    pageTitle: "Danh Sách Sản Phẩm ",
    //truyen` data ra ngoai giao dien
    products: products,
  });
};
