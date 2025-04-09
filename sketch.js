function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;


function draw() {
  background(220);
  fill("#061D9D");
  circle(200, 200, 300); // cabeca
  fill("white")
  circle(150, 150, 100); // olho esq
  circle(250, 150, 100); // olho dit
  triangle(150, 270, 250, 270, 200, 260); // boca
  fill("gray");
  triangle(60, 160, 13, 100, 90, 100); // chifre esq
  triangle(340, 160, 383, 100, 310, 100); // chifre dit
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita

  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
