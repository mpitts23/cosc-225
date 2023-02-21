function drawTiles(){

const parent = document.querySelector(".grid");
red = 175;
green = 255;
blue = 0; 

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const newDiv = document.createElement("div");
        diag = Math.sqrt(Math.pow(i, 2)+Math.pow(j, 2));
        red2 = red + (80/9)*i
        blue2 = blue + (255/9)*j
        green2 = green -(255/(Math.sqrt(10, 2)))
        newDiv.style.backgroundColor = "rgb("+red2+","+green2+","+blue2+")";
        newDiv.style.height = "50px";
        newDiv.style.width = "50px";
        newDiv.style.position = "absolute";
        newDiv.style.left = i*50+"px";
        newDiv.style.top =  j*50+"px";

        newDiv.classList.add("cells");
        parent.appendChild(newDiv);
      }
  }
}

