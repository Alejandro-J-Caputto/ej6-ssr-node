const Product = require("../models/products.model");

module.exports.renderShop = (req, res, next) => {
  Product.fetchAll((products) => {
    // console.log("shop.js", adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // const products = adminData.products;
    const patata = "patata rauda";
    res.status(200).render("shop", {
      prods: products,
      patata,
      hasProducts: products.length > 0,
      path: "/",
    });
  });
};
