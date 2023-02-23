let pr = ['with your eyes closed', 'with both hands at once', 'someone you love', 'while wiggling your toes', 'like you are a starchitect', 'with your less dominant hand', 'your deepest secret', 'someone in the room', 'with only one line', 'your favourite memory', 'your version of Sydney', 'the same thing as the person next to you', 'a self-portrait', 'your favourite spot in the Wilksinson building', 'the house you first lived in', 'ten parallel lines', 'your favourite building', 'your home', 'your favourite architect'];
var title;
var fade = 0;
var ent = false;
var my_div, my_div2;
var my_text, my_form;
var resetbutton = false;
var del = 10;

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','r','x','y','z', ' ']
let word= [];
let target= [];
let correct = [];

var prom, finalword, selectword, len;

function preload(){
  title = loadImage('Trace Space.png');
   

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  my_text = createP('draw...');
  my_text.class('text');
  
  my_div = createImg('buttonoff.png', 'button');
  my_div.class('button');
  my_div.style("display:none");
  my_div.mousePressed(clicked);
  my_div2 = createImg('buttonon.png', 'button');
  my_div2.class('button');
  my_div2.style("display:none");
  my_form = select("form");
  my_form.style("display","none");

  
  textFont('Century Gothic');
}

function draw() {
  background(255)
  
  logo();
  promptWords();
  
  
 
  
  if (resetbutton == true){
      del = del -1;
      if (del <= 0){
      my_div.style("display:block");
      my_div2.style("display:none");
      resetbutton = false;
      del = 10;
      }
  }
 
}
  
function logo(){
   if (fade <= 300 && ent == false){
  tint(255,fade);
  image(title,windowWidth/2, windowHeight/2, windowWidth, windowWidth);
  fade = fade + 30;
  noTint();
  }
  
  if (fade > 300){
    ent = true;
  }
  
  if (ent == true && fade > 0){
    tint(255,fade);
  image(title,windowWidth/2, windowHeight/2, windowWidth, windowWidth);
  fade = fade - 30;
  noTint();
  }
  
  if (ent == true && fade <= 0){
      my_div.style("display:block");
      my_text.style("display:block");
  }
}

function clicked(){
    my_div.style("display:none");
    my_div2.style("display:block");
    my_form.style("display:block");
    correct = [];
    word = [];
  selectword = random(pr);
    //             len = selectword.length;
    //             for (let w = 0; w < selectword.length; w++){
    //               correct[w] = false;
    //             }
    //       word[0] = selectword[0];
    // print('hello');
    resetbutton = true;
  
}

function promptWords(){
    
  textAlign(CENTER);
  textSize(windowWidth/20);
  
//     for (let i = 0; i <= len; i++){
//       if (correct[i] == false){
//       word[i] = random(letters);
//           if (selectword[i-1] == word[i-1] && selectword[i] == word[i] ){
//             correct [i] = true;
//         }
//       }
//     }
  
  // finalword = join(word,'');  
  text(selectword,windowWidth/2,1*windowHeight/2);
}

