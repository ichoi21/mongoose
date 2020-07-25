const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3088;

// sets up our app for json and url encoded data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/shoe_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const apiRoutes = require("./routes/test-routes.js");
// const notesRoutes = require("./routes/mongo-routes.js");

// app.use(apiRoutes);
// app.use(notesRoutes);

const shoeRoutes = require("./routes/shoe-routes");
app.use(shoeRoutes);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
