const express = require("express");
const model = require("./Models/index")
const app = express();

app.listen(8000, () => {
    console.log("Server listening");
});
