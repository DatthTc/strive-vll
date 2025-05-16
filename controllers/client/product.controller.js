const Product = require("../../models/product-model"); // thằng này import từ folder models

module.exports.product = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  });
  const newProduct = products.map((item) => {
    item.priceNew = (
      (item.price * (100 - item.discountPercentage)) /
      100
    ).toFixed(0);
    return item;
  });
  console.log(newProduct);

  console.log(products);

  res.render("client/pages/products/index.pug", {
    pageTitle: "Danh Sách sản Phẩm",
    products: products,
  });
};
