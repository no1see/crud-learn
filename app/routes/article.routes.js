module.exports = app => {
  const articles = require("../controllers/article.controller.js");

  var router = require("express").Router();

  // Create a new Article
  router.post("/", articles.create);

  // Retrieve all Articles
  router.get("/", articles.findAll);

  // Retrieve all published Articles
  router.get("/published", articles.findAllPublished);

  // Retrieve all not published Articles
  router.get("/unpublished", articles.findAllNotPublished);

  // Retrieve a single Article with id
  router.get("/:id", articles.findOne);

  // Retrieve all Articles with categoryId
  router.get("/category/:categoryId", articles.findAllByCategory);

  // Publish Article by id
  router.post("/publish/:id", articles.publish);

  // Publish Article by id
  router.post("/unpublish/:id", articles.unpublish);

  // Update a Article with id
  router.put("/:id", articles.update);

  // Delete a Article with id
  router.delete("/:id", articles.delete);

  // Create a new Article
  router.delete("/", articles.deleteAll);

  app.use("/api/articles", router);
};