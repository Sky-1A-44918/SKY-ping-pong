let tela=1;

function setup()
{
  setTimeout(actorBolinha,0);
  createCanvas(400,400);
  sound.play();
}
function draw() {
  if (tela==1){
    tela1();
  }
  if (tela==2){
    tela2();
  }
  if (tela==3)
    tela3();
}













