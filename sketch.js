var database,position;

var gamestate = 0;
var playercount;
var form, player, game;

function setup(){
    createCanvas(500,500);
    
    database = firebase.database();
    game = new Game();
    
    game.getState();
    game.start();
}

function showError() {
    
}

function draw(){
    background("white");

    
}
