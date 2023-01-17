const express = require("express");
const api = require("./routes/pokeApi.js");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api);

app.get("/", (request, response) => {
    response.status(200).sendFile(__dirname + "/www/index.html");
  });

app.listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}/`);
});
