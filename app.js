const express = require("express");
const cors = require("./middlewares/CORS");
const bodyParser = require("body-parser");
const path = require("path"); 

const port = 3000;
const app = express();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public"))
);

app.listen(port, () =>{
    console.log("All OK!!!!")
});