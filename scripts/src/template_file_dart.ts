const shell = require('shelljs');

function templateFileDart(pathFile: string, nameProject: string): void {
    const key = `package:${nameProject}`;

    // changed import project by name alias
    const nameRegex = RegExp(key, 'g');
    const nameChanged = 'package:{{projectName}}';
    shell.sed('-i', nameRegex, nameChanged, pathFile);
}

export {
    templateFileDart,
}