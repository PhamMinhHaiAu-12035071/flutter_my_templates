const shell = require("shelljs");

function createFolder(nameProject: string): string {
    const destinationFolder = `../templates/${nameProject}`;
    // remove folder exists
    shell.rm('-rf', `../templates/${nameProject}`);

    shell.mkdir('-p', destinationFolder);
    return destinationFolder;
}

export  {
    createFolder,
}