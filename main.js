
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="red";
width=2;
radius=10;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color=document.getElementById("color").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
  mouseEvent="mouseDown";
 
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
   mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
   mouseEvent="mouseleave";
}
  
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
 
  current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent =="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle  = color;
        ctx.lineWidth = width;
        ctx.arc(current_mouse_x, current_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        
    }
	last_x = current_mouse_x;
        last_y = current_mouse_y;
       }
function clear_btn(){
ctx.clearRect(0,0,canvas.width, canvas.height);
}

