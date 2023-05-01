let fs = require('fs');
const { waitForDebugger } = require('inspector');
let rita = require('rita');



loadFile = (filename) => {
    let text = fs.readFileSync(filename, 'utf-8');
    return text;
}

let text = loadFile("./data/ami.txt");

function soundItOut(str) {
    var words = str.split('\n');
    var wordSounds = "";
    for (var i = 0; i < words.length; i += 1) {
        wordSounds = wordSounds + rita.phones(words[i]) + '\n';
    }
    return wordSounds;
}

fs.writeFile("../../content/work004.txt", soundItOut(text), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});  
