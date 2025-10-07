document.addEventListener("DOMContentLoaded", () => {
  console.log("CyberJen online 🦾");

  const taglines = [
    "Welcome to my CTF & cybersecurity portfolio.",
    "More writeups coming soon...",
    "meow.",
  ];

  const taglineEls = document.querySelectorAll(".tagline");
  let index = 0;

  setInterval(() => {
    taglineEls.forEach(el => (el.textContent = taglines[index % taglines.length]));
    index++;
  }, 4000);
});
