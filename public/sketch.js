let socket = io();
let userPositions = []
let user

socket.on('connect', function() {
    console.log("Connected");
});

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    socket.on('data', function(data) {
        drawUserCircle(data);
    });
}

function drawUserCircle (data) {
    clear()
    fill(0, 200)
    circle(data.x, data.y, 40)
}

function mouseMoved() {
    socket.emit('data', { 
        x: mouseX, 
        y: mouseY 
    });
}

