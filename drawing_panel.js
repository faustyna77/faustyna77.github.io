
class DrawingPanel {
    constructor() {
      this.picker = document.querySelector(".color-picker");
      this.widthRange = document.querySelector(".line-range");
      this.widthLabel = document.querySelector(".range-value");
    }
  
    addPanelListeners = (colorCallback, widthCallback) => {
      this.picker.addEventListener("change", (e) => {
        colorCallback(e.target.value); console.log(e.target.value);
      } );
  
      this.widthRange.addEventListener("input", (e) => {
        const width = e.target.value; console.log(width);
        this.widthLabel.innerHTML = `${width}px`;
        widthCallback(width); 
      } );
    }
  }
  
  const drawingPanel = new DrawingPanel();