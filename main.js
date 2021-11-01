var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    
}
var last_position_of_X, last_position_of_Y;
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mousedown";
    //color = document.getElementById("color").value;
    //width_of_line = document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseUP", my_mouseUP);
function my_mouseUP(e)
{
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        console.log("last_position_of_X_and_Y_coordinates =");
        //console.log("X="+last_position_of_mouse_X);
        //console.log("Y="+last_position_of_mouse_Y);
        ctx.moveTo(last_position_of_X, last_position_of_Y);
        console.log("current_position_of_X_and_Y_coordinates =");
        console.log("X="+current_position_of_mouse_X);
        console.log("Y="+current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
        ctx.stroke();
    } 

    last_position_of_X = current_position_of_mouse_X;
    last_position_of_Y = current_position_of_mouse_Y;
    //mouseEvent = "mousemove";
}