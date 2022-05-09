const fs = require("fs");
const _ = require("lodash");
const shell = require("shelljs");

const PATH_TEMPLATE_MANIFEST = "../bin/flutter/packages/flutter_tools/templates/template_manifest.json";
const PATH_SKELETON = "../bin/flutter/packages/flutter_tools/templates/skeleton";

function templateManifest() {
    const data = fs.readFileSync(PATH_TEMPLATE_MANIFEST, 'utf8');
    const jsonData = JSON.parse(data);
    // clear all path skeleton template
    const cloneData = _.cloneDeep(jsonData);
    _.forOwn(jsonData, (value, key) => {
        if(key === "files") {
            cloneData["files"] = value.filter(item => !item.startsWith("templates/skeleton/"))
        }
    });
    // show and replace all path new template skeleton
    const listAllFiles = _.compact(shell.exec(`find ${PATH_SKELETON} -type f`, {silent: true, async: false}).stdout.split("\n"));
    listAllFiles.forEach((file: string) => {
        cloneData["files"].push(file.replace('../bin/flutter/packages/flutter_tools/', ''));
    });

    fs.writeFileSync(PATH_TEMPLATE_MANIFEST, JSON.stringify(cloneData), 'utf8');
}

export {
    templateManifest,
}