let fs = require('fs');

const loadFile = (filename) => {
    let text = fs.readFileSync(filename, 'utf-8');
   
}

loadFile("output.txt");

