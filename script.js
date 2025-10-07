document.addEventListener("DOMContentLoaded", () => {
  console.log("CyberJen online 🦾");

  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      window.location.href = href;
    });
  });
});
