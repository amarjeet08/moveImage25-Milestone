var image = document.getElementById("image");
var positionX = 0;
var positionY = 0;
document.addEventListener("keydown", function(event) {
    if(event.keyCode ==37){ // left arrow
    positionX -= 10
}else if(event.keyCode ==38){ //up arrow
positionY -= 10;
}else if(event.keyCode == 39){ //right arrow
positionX += 10;
}else if(event.keyCode == 40) { //down arrow
positionY += 10;
}
image.style.left = positionX + "px";
image.style.top = positionY + "px";
})
