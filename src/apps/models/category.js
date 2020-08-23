const mongoose = require("mongoose");

const CategoryModel = new mongoose.Schema({
  cate_name: String,
});

mongoose.model("Category", CategoryModel, "category");
