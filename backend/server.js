const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

const PublicRoutes = require("./routes/publicRoutes");
const UserRoutes = require("./routes/userRoutes");
dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/public", PublicRoutes);
app.use("/api/user", UserRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
