import {templateManifest} from "./template_manifest";

const shell = require("shelljs");

const FOlDER_EXTRACT = "../bin";
const FOLDER_FLUTTER = "../bin/flutter";
const FLUTTER_ZIP = "../bin/flutter_macos_arm64_3.0.1-stable.zip";
const PATH_TEMPLATES = "../bin/flutter/packages/flutter_tools/templates";
const PATH_SKELETON = "../bin/flutter/packages/flutter_tools/templates/skeleton";
function replaceTemplateSkeleton(destinationFolder: string, nameProject: string): void {
    // remove folder exists
    shell.rm('-rf', `${FOLDER_FLUTTER}`);
    // unzip package
    shell.exec(`unzip ${FLUTTER_ZIP} -d ${FOlDER_EXTRACT}`, {silent: true, async: false});
    // remove folder skeleton
    shell.rm('-rf', `${PATH_SKELETON}`);
    // replace skeleton by new template
    shell.cp('-R', destinationFolder, PATH_TEMPLATES);
    // rename folder
    shell.mv('-n', `${PATH_TEMPLATES}/${nameProject}`, PATH_SKELETON);
    // append file template
    templateManifest();
}

export {
    replaceTemplateSkeleton,
}