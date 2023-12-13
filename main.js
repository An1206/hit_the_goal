
// Create canvas variable
var canvas =new fabric.canvas('mycanvas');
//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
fabric.Image.fromURL("golf-h1.png", function(Img){

	hole_obj=Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole.set({
		top:hole_y,
		left:hole_x
	});
	canvas.add(holeobj);
});

	new_image();
}

function new_image()
{
	fabric.Image.fromUrl("ball.png", function(Img){

	}) ;
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
 document.getElementById("hd3").innerHTML="you have Hit the Goll!!!";
 document.getElementById("mycanvas"). style.bordercolor="red";
	
else {
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
	{		if(ball_y<+450){

		ball_y=ball_y+block_image_height ;
		console.log("block image height =" + block_image_height);
		console.log("When Down arrow key is pressed,x ="+ball_x +",y=" +ball_y);
		canvas.remove(ball_obj);
		new_image();	}

	function down()
	{
		if(ball_y<+450){
			ball_y=ball_y+block_image_height ;
			console.log("block image height =" + block_image_height);
			console.log("When Down arrow key is pressed,x ="+ball_x +",y=" +ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_y=ball_y+block_image_height ;
			console.log("block image height =" + block_image_height);
			console.log("When Down arrow key is pressed,x ="+ball_x +",y=" +ball_y);
			canvas.remove(ball_obj);
			new_image();
		}

	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y=ball_y+block_image_height ;
			console.log("block image height =" + block_image_height);
			console.log("When Down arrow key is pressed,x ="+ball_x +",y=" +ball_y);
			canvas.remove(ball_obj);
			new_image();
		
	}
	}