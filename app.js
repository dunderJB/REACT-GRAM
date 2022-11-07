require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

//routes
const router = require("./routes/Router");

const port = process.env.PORT;

const app = express();

//connfig JSON and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//solve cors quando executamos requisicoes pelo mesmo dominio
app.use(cors({ credentials: true, origin: "http://localhost:3000"}));

//upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection
require("./config/db.js");

app.use(router)

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
})
