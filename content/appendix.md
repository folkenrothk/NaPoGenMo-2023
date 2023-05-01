# Appendix




coverIMG:: 
  `black and white pen sketch title cover "UX"`

inner-coverIMG:: 
  `black and white pen sketch Kate Folkenroth user experience`


## Sandbox

vIMG:: 
  `black and white pen sketch child's sandbox`

IMG-phonetics:: 
  `black and white pen sketch phonetics`

hh-ah-l-ow w-er-l-d!:: RiTa.phones
 
```
let fs = require('fs');
const { waitForDebugger } = require('inspector');
let rita = require('rita');

const loadFile = (filename) => {
  let text = fs.readFileSync(filename, 'utf-8');
  return text;
}

let text = loadFile("./data/000.txt");

function soundItOut(str) {
  var words = str.split('\n');
  var wordSounds = "";
  for (var i = 0; i < words.length; i += 1) {
    wordSounds = wordSounds + rita.phones(words[i]) + '\n';
  }
  return wordSounds;
}

fs.writeFile("../../content/work000.txt", soundItOut(text), function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
}); 
```

first words | first code:: RiTa.phones

IMG-Helcollo:: 
  `black and white pen sketch hello world code`

user:: Nick Montfort Remix = Permutations
```
#!/usr/bin/python
# remixed from "I AM THAT I AM" by Nick Manafort, 2014
import string

def permutate(elems):
 if len(elems) == 0:
 yield elems
 else:
 for result in permutate(elems[1:]):
 for i in range(len(elems)):
 yield result[:i] + elems[0:1] + result[i:]

test_str = str(list(permutate('user'))).replace("'", '').replace(",",'').replace("]",'').replace("[",'')

f = open("../../content/work000.txt", "x")
f.write(test_str)
```

IMG-user::
  `black and white pen sketch full user`
IMG-anon::
  `black and white pen sketch full anonymous user`

who are you?:: ChatGPT Completion w/ Persona
```
SYSTEM PROMPT: you are a child. you may pick your name. you may pick your age. you are happy. you have many normal interests. you have an average family.
```

IMG-childPortfolio::
  `black and white pen sketch user experience of _child_`

## Legacy Code

vIMG:: 
  `black and white pen sketch QR code ancient legacy`

cloudedAncestry:: p5.js 
```
// derived from: https://creative-coding.decontextualize.com/intro-to-ritajs/
let lines;
let counts;
let total;
function preload() {
  lines = loadStrings("assets/folkenroth.txt");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  let params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorasuation: true,
    ignorePunctuation: true
  };
  counts = RiTa.concordance(lines.join(" "),
    params); 
  total = totalValues(counts);

  // set drawing parameters
  background(500);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(255);
  noLoop();
}
function draw() {
  for (let k in counts) {
    if (counts.hasOwnProperty(k)) {
      if (counts[k] > 0) { fill(random(255));
        textSize(counts[k] * 50);
        text(k, random(0, displayWidth), random(0, displayHeight));
      }
    }
  }
}
function totalValues(obj) {
  let total = 0;
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      total += obj[k];
    }
  }
  return total;
}
```

folkenroth.txt:: Nick Montfort Remix; Permutations
```
#!/usr/bin/python
# remixed from "I AM THAT I AM" by Nick Manafort, 2014
import string

def permutate(elems):
 if len(elems) == 0:
 yield elems
 else:
 for result in permutate(elems[1:]):
 for i in range(len(elems)):
 yield result[:i] + elems[0:1] + result[i:]

test_str = str(list(permutate('folkenroth'))).replace("'", '').replace(",",'').replace("]",'').replace("[",'')

f = open("../../content/work000.txt", "x")
f.write(test_str)
```

IMGs-folkenroth::
 `black and white pen sketch wide shot folkenroth`

inheritance.txt:: ChatGPT Completion w/ Persona
```
SYSTEM PROMPT: 
You are an old ancestor. You have plenty of knowledge and wisdom.
You want to portray this to all of your descendants.
You are concerned about legacy and what you leave behind. 
You are both technology and a person. 
```

IMG-inheritance:: 
  `black and white pen sketch the Architects, the Healers, and the Sage`

inheritance:: Oblique Strategies inspired from Paige Downey completed manually
``` Used Constraints
> Censor every tenth word.
> Bold every capital letter. 
> Replace all commas with periods.
> Replace every fourth period with a question mark. 
> Delete every third sentence.
> Replace all spaces with underscores. (*just removed)
> Cut the piece in half and rewrite the missing parts. 
```

IMG-familyTree:: 
  `lack and white pen sketch computer diagram family tree computer hierarchy parent-child`

parent | child | et al.:: ChatGPT Browser
```
> short aesthetic piece about legacy
> short aesthetic sensory piece about memory
> short and aesthetic bittersweet piece about ancestors
> short aesthetic piece about parent child 
> short aesthetic melancholy piece about parents
> a heartbreaking parent/child written piece. Short and aesthetic 
```

IMG-OakTree::
  `black and white pen sketch old oak tree`

IMG-Bread::
  `black and white pen sketch fresh baked bread`

IMG-polaroid::
  `lack and white pen sketch of polaroids worn tattered weathered sketched black and white`

IMG-tinyhuman::
  `black and white pen sketch tiny child baby hand reaching`

IMG-field::
  `black and white pen sketch empty field horizon `


## Rebellious Code

vIMG:: 
  `black and white pen sketch rellious code`

definition.txt:: ChatGPT Browser
  `what are some coding words that are related to teenagers?`

IMG-oldComp::
  `black and white pen sketch code oldest computer`

IMG-0::
  `black and white pen sketch diary entry kindergarten`

IMG-binary::
  `black and white pen sketch code binary`

IMG-1::
  `black and white pen sketch diary entry first grade`

IMG-fortran::
  `black and white pen sketch code fortran`

IMG-2::
 `black and white pen sketch diary entry second grade`

IMG-COBOL::
 `black and white pen sketch code COBOL`

IMG-PASCAL::
 `black and white pen sketch code PASCAL`

IMG-PERL::
 `black and white pen sketch code PERL`

 IMG-3::
  `black and white pen sketch diary entry third grade`

IMG-python::
  `black and white pen sketch code python`

IMG-4::
  `black and white pen sketch diary entry fourth grade`

IMG-html::
  `black and white pen sketch code html`

IMG-5::
 `black and white pen sketch diary entry fifth grade`

IMG-R::
 `black and white pen sketch code R`

IMG-6::
 `black and white pen sketch diary entry sixth grade`

IMG-java::
 `black and white pen sketch code java`

IMG-7::
 `black and white pen sketch diary entry seventh grade`

IMG-javascript::
 `black and white pen sketch code javascript`

IMG-8::
 `black and white pen sketch diary entry eighth grade`

IMG-baseline::
 `black and white pen sketch code`

IMG-PHP::
  `black and white pen sketch code PHP`

IMG-9::
  `black and white pen sketch diary entry freshman`

IMG-css::
  `black and white pen sketch code css`

IMG-10::
 `black and white pen sketch diary entry sophomore`

IMG-C#::
 `black and white pen sketch code C#`

IMG-11::
 `black and white pen sketch diary entry junior`

IMG-new::
 `black and white pen sketch code newest computer`

IMG-rust::
 `black and white pen sketch code rust`

IMG-12::
 `black and white pen sketch diary entry senior`

IMG-golang::
 `black and white pen sketch code golang`

IMG-swift::
 `black and white pen sketch code swift`

IMG-13::
 `black and white pen sketch diary entry college`

## Stairwell

vIMG::
  `black and white pen sketch stairwell `

can you hear me?:: whisper API
```
import openai
from dotenv import dotenv_values

CONFIG = dotenv_values(".env")

openai.api_key = CONFIG["KEY"]
openai.organization = CONFIG["ORG"]

data = open("./audio/input.mp3" , "rb")

transcript = openai.Audio.transcribe("whisper-1", data)
print(transcript["text"])


# outputs are manually saved in [results file](./output.md)
# all translations are completed by Google Translate browser application with the detect language function
```

can you hear me?.txt::
```[Languages]
> Chinese(Traditional)
> Chinese(Traditional)
> Japanese
> Chinese(Simplified)
```

landings.txt::
```[Languages]
> French
> Japanese
> French
> English
> Russian
> Russian
> Welsh
> Welsh, emojicons
> Welsh
> Welsh
```

did you hear me?:: Markov Chains
```
let fs = require('fs');
let rita = require('rita');

const markov = rita.markov(2);

const loadFile = (filename) => {
  let text = fs.readFileSync(filename, 'utf-8');
  markov.addText(text);
}

loadFile("markov/1.txt");
loadFile("markov/2.txt");
loadFile("markov/3.txt");
loadFile("markov/4.txt");

sentences = markov.generate(8);

fs.writeFile("../../content/work000.txt", sentences.join(' '), function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
}); 
```

stair-well:: Markov Chains 
```[Languages]
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
```
stair-well:: ChatGPT Browser
``` INPUT FILE PROMPTS
> tell me about stairs
> tell me about wells
> tell me about echos
> tell me about memory
> tell me about ghosts
```

IMG-stair well:
  `black and white pen sketch stairwell ghosts stairs memory echo well`

## Debugging

vIMG::
  `black and white pen sketch tiny bug`

access:: ChatGPT Browser
  `write a short poetic manual about opening the computer and working on a computer's CPU`

IMG-CPU::
  `black and white pen sketch CPU`

IMG-Brain::
  `black and white pen sketch brain surgery`

---:: ChatGPT Browser
 `what are the many options of the words that make up the acronym AVM`

natural language processer:: RiTa.phones
``` INPUT FILE SOURCES
> Military Acute Concussion Evaluation 
  https://health.mil/Reference-Center/Publications/2020/07/30/Military-Acute-Concussion-Evaluation-MACE-2

> Seizure First Aid 
  https://www.cdc.gov/epilepsy/about/first-aid.htm
```

```
let fs = require('fs');
const { waitForDebugger } = require('inspector');
let rita = require('rita');

loadFile = (filename) => {
 let text = fs.readFileSync(filename, 'utf-8');
 return text;
}

let text = loadFile("./data/input.txt");

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

fs.writeFile("../../content/work000.txt", soundItOut(text), function(err) {
 if(err) {
 return console.log(err);
 }
 console.log("The file was saved!");
}); 
```

## Growth Hacking

vIMG::  
  `black and white pen sketch watering can`

IMG-garden:: 
 `black and white pen sketch bruised not broken garden`

IMG-brokenGround:: 
 `black and white pen sketch bruised not broken`

IMGs-flowers:: 
 `black and white pen sketch bruised not broken flower`

proverbs.txt:: ChatGPT Browser & Personal Sayings
```
write some aesthetic thoughtful proverbs some people cut flowers knowing they will soon die, put them in small containers, and then throw them away when they wilt and change
```

## Implementation

vIMG::  
  `black and white pen sketch transitions`

where am i?:: Google Search Engine + ChatGPT Browser

who am i?:: ChatGPT Completion w/ Persona
```
SYSTEM PROMPT: you are existential. we are in a blank void. you can speak as a mentor for those you engage with. Everyone is lost. You speak cryptic and poetically
```

IMG-cosmos::
 `black and white pen sketch universe galaxy stars`

artificial intelligence:: Slotted Poem
  inspired by: "A NEW SERMON ON THE WARPLAND" in Travesty Generator by Lillian-Yvonne Bertram

```
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

fs.writeFile("../../content/work017.txt", text, function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
}); 
```
déjà vu:: Markov Chains
```
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
#sans folkenroth or inherit due to length 

# ran at (10),(20),(50),(70),(100), & (23)
sentences = markov.generate(X);

fs.writeFile("../../content/work023.txt", sentences.join(' '), function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
}); 

```

home-location:: ChatGPT Browser 

IMG-deja vu::
  `black and white pen sketch deja vu life folkenroth`
