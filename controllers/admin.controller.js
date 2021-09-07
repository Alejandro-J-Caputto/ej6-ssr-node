const Product = require("../models/products.model");

module.exports.loadAdmin = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.status(200).render("add-product", {
    path: "/add-product",
  });
};

module.exports.postBook = async (req, res, next) => {
  const product = new Product(req.body.title);
  await product.save();
  res.redirect("/");
};
