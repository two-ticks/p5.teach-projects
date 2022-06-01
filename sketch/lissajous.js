let A = 10;
let B = 10;
let f1 = 2;
let f2 = 2;
let d = -Math.PI;

function setup() {
  createCanvas(800, 400);
  //frameRate(5);
  background(0);
  //scene = new Scene();
  reel();
  createControls();
  addDuration(12000);
}

function draw() {
  d = -Math.PI + 0.0006 * clock(); //clock outputs the current time of progress bar or can say timeline
  //b += 0.0001
  if (d <= Math.PI) {
    curve1.update(
      (t) => A * Math.sin(f1 * t + d),
      (t) => B * Math.sin(f2 * t)
    );
    curve2.update((t) => A * Math.sin(f1 * t + d));
    equation.update(`\\phi = ${d.toFixed(2)}`);
    equation2.update(`x = \\sin(${f1} \\cdot t ${(d<0?"":"+")+d.toFixed(2)})`);
    //equation.update(`\\phi = ${d.toFixed(2)}`);

  }
}

function reel() {
  curve1 = create2DParametricGraph(
    (t) => A * Math.sin(f1 * t + d),
    (t) => B * Math.sin(f2 * t)
  );

  curve1.configure({
    scaleX: 5,
    maxX: 10,
    minX: -12,
    scaleY: 5,
    maxY: 10,
    minY: -10,
    stepX: 3,
    stepY: 3,
    tickX: "false",
    tickY: "false",
  });

  curve1.position(50, 50);
  curve1.axis();

  curve1.plot();

  equation = createTeX(`\\phi`);
  equation.stroke("white");
  equation.fill("white");
  equation.position(100, 105);
  equation.size(20);
  equation.add();

  curve2 = create2DGraph((t) => A * Math.sin(f1 * t + d));
  curve3 = create2DGraph((t) => A * Math.sin(f2 * t));

  equation2 = createTeX(`x = \\sin(${f1} \\cdot t  ${d.toFixed(2)})`);
  equation2.stroke("#2A4EE5");
  equation2.fill("#2A4EE5");
  equation2.position(460, 95);
  equation2.size(20);
  equation2.add();
  
  equation3 = createTeX(`y = \\sin(${f2} \\cdot t)`);
  equation3.stroke("#8CBF1C");
  equation3.fill("#8CBF1C");
  equation3.position(460, 115);
  equation3.size(20);
  equation3.add();

  curve2.configure({
    scaleX: 5,
    maxX: 10,
    minX: -12,
    scaleY: 5,
    maxY: 10,
    minY: -10,
    stepX: 3,
    stepY: 1,
    tickX: "false",
    tickY: "false",
    xAxis: "false",
    yAxis: "false"
  });

  curve3.configure({
    scaleX: 5,
    maxX: 10,
    minX: -12,
    scaleY: 5,
    maxY: 10,
    minY: -10,
    stepX: 3,
    stepY: 1,
    tickX: "false",
    tickY: "false",
  });

  curve2.stroke("#2A4EE5")
  curve2.position(450, 50);
  curve2.axis();

  curve2.plot();
  curve3.position(450, 50);
  curve3.stroke("#8CBF1C");
  //curve2.axis()

  curve3.plot();
}
