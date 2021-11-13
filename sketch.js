var database
var gameState=0
var playerCount=0
var allPlayers
var startImg,titleImg
var game
var form
var player
var Rpiece,Ypiece,Ppiece,Bpiece

function preload (){
  startImg=loadImage("Images/Ludo start screen.png")
  titleImg=loadImage("Images/Title image.png")
  Rpiece=loadImage("Images/red1.png")
  Ypiece=loadImage("Images/yellow 2.png")
  Ppiece=loadImage("Images/purple1.png")
  Bpiece=loadImage("Images/blue1.png")

}

function setup() {
  createCanvas(displayWidth-100,displayHeight-250)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
// background("red")
if(playerCount===4){
game.update(1)
}
if(gameState===1){
  game.play()
}





  drawSprites();
}