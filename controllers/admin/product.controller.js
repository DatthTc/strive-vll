const Product = require("../../models/product-model.js");
const filterStatusHelpers = require("../../helpers/filterStatus.helper");
const searchHelpers = require("../../helpers/searchProduct");
const paginationHelper = require("../../helpers/pagination.helper");

//[GET] /admin/products
module.exports.product = async (req, res) => {
  // là hàm filterStatus chứa một chức năng từ helpers được truyền từ filterStatusHelpers
  const filterStatus = filterStatusHelpers(req.query);

  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
    pagination.helper;
  }

  // chức năng function of search
  const objectSearh = searchHelpers(req.query);
  if (objectSearh.keyword) {
    find.title = objectSearh.regex;
  }

  // let objectPagination = {
  //   currentPage: 1,
  //   limitItem: 4,
  // };
  const countProducts = await Product.countDocuments(find); // count product
  const objectPagination = paginationHelper(
    {
      // nhớ objectPagination là hàm tự định nghĩa
      currentPage: 1,
      limitItem: 4,
    },
    req.query,
    countProducts
  );

  const products = await Product.find(find)
    .limit(objectPagination.limitItem)
    .skip(objectPagination.skip);

  res.render("admin/pages/product/index.pug", {
    pageTitle: "Danh Sách Sản Phẩm ",
    //truyen` data ra ngoai giao dien
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearh.keyword,
    pagination: objectPagination,
  });
};
