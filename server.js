const express = require("express");
const { sendFile } = require("express/lib/response");
const path = require("path");

const app = express();

app.get("/*", (req, res) => { 
    res,sendFile(path.resolve("frontend", "index.html"));
})

