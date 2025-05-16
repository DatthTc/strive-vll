const Product = require("../../models/product-model.js");
//[GET] /admin/products
module.exports.product = async (req, res) => {
  // lọc và tìm kiếm
  let filterStatus = [
    {
      name: "Tất Cả",
      status: "",
      class: "",
    },
    {
      name: "Hoạt Động",
      status: "active",
      class: "",
    },
    {
      name: "Dừng Hoạt Động",
      status: "inactive",
      class: "",
    },
  ];

  if (req.query.status) {
    const index = filterStatus.findIndex(
      (item) => item.status == req.query.status
    );
    filterStatus[index].class = "active";
  } else {
    const index = filterStatus.findIndex((item) => item.status == "");
    filterStatus[index].class = "active";
  }
  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  const products = await Product.find(find);

  res.render("admin/pages/product/index.pug", {
    pageTitle: "Danh Sách Sản Phẩm ",
    //truyen` data ra ngoai giao dien
    products: products,
    filterStatus: filterStatus,
  });
};
