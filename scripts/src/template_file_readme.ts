const fs = require("fs");

function templateFileReadme(pathFile: string) {
    const data = fs.readFileSync(pathFile, 'utf8');
    const insertStringBefore = `# {{projectName}}

{{description}}
`;
    fs.writeFileSync(pathFile, insertStringBefore + data, 'utf8');
}

export {
    templateFileReadme,
}