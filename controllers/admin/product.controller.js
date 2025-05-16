const Product = require("../../models/product-model.js");
const filterStatusHelpers = require("../../helpers/filterStatus.helper");
const searchHelpers = require("../../helpers/searchProduct");

//[GET] /admin/products
module.exports.product = async (req, res) => {
  // là hàm filterStatus chứa một chức năng từ helpers được truyền từ filterStatusHelpers
  const filterStatus = filterStatusHelpers(req.query);

  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  // chức năng function of search
  const objectSearh = searchHelpers(req.query);
  if (objectSearh.keyword) {
    find.title = objectSearh.regex;
  }
  const products = await Product.find(find);

  res.render("admin/pages/product/index.pug", {
    pageTitle: "Danh Sách Sản Phẩm ",
    //truyen` data ra ngoai giao dien
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearh.keyword,
  });
};
