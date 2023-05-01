let fs = require('fs');
let rita = require('rita');

const markov = rita.markov(2);

const loadFile = (filename) => {
    let text = fs.readFileSync(filename, 'utf-8');
    markov.addText(text);
}

loadFile("markov/body.txt");
loadFile("markov/gravity.txt");
loadFile("markov/fallingTrees.txt");
loadFile("markov/kitchen.txt");

sentences = markov.generate(8);

fs.writeFile("../../content/work016.txt", sentences.join(' '), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});  