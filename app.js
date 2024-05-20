const express = require("express");
const cors = require("./middlewares/CORS");
const bodyParser= require("body-parser");
const path = require("path");
const connectToDatabase = require('./database/connect');
const apiRouter = require("./routes/apiRouter");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");

const port = 3001;
const app = express();
connectToDatabase();


app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(port, () => {
    console.log(`All OK!!!! http://localhost:${port}`)
});
