const express = require("express");
const connection = require("./connection");
const userRoute = require("./Routers/user");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 8000 || process.env.port;

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.listen(port, () => {
  console.log(`Gift app listening on port ${port}`);
});
