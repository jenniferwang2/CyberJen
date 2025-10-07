document.addEventListener("DOMContentLoaded", () => {
  const posts = [
    {
      title: "Huntress CTF (In Progress)",
      desc: "Currently working on Huntress CTF! Write-up coming soon."
    },
    {
      title: "TryHackMe: Intro to Cybersecurity",
      desc: "Walkthrough and notes from the TryHackMe beginner CTF room."
    },
    {
      title: "HackTheBox: Starting Point",
      desc: "Step-by-step solutions for HackTheBox Starting Point challenges."
    }
    // Add more posts as you complete them!
  ];

  const container = document.querySelector('.posts-list');
  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <div class="post-title">${post.title}</div>
      <div class="post-desc">${post.desc}</div>
    `;
    container.appendChild(card);
  });
});