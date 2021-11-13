class Game {
constructor(){}

getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })}

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
 start(){
    background(startImg)
    player=new Player()
    form = new Form()
    player.getCount()
    form.display()

 }

 play (){
console.log("this is testing")
background("black")
form.hide()

for( var i=0;i<4;i++){
  player.pieces[i]=createSprite(50*i+1,50*i+1,50,50)
  player.pieces[i].shapeColor="red"
  player.pieces[i].scale=0.05
  switch(i){
    case 0:
      player.pieces[i].scale=0.2
      player.pieces[i].x=75
      player.pieces[i].y=75
      player.pieces[i].addImage("Rpiece",Rpiece)
      break
      
      case 1:
        player.pieces[i].x=width-100
        player.pieces[i].y=75
      player.pieces[i].addImage("Ypiece",Ypiece)
      break
      
      case 2:
        player.pieces[i].x=75
        player.pieces[i].y=height-100
      player.pieces[i].scale=0.2
      player.pieces[i].addImage("Ppiece",Ppiece)
      break
      
      case 3:
        player.pieces[i].x=width-100
        player.pieces[i].y=height-100
      player.pieces[i].addImage("Bpiece",Bpiece)
      break
  }
  
  console.log(player.pieces)
}
drawSprites();
 }

 end(){

 }
      
  }


