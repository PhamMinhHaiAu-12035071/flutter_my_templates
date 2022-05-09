const shell = require("shelljs");
const _ = require("lodash");

const LIST_PATH_COPY = [
    '/Makefile',
    '/pubspec.yaml',
    '/README.md',
    '/lib',
];
function copyFile(pathFolder: string) {
    const nameProject = _.last(pathFolder.split("/"));

    LIST_PATH_COPY.forEach((path) => {
        shell.cp('-R', `${pathFolder}${path}`, `../templates/${nameProject}${path}`);
    })
}

export {
    copyFile,
}