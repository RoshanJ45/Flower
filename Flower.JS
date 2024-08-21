function setup() {
            createCanvas(500, 500);
            angleMode(DEGREES);
            noLoop();
        }
        function draw() {
            translate(width / 2, height / 2);
            for (let i = 0; i < 12; i++) {
                fill("rgba(0, 0, 0, 0.2)");
                ellipse(0, 0, 60, 320);
                rotate(15);
            }
            for (let i = 0; i < 500; i++) {
                let r = i * 0.2;
                let a = i * 137.5;
                let x = r * cos(a);
                let y = r * sin(a);
                let alp = i / 2000;
                noStroke();
                fill("rgba(255, 190, 100, " + alp + ")");
                ellipse(x, y, 20, 20);
                noStroke();
                fill("rgb(255, 170, 100)");
                ellipse(x, y, 5, 5);
            }
        }