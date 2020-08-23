const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    cate_id: mongoose.Schema.ObjectId,
    prd_name: String,
    prd_image: String,
  },
  {
    timestamps: true,
  }
);

mongoose.model("Product", ProductSchema, "products");