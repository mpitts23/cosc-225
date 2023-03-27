const SVG_NS = "http://www.w3.org/2000/svg";

    const svg = document.querySelector("#draw");
    // svg is an svg element
    const rect = svg.getBoundingClientRect();
    isDrawing=false;
    let shape;



    
    // e is an event with a corresponding location:
    // e.clientX and e.clientY
    // x and y are coordinates of the event with the svg element
    svg.addEventListener("mousedown", (e) => {
       shape = document.createElementNS(SVG_NS, "line");

        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
        shape.setAttributeNS(null, "x1", x);
        shape.setAttributeNS(null, "y1", y);
        shape.setAttributeNS(null, "x2", x);
        shape.setAttributeNS(null, "y2", y);
        shape.setAttributeNS(null,"stroke"," rgb(3, 192, 221)");
        shape.setAttribute("stroke-width","5px");
        svg.appendChild(shape);
      
    });
    

    svg.addEventListener("mousemove", (e) => {

        if (isDrawing) {
          x2 = e.offsetX;
          y2 = e.offsetY;
            shape.setAttributeNS(null, "x2", x2);
            shape.setAttributeNS(null, "y2", y2);
          }
    });

    svg.addEventListener("mouseup", (e) => {
        isDrawing=false;
      
      });

     