/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 * Remember, order matters
 ***********************************************/
class DrawingStraightLine extends PaintFunction {
    // This class extends the PaintFunction class
    // You are only passing one instance here
  
    constructor(contextReal,contextDraft) {
      super();
      this.context = contextReal;
      this.contextDraft = contextDraft;
    }
  
    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
        console.log(this.color)
      // Fill in the color
      this.context.strokeStyle = this.color;
      this.context.fillStyle= this.color;

      // Kind of line
      this.context.lineJoin = "round";
      // Width of line
      this.context.lineWidth = 5;
      // Drawing the line here
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
    }
    // Clicking and removing your mouse
    onDragging(coord, event) {
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
          );
        this.drawDraft(coord[0], coord[1]);
    }
  
    onMouseMove() {}
    onMouseUp(coord, event) {
        this.contextDraft.reset()
       
        this.draw(coord[0], coord[1]);
    }
    onMouseLeave() {}
    onMouseEnter() {}
    
    drawDraft(x, y) {
        //
        this.contextDraft.lineTo(x, y);
        // Draw the line onto the page
        this.contextDraft.stroke();
        
      }

    draw(x, y) {
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
          );
      //
      this.context.lineTo(x, y);
      // Draw the line onto the page
      this.context.stroke();
    }
  }
  