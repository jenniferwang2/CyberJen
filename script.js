const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 150, size: 20, vy: 0, jump: -7, gravity: 0.4, onGround: true };
let obstacle = { x: 600, y: 160, w: 20, h: 20, speed: 4 };
let score = 0;
let gameOver = false;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ffee";
  ctx.fillRect(player.x, player.y, player.size, player.size);
  ctx.fillStyle = "#ff66cc";
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`Score: ${score}`, 10, 20);
  if (gameOver) {
    ctx.fillStyle = "#ff5555";
    ctx.font = "20px Share Tech Mono";
    ctx.fillText("Game Over — Refresh to retry", 150, 100);
  }
}

function update() {
  if (gameOver) return;

  player.vy += player.gravity;
  player.y += player.vy;
  if (player.y >= 150) {
    player.y = 150;
    player.vy = 0;
    player.onGround = true;
  }

  obstacle.x -= obstacle.speed;
  if (obstacle.x + obstacle.w < 0) {
    obstacle.x = 600;
    score++;
  }

  // collision
  if (
    player.x < obstacle.x + obstacle.w &&
    player.x + player.size > obstacle.x &&
    player.y + player.size > obstacle.y
  ) {
    gameOver = true;
  }

  draw();
  requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && player.onGround && !gameOver) {
    player.vy = player.jump;
    player.onGround = false;
  }
});

ctx.font = "16px Share Tech Mono";
update();
