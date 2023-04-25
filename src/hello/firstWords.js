let fs = require('fs');
const { waitForDebugger } = require('inspector');
let rita = require('rita');


const loadFile = (filename) => {
    let text = fs.readFileSync(filename, 'utf-8');
    return text;
}

let text = loadFile("./data/first.txt");

function soundItOut(str) {
    var words = str.split('\n');
    var wordSounds = "";
    for (var i = 0; i < words.length; i += 1) {
        wordSounds = wordSounds + rita.phones(words[i]) + '\n';
    }
    return wordSounds;
}

fs.writeFile("../../content/work003.txt", soundItOut(text), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});  
