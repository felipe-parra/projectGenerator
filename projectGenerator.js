#!/usr/bin/env node

// import FileSystem for use
const fs = require("fs");

const foldersCreate = [
  "bin",
  "config",
  "controllers",
  "models",
  "public",
  "routes/",
  "public/javascript",
  "public/stylesheets"
];

const filesCreate = [".gitignore", ".env", "src/app.js", "src/routes/index.js"];

const createMainFolder = fileSystem => {
  fileSystem.mkdir("src", err => {
    if (!err.code === "EEXIST") {
      if (err) throw err;
    }
    console.log("src - Directory successfully created");
  });
};

const createFolders = (fileSystem, arrayOfFolders) => {
  arrayOfFolders.forEach(element => {
    fileSystem.mkdir("src/" + element, err => {
      if (!err.code === "EEXIST") {
        if (err) throw err;
      }
      console.log(`${element} - Successfully created`);
    });
  });
};

const createFiles = (fileSystem, arrayFiles) => {
  arrayFiles.forEach(file => {
    fileSystem.writeFile(file, "", err => {
      if (err) console.log(err);
      //   if (!err.code === "EEXIST") {
      //   }
      console.log(`${file} - File is created successfully.`);
    });
  });
};

createMainFolder(fs);
createFolders(fs, foldersCreate);
createFiles(fs, filesCreate);
