// const express = require("express")

import express from "express";

// Creates an Express application & returns an Object
const app = express();
// we can also use "const app = new express();" -> It works the same

let port = 3000;

// Starts thge app & Listens to all the connections & requets on specified port
app.listen(port, () => {
    console.log("This is my 1st web server");
});


// Handling the each different request with different responses, using app methods on different specified paths
// app.get("/", (req, res) => {
//     console.log("This is the response to GET request on HOME path");
//     res.send("Response sent to GET request on HOME path");
// });

// app.get("/apple", (req, res) => {
//     console.log("This is the response to GET request on APPLE path");
//     res.send("Response sent to GET request on APPLE path");
// });

// app.get("/banana", (req, res) => {
//     console.log("This is the response to GET request on BANANA path");
//     res.send("Response sent to GET request on BANANA path");
// });

// app.get("*", (req, res) => {
//     console.log("This is the Customised response to GET request on OTHER paths");
//     res.send("Response sent to GET request on OTHER paths");
// });

// app.post("/", (req, res) => {
//     console.log("This is the response to POST request on HOME path");
//     res.send("Response sent to POST request on HOME path");
// })

// app.use("/", (req, res) => {
//     console.log("This is the response to ANY request on ANY path");
//     res.send("Response sent to ANY request on ANY path");
// })

// This is multiple route paramaeters
app.get("/:username/:id", (req, res) => {
    let {username} = req.params;
    res.send(`You have visisted the ${username}'s profile`)
});
/**
 *  1. The req.param returns an object with propeties as
 *      - key -> username, id
 *      - vlaue -> dynamic values sent in the URL
 *  2. In multiple route parameters, all the paramaters are mandatory to sent the request
 *      - If you miss any one of the parameters, It will throw error
 *      - Hence in such cases, we use "Optional Parameter" -> by using a "?" at the end of each parameter
 *  3. This is the same case with single route parameter too
 *      - If we use multiple parameters, even though we have given only 1 route parameter in path [ like:  /sivajallipalli/123 ]
 *      - It still throws erro
*/

// This is Query Parameters
app.get("/", (req, res) => {
    let {uname:u, pwd} = req.query;
    res.send(`This is a search response for ${u} with Password ${pwd}`);
});