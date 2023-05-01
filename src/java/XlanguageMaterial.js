let rita = require('rita');
let fs = require('fs');

let rules = {
    start: "$1 $2 $3. $2 $1 $3. $3 $2 $1. $1 $3 $2. $3 $1 $2. $2 $3 $1. ",
    $1: " who[5] | what | where[5] | when | why | how ",
    $2: "am[10] | was | are[10] ",
    $3: "I | i[20] | you[7] | we[5]",
}

let n = 199;
text = "";

while (n > 0){
    let grammar = rita.grammar(rules);
    text += grammar.expand() + "\n"
    n -= 1;
}

fs.writeFile("../../content/work00.txt", text, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});  

