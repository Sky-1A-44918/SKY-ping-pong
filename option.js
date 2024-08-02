function tela3()
{
  background('green');

  {fill(225)
  circle(0, 200, 200)
  rect(0,0,10,400)
  
  circle(400, 200, 200)
  rect(390,0,10,400)
  back='back'
  
  rect(195,0,10,400);
  circle(200, 200, 150);
  }
  {fill(color('black'))
   text(back,220,250);
  }
  
  
  {fill(color('orange'))
  rect(125,220,150,50,20);
  }
  if (keyIsDown(49))
  {
    tela -= 3;
    tela += 1}
}
