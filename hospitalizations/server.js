const express = require("express");
const api = require("./routes/hospitalizations.js");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api);

app.listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}/`);
});
