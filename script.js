document.addEventListener("DOMContentLoaded", () => {
  console.log("CyberJen online 🦾");

  const taglines = [
    "More writeups coming soon...",
  ];

  const taglineEls = document.querySelectorAll(".tagline");
  let index = 0;

  setInterval(() => {
    taglineEls.forEach(el => (el.textContent = taglines[index % taglines.length]));
    index++;
  }, 4000);
});
