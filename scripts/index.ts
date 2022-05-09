import { templateFilePubSpec } from "./src/template_file_pubspec";
import {templateFileReadme} from "./src/template_file_readme";
import {templateFileDart} from "./src/template_file_dart";
import {createFolder} from "./src/create_folder";
import {copyFile} from "./src/copy_file";
import {replaceTemplateSkeleton} from "./src/replace_template_skeleton";
const fs = require("fs"); // Or `import fs from "fs";` with ESM
const shell = require("shelljs");
const _ = require("lodash");
const chalk = require('chalk');
const log = console.log;

const arrArguments = process.argv;


const DESTINATION_EXTENSION = "tmpl";

const FILE_PUBSPEC = /^pubspec.yaml/;
const FILE_README = /^README.md/;
const FILE_DART = /^.+\.dart/;


if(arrArguments.length !== 3) {
    log(chalk.red('size argument is not valid'));
    process.exit(1);
}
const pathFolder = arrArguments[2];
const nameProject = _.last(pathFolder.split("/"));

if (!fs.existsSync(pathFolder)) {
    log(chalk.red('path folder is not exists'));
    process.exit(1);
}

const destinationFolder = createFolder(nameProject);
copyFile(pathFolder);

const listAllFiles = _.compact(shell.exec(`find ${destinationFolder} -type f`, {silent: true, async: false}).stdout.split("\n"));
// rename file to .tmpl
listAllFiles.forEach((file: string) => {
    const nameFile = _.last(file.split("/"));
    if(FILE_PUBSPEC.test(nameFile)) {
        templateFilePubSpec(file);
    }
    if(FILE_README.test(nameFile)) {
        templateFileReadme(file);
    }
    if(FILE_DART.test(nameFile)) {
        templateFileDart(file, nameProject);
    }

    const extension = _.last(nameFile.split("."));
    if(extension !== DESTINATION_EXTENSION) {
        shell.exec(`mv ${file} ${file}.${DESTINATION_EXTENSION}`, {silent: true, async: false});
    }
});

replaceTemplateSkeleton(destinationFolder, nameProject);

log(chalk.green('generate template successfully!'));
