let fs = require('fs');
let rita = require('rita');

const markov = rita.markov(2);

const loadFile = (filename) => {
    let text = fs.readFileSync(filename, 'utf-8');
    markov.addText(text);
}


loadFile("deja/avm.txt");
loadFile("deja/implement.txt");
loadFile("deja/nlp.txt");
loadFile("deja/parentEtAl.txt");
loadFile("deja/rebel.txt");
loadFile("deja/sandbox.txt");
loadFile("deja/stairwell.txt");



sentences = markov.generate(23);

fs.writeFile("../../content/work000.txt", sentences.join(' '), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});  