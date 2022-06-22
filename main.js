var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var rover_width=50;
var rover_height=25;
var rover_x=30;
var rover_y=50;
var new_image="mars.jpg";
var rover_image="rover.png";

function update(){
    bg_image=new Image();
    bg_image.onload=uploadBackground;
    bg_image.src=new_image;
    mars_rover_image1=new Image();
    mars_rover_image1.onload=uploadRover();
    mars_rover_image1.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(bg_image,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(mars_rover_image1,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",key_down);
function key_down(e){
    key_press=e.keyCode;
    console.log(key_press);
    if(key_press=='37'){
        left();
        console.log("left");
    }
    if(key_press=='38'){
        up();
        console.log("up");
    }
    if(key_press=='39'){
        right();
        console.log("right");
    }
    if(key_press=='40'){
        down();
        console.log("down");
    }
    if(key_press=='32'){
        jump();
        console.log("down");
    }
function left(){
    if(rover_x>=0){
        rover_x=rover_x-5;
        console.log(rover_x+","+rover_y)
        uploadBackground();
        uploadRover();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-5;
        uploadBackground();
        uploadRover();
        console.log(rover_x+","+rover_y);
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+5;
        uploadBackground();
        uploadRover();
        console.log(rover_x+","+rover_y);
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+5;
        uploadBackground();
        uploadRover();
        console.log(rover_x+","+rover_y);
    }
}
}

function jump(){
    rover_x=Math.floor(Math.random()*200);
    rover_y=Math.floor(Math.random()*100);
    uploadBackground();
    uploadRover();
    console.log(rover_x+","+rover_y)
}
