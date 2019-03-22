const express = require("express");
const path = require("path");
const proxy = require("http-proxy-middleware");
const cors = require('cors');

const app = express();
app.use(cors());

app.use(
  "/api",
  proxy({ target: "https://www.faire.com", secure: false, changeOrigin: true })
);

app.use("/", express.static(path.resolve("public")));

app.listen(2526, err => {
  if (err) {
    console.error(err);
    return;
  }

  // tslint:disable-next-line:no-console
  console.log(`Listening at http://localhost:4242/api`);
});
