const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const num_balls = 1;
const balls = [];

class Ball {
    constructor(x, y, radius, dx, dy, color, lifetime) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.elasticity = 0.2;
        this.isDeformed = false;
        this.lifetime = lifetime;
    }

    draw() {
        ctx.beginPath();
        if (this.isDeformed) {
            ctx.ellipse(this.x, this.y, this.radius, this.radius * 0.5, 0, 0, Math.PI * 2);
        } else {
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        }
        //ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        this.isDeformed = false;

        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
            this.dx = -this.dx;
            this.change_color();


            //this.parts_getting_off();
            //this.isDeformed = true;
        }

        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
            this.dy = -this.dy;
            this.change_color();

            //this.parts_getting_off();

            //this.isDeformed = true;
            //this.dy = -this.dy * this.elasticity; // Bounce with elasticity
        }

        
    }

    change_color() {
        this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    }

    parts_getting_off() {
        const numMiniBalls = 5;
        const miniBallRadius = this.radius / 3;
        const miniBallColor = this.color;
        
        for (let i = 0; i < numMiniBalls; i++) {
            const miniBall = new Ball(this.x, this.y, miniBallRadius, miniBallColor);
            miniBall.dy = -Math.random() * 10; // Randomize vertical speed
            balls.push(miniBall);
        }
    }
}

function createBalls(numBalls) {
    for (let i = 0; i < numBalls; i++) {
        const radius = 25;
        const x = Math.random() * (canvas.width - 2 * radius) + radius;
        const y = Math.random() * (canvas.height - 2 * radius) + radius;
        //const dx = (Math.random() - 0.5) * 5; // Random horizontal speed
        //const dy = (Math.random() - 0.5) * 5; // Random vertical speed
        const dx = 2;
        const dy = 2;
        const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;

        balls.push(new Ball(x, y, radius, dx, dy, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const ball of balls) {
        ball.update();
        ball.draw();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createBalls(num_balls);
    animate();
});