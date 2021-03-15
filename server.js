const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const articles = require("./app/controllers/article.controller.js");
const models = require("./app/models");
const Article = models.articles;
const Category = models.categories;

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application. ©no1see" });
});

require("./app/routes/article.routes")(app);
require("./app/routes/category.routes")(app);

async function mySeeder() {
  const data = await Article.find();
  if (data && data.length !== 0) {
      // Data exists, no need to seed.
      return;
  }

  let seed = [];

  for (let i = 0; i < 4; i++) {
   seed.push(
     new Article({
       title: `title ${i + 1}`,
       description: `description ${i + 1}`,
       published: i % 2 == 0,
       categoryId: i + 1
     })
   );
  }

  await seed.forEach(item => item.save());
}

async function categorySeeder() {
  const data = await Category.find();
  if (data && data.length !== 0) {
      // Data exists, no need to seed.
      return;
  }

  let seed = [
    new Category({
      id: 1,
      name: 'Technology'
    }),
    new Category({
      id: 2,
      name: 'Sport'
    }),
    new Category({
      id: 3,
      name: 'Music'
    }),
    new Category({
      id: 4,
      name: 'Art'
    })
  ];

  await seed.forEach(item => item.save());
}


mySeeder();
categorySeeder();

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});