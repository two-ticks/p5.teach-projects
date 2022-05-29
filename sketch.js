// function setup() {
//   createCanvas(640, 400);
//   background("black");
//   colorPalette("red-yellow-blue");
//   coordinateMode("midRight");

//   let equation1 = createTeX(
//     "\\begin{array}{l | c c c}s^5 & 1 & 1 & 1 \\\\ s^4 &3 & 1 & 2 \\\\[5pt] s^3 & &  &   & \\\\[5pt] s^2 & \\hspace{5em} & \\hspace{5em}  &  & \\\\[5pt]s^1 &\\hspace{5em} & \\hspace{5em} & \\hspace{5em}  &\\\\[10pt]s^0 &  & \\hspace{5em} & \\hspace{5em}  \\end{array}"
//   );
//   equation1.position(45, 15);
//   equation1.size(30);
//   equation1.stroke(safeColor.MAGENTA50);
//   equation1.strokeWidth(10);
//   equation1.fill(safeColor.MAGENTA50);
//   //equation.add();
//   equation1.play("createFill", 1, 5);

//   callAt(6, () => {
//     equation1.update(
//       "\\begin{array}{l | c c c}s^5 &\\textcolor{#5b4db7}{1} & \\textcolor{#42adc7}{1} & \\textcolor{#81d152}{1} \\\\ s^4 &\\textcolor{gold}{3} & \\textcolor{#ff9d4f}{1} & \\textcolor{#ff5347}{2} \\\\[5pt] s^3 & &  &   & \\\\[5pt] s^2 & \\hspace{5em} & \\hspace{5em}  &  & \\\\[5pt]s^1 &\\hspace{5em} & \\hspace{5em} & \\hspace{5em}  &\\\\[10pt]s^0 &  & \\hspace{5em} & \\hspace{5em}  \\end{array}"
//     );
//   });

//   let equation2 = createTeX(
//     "\\frac{3 \\times 1 - 1 \\times 1}{3} \\hspace{2em} \\frac{3 \\times 1 - 2 \\times 1}{3}\\hspace{4.95em} \\Large{0}"
//   );
//   equation2.position(125, 125);
//   equation2.size(0.707 * 30);
//   equation2.stroke(safeColor.MAGENTA50);
//   equation2.strokeWidth(10);
//   equation2.fill(safeColor.MAGENTA50);
//   //equation2.add();
//   equation2.play("write", 6, 9);

//   callAt(9, () => {
//     equation2.update(
//       "\\frac{\\textcolor{gold}{3} \\times \\textcolor{#42adc7}{1} - \\textcolor{#5b4db7}{1} \\times \\textcolor{#ff9d4f}{1}}{\\textcolor{gold}{3}} \\hspace{2em} \\frac{\\textcolor{gold}{3}\\times \\textcolor{#81d152}{1}  - \\textcolor{#ff5347}{2}  \\times \\textcolor{#5b4db7}{1} }{\\textcolor{gold}{3}}\\hspace{4.95em} \\Large{0}"
//     );
//   });

//   let equation3 = createTeX(
//     "\\frac{\\frac{2}{3} \\times 1 - \\frac{1}{3} \\times 3}{\\frac{2}{3}} \\hspace{1.5em} \\frac{\\frac{2}{3} \\times 2 - 0 \\times 3}{\\frac{2}{3}} \\hspace{4.85em} \\Large{0}"
//   );
//   equation3.position(120, 175);
//   equation3.size(0.707 * 30);
//   equation3.stroke(safeColor.MAGENTA50);
//   equation3.strokeWidth(10);
//   equation3.fill(safeColor.MAGENTA50);
//   //equation3.add();
//   equation3.play("createFill", 9, 11);

//   callAt(13.5, () => {
//     equation1.update(
//       "\\begin{array}{l | c c c}s^5 &1 & 1 & 1 \\\\ s^4 &\\textcolor{gold}{3} & \\textcolor{#ff9d4f}{1} & \\textcolor{#ff5347}{2} \\\\[5pt] s^3 &\\textcolor{#5b4db7}{\\frac{2}{3}} & \\textcolor{#42adc7}{\\frac{1}{3}} & \\textcolor{#81d152}{0} \\\\[5pt] s^2 & \\hspace{5em} & \\hspace{5em}  &  & \\\\[5pt]s^1 &\\hspace{5em} & \\hspace{5em} & \\hspace{5em}  &\\\\[10pt]s^0 &  & \\hspace{5em} & \\hspace{5em}  \\end{array}"
//     );
//     equation2.remove()
//     equation3.update(
//       "\\frac{\\textcolor{gold}{3} \\times \\textcolor{#42adc7}{1} - \\textcolor{#5b4db7}{1} \\times \\textcolor{#ff9d4f}{1}}{\\textcolor{gold}{3}} \\hspace{2em} \\frac{\\textcolor{gold}{3}\\times \\textcolor{#81d152}{1}  - \\textcolor{#ff5347}{2}  \\times 1}{3}\\hspace{4.95em} \\Large{0}"
//     );
//   });

//   let equation4 = createTeX(
//     "\\frac{-\\frac{1}{2} \\times \\frac{1}{3} - 2 \\times \\frac{2}{3}}{-\\frac{1}{2}} \\hspace{4em} \\Large{0} \\hspace{5.4em} \\Large{0}"
//   );
//   equation4.position(105, 245);
//   equation4.size(0.707 * 30);
//   equation4.stroke(safeColor.MAGENTA50);
//   equation4.strokeWidth(10);
//   equation4.fill(safeColor.MAGENTA50);
//   //equation4.add();
//   equation4.play("write", 13.5, 15);

//   callAt(18, () => {
//     equation1.update(
//       "\\begin{array}{l | c c c}s^5 &1 & 1 & 1 \\\\ s^4 &3 & 1 & 2 \\\\[5pt] s^3 &\\textcolor{#5b4db7}{\\frac{2}{3}} & \\textcolor{#42adc7}{\\frac{1}{3}} & \\textcolor{#81d152}{0} \\\\[5pt] s^2 & \\textcolor{gold}{-\\frac{1}{2}} & \\textcolor{#ff9d4f}{2} & \\textcolor{#ff5347}{0}  \\\\[5pt]s^1 &\\hspace{5em} & \\hspace{5em} & \\hspace{5em}  &\\\\[10pt]s^0 &  & \\hspace{5em} & \\hspace{5em}  \\end{array}"
//     );
//     equation3.remove()
//     equation4.update(
//       "\\frac{\\textcolor{gold}{-\\frac{1}{2}} \\times \\textcolor{#42adc7}{\\frac{1}{3}} - \\textcolor{#ff9d4f}{2} \\times \\textcolor{#5b4db7}{\\frac{2}{3}}}{\\textcolor{gold}{-\\frac{1}{2}}} \\hspace{4em} \\Large{0} \\hspace{5.4em} \\Large{0}"
//     );
//   });

//   let equation5 = createTeX("\\frac{3 \\times 2 -0 \\times -\\frac{1}{2}}{-\\frac{1}{2}}");
//   equation5.position(105, 325);
//   equation5.size(0.707 * 30);
//   equation5.stroke(safeColor.MAGENTA50);
//   equation5.strokeWidth(10);
//   equation5.fill(safeColor.MAGENTA50);
//   //equation5.add();
//   equation5.play("write", 22, 24);

//   callAt(32, () => {
//     equation1.update(
//       "\\boxed{\\begin{array}{l | c c c}s^5 &1 & 1 & 1 \\\\ s^4 &3 & 1 & 2 \\\\[5pt] s^3 &\\textcolor{#5b4db7}{\\frac{2}{3}} & \\textcolor{#42adc7}{\\frac{1}{3}} & \\textcolor{#81d152}{0} \\\\[5pt] s^2 & \\textcolor{gold}{-\\frac{1}{2}} & \\textcolor{#ff9d4f}{2} & \\textcolor{#ff5347}{0}  \\\\[5pt]s^1 &\\textcolor{#5b4db7}{3} & \\textcolor{#42adc7}{0} & \\textcolor{#81d152}{0} &\\\\[10pt]s^0 &\\textcolor{gold}{2} & \\textcolor{#ff9d4f}{0} & \\textcolor{#ff5347}{0}  \\end{array}}"
//     );
//     equation4.remove();
//     equation5.remove()
//   });
// }

function setup() {
  createCanvas(640, 360);
  background('white');
  colorPalette('red-yellow-blue');
  coordinateMode('midRight');
  // let graph = beginGraph(0, 0, width, height);
  // axis();
  // plot = plot2D((x) => cos(x));

  // // Original input
  // let x = createTeX('x');
  // x.fill(safeColor.MAGENTA50);
  // x.stroke(safeColor.MAGENTA50);
  // x.position(30, height / 2 - 18);
  // x.play();
  // stroke(safeColor.MAGENTA50);
  // let a1 = arrow(-270, 0, -230, 0);
  // a1.configure({ arrowSize: 5 });

  // // Function f
  // stroke(safeColor.ULTRAMARINE40);
  // rect(-220, -28, 50, 50);
  // let f = createTeX('f');
  // f.position(width / 4 - 45, height / 2 - 18);
  // f.fill(safeColor.ULTRAMARINE40);
  // f.stroke(safeColor.ULTRAMARINE40);
  // f.play();
  // let a2 = arrow(-165, 0, -125, 0);
  // a2.configure({
  //   arrowSize: 3,
  //   arrowHeadColor: safeColor.GOLD20
  // });
  // let fx = createTeX('f(x)');
  // fx.position(210, height / 2 - 18);
  // fx.fill(safeColor.ULTRAMARINE40);
  // fx.stroke(safeColor.ULTRAMARINE40);
  // fx.play();
  // let a3 = arrow(-50, 0, -10, 0);
  // a3.configure({
  //   arrowSize: 3,
  //   arrowHeadColor: safeColor.GOLD20
  // });

  // // Function g
  // stroke(safeColor.ORANGE40);
  // rect(5, -28, 50, 50);
  // let g = createTeX('g');
  // g.position(width / 2 + 22, height / 2 - 18);
  // g.fill(safeColor.ORANGE40);
  // g.stroke(safeColor.ORANGE40);
  // g.play();
  // let a4 = arrow(60, 0, 100, 0);
  // a4.configure({
  //   arrowSize: 3.5,
  //   arrowHeadColor: safeColor.ORANGE40
  // });
  // let gx = createTeX(`g \\textcolor{${safeColor.ORANGE40}}{(f(x))}`);
  // gx.position(435, height / 2 - 18);
  // gx.fill(safeColor.ORANGE40);
  // gx.stroke(safeColor.ORANGE40);
  // gx.play();
  // endGraph();

  //playing TeX

  // let equation = createTeX(
  //   'F(s) =\\int_0^\\infty f(t) e^{-st} dt '
  // );
  let equation = createTeX(
    '\\begin{array}{l | c c c}s^5 & 1 & 1 & 1 \\\\ s^4 &3 & 1 & 2 \\\\ s^3 &\\frac{3 \\times 1 - 1 \\times 1}{3}& \\frac{3 \\times 1 - 2 \\times 1}{3} & 0  & \\\\ s^2 &\\frac{\\frac{2}{3} \\times 1 - \\frac{1}{3} \\times 3}{\\frac{2}{3}} & \\frac{\\frac{2}{3} \\times 2 - 0 \\times 3}{\\frac{2}{3}} & 0 & \\\\s^1 &\\frac{-\\frac{1}{2} \\times \\frac{1}{3} - 2 \\times \\frac{2}{3}}{-\\frac{1}{2}} & 0 & 0  &\\\\s^0 & 0 & 0 & 0  \\end{array}'
  );
  equation.position(45, 105);
  equation.size(50);
  equation.stroke(safeColor.MAGENTA50);
  equation.strokeWidth(10);
  equation.fill(safeColor.MAGENTA50);
  //equation.add();
  //equation.play('createFill', 1, 5);
  //equation.play('growFromCenter', 1, 5);

  equation.play('write', 1, 5);
  // let equation1 = createTeX();
  // equation1.position(45, 105);
  // equation1.size(50);
  // equation1.stroke(safeColor.MAGENTA50);
  // equation1.strokeWidth(10);
  // equation1.fill(safeColor.MAGENTA50);

  // equation.overwrite(
  //   '\\begin{array}{l | c c c}s^5 &1 & 1 & 1 \\\\ s^4 &3 & 1 & 2 \\\\ s^3 &\\frac{3 \\times 1 - 1 \\times 1}{3}& \\frac{\\textcolor{blue}{3 \\times 1} - 2 \\times 1}{3} & 0  & \\\\ s^2 &\\frac{\\frac{2}{3} \\times 1 - \\frac{1}{3} \\times 3}{\\frac{2}{3}} & \\frac{\\frac{2}{3} \\times 2 - 0 \\times 3}{\\frac{2}{3}} & 0 & \\\\s^1 &\\frac{-\\frac{1}{2} \\times \\frac{1}{3} - 2 \\times \\frac{2}{3}}{-\\frac{1}{2}} & 0 & 0  &\\\\s^0 & 0 & 0 & 0  \\end{array}',
  //   1,
  //   10
  // );
  // callAt(5, () =>
  //   equation.update(
  //     '\\begin{array}{l | c c c}s^5 &1 & 1 & 1 \\\\ s^4 &3 & 1 & 2 \\\\ s^3 &\\frac{3 \\times 1 - 1 \\times 1}{3}& \\frac{\\textcolor{blue}{3 \\times 1} - 2 \\times 1}{3} & 0  & \\\\ s^2 &\\frac{\\frac{2}{3} \\times 1 - \\frac{1}{3} \\times 3}{\\frac{2}{3}} & \\frac{\\frac{2}{3} \\times 2 - 0 \\times 3}{\\frac{2}{3}} & 0 & \\\\s^1 &\\frac{-\\frac{1}{2} \\times \\frac{1}{3} - 2 \\times \\frac{2}{3}}{-\\frac{1}{2}} & 0 & 0  &\\\\s^0 & 0 & 0 & 0  \\end{array}'
  //   )
  // );

  let equation2 = createTeX('\\text{ where } s = \\sigma + i\\omega');
  equation2.position(75, 255);
  equation2.size(50);
  equation2.stroke(safeColor.MAGENTA50);
  equation2.strokeWidth(10);
  equation2.fill(safeColor.MAGENTA50);
  //equation2.add();
  //equation2.play('createFill', 6, 7);
}
