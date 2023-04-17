const express = require("express");
const morgan = require("morgan");
const router = require("./routes/router");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/files", router);

app.listen(3000, () => console.log("Server online at http://localhost:3000"));
