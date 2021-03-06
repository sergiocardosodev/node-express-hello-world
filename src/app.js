const express = require("express");
const dotenv = require("dotenv/config");
const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listen on ${app.settings.port}`);
});
