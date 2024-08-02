


//let
{
let sound;
let win;
let raquete0;
raq3X = 190
raq3Y = 190
tema ='Sky44918'
tema2 = 'PING-PONG'
autor = 'autor: Christofer Rodrigues Miguel'
escola = '1A'
}

//velocidade
{
velocidadeXbolinha = 3
velocidadeYbolinha = 3
velocidaderaquete = 4
}
//raquete
{
raqueteX1 = 14
raqueteY1 = 190
raqueteX2 = 380
raqueteY2 = 190
}

//bolinha
{
bolinhaX = 50
bolinhaY = 20
}
  
//pontos
{
pontos1=0
pontos2=0
}


function preload()
{
  soundFormats('wav');
  sound = loadSound("hip_hop.wav");
  
  soundFormats('wav');
  win = loadSound("WINNER.wav");
  
  soundFormats('wav');
  raquete0 = loadSound("raquetesound.wav");
  
}
 

function tela2() {
  
  background("green");
  noStroke();
  
  {
    {fill(225)
  circle(0, 200, 200)
  rect(0,0,10,400)
  
  circle(400, 200, 200)
  rect(390,0,10,400)
  
  
  rect(195,0,10,400);
  circle(200, 200, 150)}
  
  {fill(color('green'))
   circle(0, 200, 150);
     circle(400, 200, 150)}
    
    {fill(color('yellow'))
    circle(bolinhaX,bolinhaY,15)}
  
    {fill(color('orange'))
   rect(225, 12, 40,20,20);
     rect(145, 12, 40,20,20)}
    
    {fill(color('blue'))
     textSize(15)
    text(tema, 163, 160);
    text(tema2, 160, 240)}
    
    {fill(color('black'))
     textSize(15)
     text(pontos1,160,26);
     text(pontos2,240,26)
     text(autor, 15,390)
     text(escola,380,390)}
    
    {fill(color('red'))
   rect(raqueteX1, raqueteY1, 7, 50);
   rect( raqueteX2,raqueteY2,7,50)}
    
  }
  
  
  
  pontos();
  actorBolinha();
  actorRaquete1 ();
  actorRaquete2 ();
  colisaoRaquete1 ();
  colisaoRaquete2 ();
}

function actorBolinha()
{ 
  
 
  bolinhaX += velocidadeXbolinha
  bolinhaY += velocidadeYbolinha
  
  
    if(bolinhaX > width || bolinhaX < 0)
{
      velocidadeXbolinha *= -1
      raquete0.play();
    }
  if(bolinhaY > height || bolinhaY < 0)
    {
      velocidadeYbolinha *= -1
      raquete0.play();
}
   if (pontos1 > 10)
  {
    fill(color('red'))
    
    rect(raq3X,raq3Y,7,50)
    
 vop = bolinhaX -raq3Y - 4 / 2 -20;
    
    raq3Y+=vop
  }
  if (pontos2> 10)
  {
    fill(color('red'))
    
    rect(raq3X,raq3Y,7,50)
    
 vop = bolinhaX -raq3Y - 4 / 2 -20;
    
    raq3Y+=vop
  }
}
function actorRaquete1()
{
  
  if (keyIsDown(87) && raqueteY1 > 0)
  {
    raqueteY1 -= velocidaderaquete;
  }
  if (keyIsDown(83) && raqueteY1 < height - 50)
  {
    raqueteY1 += velocidaderaquete;
  }
}
function actorRaquete2()
{
  
  if (keyIsDown(UP_ARROW) && raqueteY2 > 0)
  {
    raqueteY2 -= velocidaderaquete;
  }
  if (keyIsDown(DOWN_ARROW) && raqueteY2 < height - 50)
  {
    raqueteY2 += velocidaderaquete;
  }
}
function colisaoRaquete1 ()
{
  let colidiu = collideRectCircle(raqueteX1, raqueteY1, 7, 50, bolinhaX, bolinhaY, 15);
  
  if(colidiu)
    { 
      (velocidadeXbolinha *= -1)
      raquete0.play();
    }
}
function colisaoRaquete2 ()
{
  let colidiu = collideRectCircle(raqueteX2, raqueteY2, 7, 50, bolinhaX, bolinhaY, 15);
  
  if(colidiu)
    {
      (velocidadeXbolinha *= -1)
      raquete0.play();
    }
}

function colisaoRaquete3 ()
{ 
  if (pontos2> 10)
  {
  let colidiu = collideRectCircle(raq3X, raq3Y, 7, 50, bolinhaX, bolinhaY, 15);
  
  if(colidiu)
    {
      (velocidadeXbolinha *= -1)
      raquete0.play();
    }
  }
  else if (pontos1> 10)
  {
  let colidiu = collideRectCircle(raq3X, raq3Y, 7, 50, bolinhaX, bolinhaY, 15);
  
  if(colidiu)
    {
      (velocidadeXbolinha *= -1)
      raquete0.play();
    }
  }
}
function pontos ()
{
  
  if (bolinhaX < 1)
  {
      (pontos2 +=1)
      win.play();
  }
  if (bolinhaX > 399)
    {
      (pontos1 += 1)
      win.play();
    }
  
}




