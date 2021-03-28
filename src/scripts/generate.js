const fs = require('fs');
const { component, style} = require('../templates/template.js');
const Select = require("./select")

// grab component name from terminal argument
// const [name] = process.argv.slice(2);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createFiles(name, type) {

    const dir = `./src/${type}/${name}/`;

    // throw an error if the file already exists
    if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

    // create the folder
    fs.mkdirSync(dir);

    function writeFileErrorHandler(err) {
        if (err) throw err;
    }

    // component.js
    fs.writeFile(`${dir}/${name}.js`, component(name), writeFileErrorHandler);
    // index.scss
    fs.writeFile(`${dir}/index.scss`, style(name), writeFileErrorHandler);

}

rl.question("Name ? ", function(name) {

    if (!name) throw new Error('You must include a component name.');

    const typeSelect = new Select({
        question: "Type?",
        options: ["Component", "View"],
        answers: ["components", "views"],
        pointer: ">",
        color: "magenta",
        callback: (type) => createFiles(name, type)
    })
    typeSelect.start()

    // rl.close();
});

////////////////
/// Optional ///
////////////////

// insert new component into 'components/index.ts file
// fs.readFile('./src/components/index.ts', 'utf8', function(err, data) {
//   if (err) throw err;

//   // grab all components and combine them with new component
//   const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g);
//   const newComponents = [name, ...currentComponents].sort();

//   // create the import and export statements
//   const importStatements = newComponents
//     .map(importName => `import ${importName} from './${importName}';\n`)
//     .join('');
//   const exportStatements = `export {\n${newComponents
//     .map(component => `  ${component},\n`)
//     .join('')}};\n`;

//   const fileContent = `${importStatements}\n${exportStatements}`;

//   fs.writeFile(`./src/components/index.ts`, fileContent, writeFileErrorHandler);
// });