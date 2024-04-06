var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png", "jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista
 path = createSprite(200, 200, 5, 5);
//adicione uma imagem para a pista
path.addImage("caminho", pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(200, 350, 10, 10);
//adicione uma animação de corrida para ele
boy.addAnimation("running", boyImg);
boy.scale=0.8;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
if(keyDown("right") || keyDown("d")){
  boy.x= boy.x+10
}
if(keyDown("left") || keyDown("a")){
  boy.x= boy.x-10
}

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
