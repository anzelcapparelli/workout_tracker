const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./models");

// app.use(logger("dev"));
// ^^^ don't know what this does

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });
// ^^^ look into connecting

require("./routes/api_routes.js")(app);
require("./routes/html_routes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  