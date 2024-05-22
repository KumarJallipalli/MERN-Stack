// const express = require("express")

import express from "express";

const app = express();
// we can also use "const app = new express();" -> It works the same

let port = 3000;

app.listen(port, () => {
    console.log("This is my 1st web server");
})