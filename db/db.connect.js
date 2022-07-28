const mongoose = require("mongoose");

const CONNECTION_URL = `mongodb+srv://deekshith:${process.env.PASSWORD}@cluster0.qokar9v.mongodb.net/?retryWrites=true&w=majority`;

const connection = mongoose
  .connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((r) => console.log("connected"))
  .catch((e) => console.log("Error"));

module.exports = connection;
