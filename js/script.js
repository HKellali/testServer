var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
var startX = 0;
var startY = 0;
var width = 50;
var height = 50;
var speed = 10;
draw("green");

function draw(style) {
    context.fillStyle = style;
    context.fillRect(startX, startY, width, height);
}

document.onkeydown = checkKey;

function checkKey(e) {
    context.clearRect(startX, startY, width, height);
    e = e || window.event;

    switch (e.keyCode) {
        case 38:
            if (startY > 0) {
                startY -= speed;
            }
            break;

        case 40:
            if (startY < canvas.clientHeight - height) {
                startY += speed;
            }
            break;

        case 37:
            if (startX > 0) {
                startX -= speed;
            }
            break;

        case 39:
            if (startX < canvas.clientWidth - width) {
                startX += speed;
            }
            break;
    }
    draw("gold");
}