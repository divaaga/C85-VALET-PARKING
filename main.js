//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width = 90;
greencar_height = 90;
greencar_x = 10;
greencar_x = 10;

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image;

    greencar_img = new Image();
    greencar_img.onload = uploadgreencar;
    greencar_img.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_image,greencar_x,greencar_x,greencar_width,greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencar_y >= 0) {
        greencar_y = greencar_y - 10;
        console.log("When UP arrow is pressed, X = " + greencar_x + " | Y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if (greencar_y <= 500) {
        greencar_y = greencar_y + 10;
        console.log("When DOWN arrow is pressed, X = " + greencar_x + " | Y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	//Define function to move the car left side
	if (rover_x >= 0) {
        greencar_x = greencar_x - 10;
        console.log("When LEFT arrow is pressed, X = " + greencar_x + " | Y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	//Define function to move the car right side
	if (greencar_x <= 700) {
        greencar_x = greencar_x + 10;
        console.log("When RIGHT arrow is pressed, X = " + greencar_x + " | Y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

