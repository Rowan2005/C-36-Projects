var canvas;
var database;
var canvasCount;
var drawing;
var drawingState;
var drawingState;
var firebase;

function setup(){
   canvas = createCanvas(1200,800);
   database = firebase.database();
   drawing = new Drawing();
   drawing.getstate();
}

function draw(){
 rect(mouseX,mouseY,100,100);
 
 if(canvasCount === 2){
      drawing.update(1);  
 }




}

