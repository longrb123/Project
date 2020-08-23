const mongoose = require("mongoose");

require("../apps/models/category");

const uris = "mongodb://localhost:27017/project";

mongoose.connect(uris);
