function setup() {
    createCanvas(windowWidth, windowHeight);
    background("blue");
}

document.getElementById("demo1").innerHTML =
    Math.floor(Math.random() * 10);
document.getElementById("demo2").innerHTML =
    Math.floor(Math.random() * 10);
document.getElementById("demo3").innerHTML =
    Math.floor(Math.random() * 10);
document.getElementById("demo4").innerHTML =
    Math.floor(Math.random() * 10);

function draw() {
    str = random(0, 2);
    strokeWeight(str);
    stroke(255)
    if (mouseIsPressed === true) {
        noFill();
        circleSize = circleSize + 10;
        ellipse(xpos, ypos, circleSize);
        if (circleSize >400) {
            circleSize = 0; 
        }
    }
}

function mousePressed() {
    xpos = mouseX;
    ypos = mouseY;
    circleSize = 0;
}
