require("dotenv").config();
require("./db/db.connect");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/product.router");
const categoryRoutes = require("./routes/category.router");
const userRoutes = require("./routes/user.router");
const cartRoutes = require("./routes/cart.router");
const wishlistRoutes = require("./routes/wishlist.router");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//products route
app.use("/api/products", productRoutes);
//category route
app.use("/api/category", categoryRoutes);
//authentication route
app.use("/api/user", userRoutes);
//cart route
app.use("/api/user/cart", cartRoutes);
//wishlist route
app.use("/api/user/wishlist", wishlistRoutes);

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
