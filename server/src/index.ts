import express = require("express");
import Middleware = require("./config/middleware/base/MiddlewareBase");

let app = express();
let port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);
app.use(Middleware.configuration);

app.listen(port, () => {
  console.log("Vertical Farming app running at localhost:" + port);
});