document.addEventListener("DOMContentLoaded", () => {
  console.log("CyberJen online 🦾");

  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      window.location.href = href;
    });
  });

  // Matrix code rain animation
  const canvas = document.getElementById('matrix-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
      ctx.fillStyle = 'rgba(17, 17, 17, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffcc';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  // Rain animation
  const rainContainer = document.querySelector('.rain .drops');
  if (rainContainer) {
    for (let i = 0; i < 150; i++) { // More drops
      const drop = document.createElement('div');
      drop.className = 'drop';
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.animationDuration = (1.5 + Math.random() * 1.5) + 's'; // Slower fall
      drop.style.animationDelay = (Math.random() * 3) + 's'; // More random delay
      rainContainer.appendChild(drop);
    }
  }
});
