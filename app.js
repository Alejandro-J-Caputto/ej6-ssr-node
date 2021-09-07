const path = require("path");
const express = require("express");
// const bodyParser = require('body-parser');

const app = express();

//EJS
app.set("view engine", "ejs");
//HANDLEBARS
// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "views"));
//PUG
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use("/", shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { patata: "patata rauda" });
});

app.listen(3000);
