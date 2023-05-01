let fs = require('fs');
let rita = require('rita');

const markov = rita.markov(3);

const loadFile = (filename) => {
    let text = fs.readFileSync(filename, 'utf-8');
    markov.addText(text);
}

loadFile("markov/stairs.txt");
loadFile("markov/wells.txt");
loadFile("markov/echo.txt");
loadFile("markov/memory.txt");
loadFile("markov/ghosts.txt");

sentences = markov.generate(22);

fs.writeFile("../../content/work010.txt", sentences.join(' '), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});  