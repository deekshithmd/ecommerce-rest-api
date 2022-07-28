require("dotenv").config();
require("./db/db.connect");
const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product.router");
const categoryRoutes = require("./routes/category.router");
const userRoutes = require("./routes/user.router");
const cartRoutes = require("./routes/cart.router");
const wishlistRoutes = require("./routes/wishlist.router");

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/user", userRoutes);
app.use("/api/user/cart", cartRoutes);
app.use("/api/user/wishlist", wishlistRoutes);

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
