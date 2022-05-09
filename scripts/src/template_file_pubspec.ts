const YAML = require("yaml");
const shell = require("shelljs");
const fs = require("fs");

function templateFilePubSpec(pathFile) {
    const file = fs.readFileSync(pathFile, 'utf8');
    const objectData = YAML.parseDocument(file);
    let data = {
        isChanged: false,
        value: '',
        isChild: false,
        nameChild: '',
    }
    YAML.visit(objectData, {
        Pair(_, pair) {
          // console.log(`pair key ${pair.key} pair value ${pair.key.value}`);
        },
        Scalar(key, node) {
            // console.log(`key: ${key} node: ${node}`);
            if(key === 'key' && node.value === 'name') {
                data = {
                    isChanged: true,
                    value: `{{projectName}}`,
                    isChild: false,
                    nameChild: '',
                }
            }
            if(key === 'key' && node.value === 'description') {
                data = {
                    isChanged: true,
                    value: `{{description}}`,
                    isChild: false,
                    nameChild: '',
                }
            }

            if(key === 'key' && node.value === 'environment') {
                data = {
                    isChanged: false,
                    value: ``,
                    isChild: true,
                    nameChild: 'sdk',
                }

            }
            if(key === 'key' && node.value === 'sdk' && data.nameChild === 'sdk' && data.isChild === true) {
                data = {
                    isChanged: true,
                    value: `{{dartSdkVersionBounds}}`,
                    isChild: false,
                    nameChild: '',
                }
            }
            if(key === 'value' && data.isChanged === true) {
                node.value = data.value;
                data = {
                    isChanged: false,
                    value: '',
                    isChild: false,
                    nameChild: '',
                }

            }
        }
    })
    fs.writeFileSync(pathFile, objectData.toString(), 'utf8');
    // changed name
    const nameRegex = /"{{projectName}}"/;
    const nameChanged = '{{projectName}}';
    shell.sed('-i', nameRegex, nameChanged, pathFile);

    // changed description
    const descriptionRegex = /"{{description}}"/;
    const descriptionChanged = '{{description}}';
    shell.sed('-i', descriptionRegex, descriptionChanged, pathFile);

    // changed environment sdk
    const environmentSDKRegex = /"{{dartSdkVersionBounds}}"/;
    const environmentSDKChanged = '{{dartSdkVersionBounds}}';
    shell.sed('-i', environmentSDKRegex, environmentSDKChanged, pathFile);
}

export {
    templateFilePubSpec,
}