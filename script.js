var x = 0;
var y = 0;

function keyPressed(){
	var cir = document.getElementById("circle");
	var shape = document.getElementById("svg");
	var keycode = event.keyCode;
	//alert(keycode);
	if (keycode == 32){
		cir.style.stroke = getRandomColor();
	} else if (keycode == 115){
		x = x + 50;
		shape.style.marginTop = x + "px";
	} else if (keycode == 119){
		x = x - 50;
		shape.style.marginTop = x + "px";
	} else if (keycode == 100){
		y = y + 50;
		shape.style.marginLeft = y + "px";
	} else if (keycode == 97){
		y = y - 50;
		shape.style.marginLeft = y + "px";
	}
	

	

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


