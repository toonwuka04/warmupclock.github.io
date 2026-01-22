// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
  
  let hr = hour();
  let min = minute();
  let sec = second();
  background(20, 20, 30);
  
  let hourAngle = map(hr % 12, 0, 12, 0, TWO_PI) - HALF_PI;
  let minAngle = map(min, 0, 60, 0, TWO_PI) - HALF_PI;
  let secAngle = map(sec, 0, 60, 0, TWO_PI) - HALF_PI;
  
  let hourX = map(cos(hourAngle), -1, 1, 50, 750);
  let minX = map(cos(minAngle), -1, 1, 50, 750);
  let secX = map(cos(secAngle), -1, 1, 50, 750);

  // colors
  let redd = color(255, 50, 50)
  let orangee = color(255, 165, 0)
  let yelloww = color(255, 255, 0) 
  
  drawNumberLine(hr % 12, 12, 150, redd, hourX);
  drawNumberLine(min, 60, 300, orangee, minX);
  drawNumberLine(sec, 60, 450, yelloww, secX);
  


}

function drawNumberLine(current, maxTicks, yPos, circleColor){
            let lineLength = 700;
            let xStart = 50;
            let tickSpacing = lineLength / (maxTicks - 1);

            // horizontal lines of length 700
            push();
            stroke(255);
            strokeWeight(3);
            line(xStart, yPos, xStart + lineLength, yPos);
            pop();


            for (let i = 0; i < maxTicks; i++) {
                let x = xStart + i * tickSpacing;

                // vertical lines on number line 
                push();
                stroke(255);
                strokeWeight(2);
                line(x, yPos - 10, x, yPos + 10);
                pop();

                // circles
                if (i <= current) {
                    push();
                    noStroke();
                    
                    let circleSize = 10;
                    
                    fill(circleColor);
                    circle(x, yPos, circleSize);
                    pop();
                }
            }

}