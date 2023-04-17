const express = require("express");
const fileRouter = express.Router();
const { getFile, getFiles, createFile } = require("../files");

fileRouter.get("/", getFiles);
fileRouter.get("/:filename", getFile);
fileRouter.post("/", createFile);

module.exports = fileRouter;
