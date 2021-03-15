module.exports = app => {
  const categories = require("../controllers/category.controller.js");

  var router = require("express").Router();

  // Create a new categories
  router.post("/", categories.create);

  // Retrieve all categories
  router.get("/", categories.findAll);

  // Retrieve a single category with id
  router.get("/:id", categories.findOne);

  // Update a category with id
  router.put("/:id", categories.update);

  app.use("/api/categories", router);
};