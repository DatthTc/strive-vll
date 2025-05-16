module.exports = (objectPagination, query, countProducts) => {
  //pagination : Phân Trang
  if (query.page) {
    objectPagination.currentPage = parseInt(query.page); // get currentPage
  }
  objectPagination.skip = // count product in database
    (objectPagination.currentPage - 1) * objectPagination.limitItem;

  const totalPage = Math.ceil(countProducts / objectPagination.limitItem);
  objectPagination.totalPage = totalPage;

  return objectPagination;
  //end pagination
};
