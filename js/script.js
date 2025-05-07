function clearCanvas() {
  if (window.instance) {
    window.instance.remove(); 
  }
}

// Static Version Sketch
function loadStatic() {
  clearCanvas();
  const staticSketch = (p) => {
    p.setup = () => {
      p.createCanvas(600, 500);
      p.background(220);
      p.fill(0, 0, 200);
      p.ellipse(300, 300, 100, 100);
    };
  };
  window.instance = new p5(staticSketch, 'canvas-container');
}

// Animated Loop Sketch
function loadAnimated() {
  clearCanvas();
  const animatedSketch = (p) => {
    p.setup = () => {
      p.createCanvas(600, 500);
    };
    p.draw = () => {
      p.background(220);
      p.fill(p.lerpColor(p.color(255, 0, 0), p.color(0, 0, 255), Math.sin(p.frameCount * 0.05) * 0.5 + 0.5));
      p.ellipse(400 + Math.sin(p.frameCount * 0.05) * 100, 300, 100, 100);
    };
  };
  window.instance = new p5(animatedSketch, 'canvas-container');
}

// Interactive Version Sketch
function loadInteractive() {
  clearCanvas();
  const interactiveSketch = (p) => {
    p.setup = () => {
      p.createCanvas(600, 500);
    };
    p.draw = () => {
      p.background(220);
      p.fill(p.mouseIsPressed ? p.color(0, 10, 0) : p.color(200, 0, 0));
      p.ellipse(p.mouseX, p.mouseY, 100, 100);
    };
  };
  window.instance = new p5(interactiveSketch, 'canvas-container');
}
