class CanvasDrawing {
    constructor(drawingPanel) {
      this.canvas = document.querySelector(".canvas");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
  
      this.context = this.canvas.getContext("2d");
      this.context.lineCap = "round";
      this.context.lineJoin = "round";
      this.setLineWidth(1);
      this.setLineColor("#000");
  
      this.drawing = false;
      this.drawingPanel = drawingPanel;
  
      this.init();
    }
  
    setLineWidth = (width) => {
      this.context.lineWidth = width;
    };
  
    setLineColor = (color) => {
      this.context.strokeStyle = color;
    };
  
    init() {
      this.addListeners();
    }
  
    addListeners() {
      const canvas = this.canvas;
  
      canvas.addEventListener("mousedown", this.startDrawing);
      canvas.addEventListener("mousemove", this.draw);
      canvas.addEventListener("mouseup", this.stopDrawing);
      canvas.addEventListener("mouseout", this.stopDrawing);
  
      this.drawingPanel.addPanelListeners(this.setLineColor, this.setLineWidth);
    }
  
    startDrawing = (e) => {
      this.drawing = true;
      this.lastX = e.offsetX;
      this.lastY = e.offsetY;
    };
  
    stopDrawing = (e) => {
      this.drawing = false;
    };
  
    draw = (e) => {
      if (!this.drawing) return;
      const context = this.context;
      context.beginPath();
      context.moveTo(this.lastX, this.lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    };
  }
  
  const canvasDrawing = new CanvasDrawing(drawingPanel);
  