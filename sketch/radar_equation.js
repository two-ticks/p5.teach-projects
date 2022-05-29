let time = 0;
function setup() {
  createCanvas(650, 550);
  overflow('hidden');
  background(50);
  writeTeX();
  createRadar();
 
}

function draw() {
  background(50, 80);

  time = time%500 + 1;
  
    radiate();
  
}

function writeTeX() {
  let equation = createTeX(
    "{\\displaystyle \\mathrm R_{max}=\\sqrt[4]{\\left [\\frac{P_tG^2 \\lambda^2 \\sigma}{\\left (4\\pi\\right )^2 S_{min}}\\right ]}}"
  );
  equation.position(50, 175);
  equation.size(48);
  equation.stroke(color('rgb(135, 206, 235)'));
  equation.fill(color('rgb(135, 206, 235)'));
  
  equation.play("createFill", 1.6, 5.5);
  
  let radarEquation = createText("Radar Range Equation")
  radarEquation.position(width/6, height/10);
  radarEquation.size(48);
  radarEquation.fill(color('rgb(235, 206, 235)'));
  
  radarEquation.play("waveIn", 0, 1.5);
  
  //radarEquation.moveTo(width/5, height/10, 4, 4.2)
  
  
  
}
function createRadar(){
  strokeWeight(2);
  stroke('skyBlue')
  beginGraph(15, 350, 175, 175);
  r = beginShape();
  vertex(4, -3);
  vertex(3, -2.73);
  vertex(3, 2.73);
  vertex(3, -2.73)
  vertex(2, -1.49);
  vertex(1, -1);
  vertex(1, 0)
  vertex(0, 0)
  vertex(0, -5)
  vertex(0,0)
  vertex(1, 0)
  vertex(1, 1);
  vertex(2, 1.49);
  vertex(3, 2.73);
  vertex(4, 3);
  endShape();
  r.play(200);
  endGraph();
 

}
function radiate(){
  stroke('green')
  noFill();
  arc(120+time/150, 435, 20+1500*time/180, 1000, -PI/3, PI/3);
  arc(1300-time/200, 435, 1500*time/300, 2000, PI/2, -PI/2);
  // arc(20+50*sin(time/270), 350, 110, 100, -PI/4, PI/4);
  // arc(25+50*sin(time/270), 350, 110, 100, -PI/4, PI/4);

}
