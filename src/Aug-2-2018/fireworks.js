var canvas = document.getElementById("canvas");
canvas.width = screen.width;
canvas.height = screen.height;
var ctx = canvas.getContext('2d');
          
canvas.addEventListener("click", click, false);

function Particle(x, y){
  this.x = x;
  this.y = y;
  console.log(this.x);
  this.width = screen.width/200;
  this.height = screen.width/200;
  this.vx = Math.round(Math.random() * 10);
  this.vy = Math.round(Math.random() * 10);
  if(Math.round(Math.random()) % 2 == 0){this.vx = -this.vx;}
  if(Math.round(Math.random()) % 2 == 0){this.vy = - this.vy;}
}

var xInitial = [];
var yInitial = [];

Particle.prototype.draw = function(index){
  console.log(Math.round(Math.random() * 100));
  ctx.fillStyle = "rgba(" + Math.round(Math.round(Math.random() * 1000)/3.9) + ", " + Math.round(Math.round(Math.random() * 1000)/3.9) + ", " + Math.round(Math.round(Math.random() * 1000)/3.9) + ", 0.8)";
  
  this.vy += 1;
  
  this.x = this.x + this.vx;
  this.y = this.y + this.vy;
  
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

var box = [];
var max = 20;

function click(e){
  arrLength = xInitial.length;
  for(var i = 0; i < max; i++){
    xInitial.push(e.clientX);
    yInitial.push(e.clientY);
  }
  for(var i = 0; i < max; i++){
    box.push(new Particle(xInitial[arrLength + i], yInitial[arrLength + i]));
  }
}
          
function render(){
  setInterval(function(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, screen.width-screen.width/100, screen.height-screen.height/11.5);
    for(var i = 0; i < box.length; i++){
      box[i].draw();
      if(box[i].y > screen.height-screen.height/6){
        box.splice(i, 1);
        xInitial.splice(i, 1);
        yInitial.splice(i, 1);
      }
    }
  }, 30); 
}

render();
