const fs = require("fs");
const path = require("path");
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  async save() {
    const pathJSON = path.join(__dirname, "../data", "products.json");
    return new Promise((res, rej) => {
      fs.readFile(pathJSON, (err, documents) => {
        let products = [];
        if (!err) {
          res((products = JSON.parse(documents)));
        }
        products.push(this);
        res(products);
      });
    }).then((products) => {
      fs.writeFile(pathJSON, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    const pathJSON = path.join(__dirname, "../data", "products.json");
    fs.readFile(pathJSON, (err, document) => {
      if (err) {
        return cb([]);
      }
      return cb(JSON.parse(document));
    });
  }
};
