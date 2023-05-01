let fs = require('fs');
const { waitForDebugger } = require('inspector');
let rita = require('rita');



loadFile = (filename) => {
    let text = fs.readFileSync(filename, 'utf-8');
    return text;
}

let text = loadFile("./data/natLang.txt");

function soundItOut(str) {
    var words = str.split(" ");
    var wordSounds = "";
    var i = 0;
    while (i < words.length) {
        if (i <= (words.length / 2)) {
           var n = Math.floor(Math.random() * 10);
           if (n > 8){
            wordSounds = wordSounds + rita.phones(words[i]) + ' ';
            i += 1;
           } else {
            wordSounds = wordSounds + words[i] + ' ';
            i += 1;
           };
        }
        if (i >= (words.length/2)){
           var n = Math.floor(Math.random() * 10);
           if (n <= 8){
            wordSounds = wordSounds + rita.phones(words[i]) + ' ';
            i += 1;
           } else {
            wordSounds = wordSounds + words[i] + ' ';
            i += 1;
           };
          }
        }       
    return wordSounds;
};

fs.writeFile("../../content/work009.txt", soundItOut(text), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});  
