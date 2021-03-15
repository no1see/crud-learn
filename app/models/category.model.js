module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      id: Number
    },
    {
      timestamps: true,
      _id : false
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    // object.id = _id;
    return object;
  });

  const Category = mongoose.model("category", schema);
  return Category;
};