const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json()); // Read about this (Whatever given read in like JSON)
app.use(express.urlencoded({ extended: true })); // check by hovering

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
