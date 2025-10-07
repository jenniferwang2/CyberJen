document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Cisco Packet Tracer Network Simulation",
      tools: "Cisco Packet Tracer, VLAN, ACLs",
      desc: "Designed and simulated a multi-subnet campus network with VLAN segmentation, inter-VLAN routing, and access control lists. Created network diagrams and validation tests for connectivity and troubleshooting."
    },
    {
      title: "SIEM Stack Deployment",
      tools: "SIEM, Log Management, Detection Rules",
      desc: "Deployed a SIEM stack for centralized log ingestion, parsing, and visualization. Developed detection rules and dashboards for incident analysis."
    },
    {
      title: "Python Keylogger (Research Project)",
      tools: "Python, Malware Analysis",
      desc: "Built a Python-based keylogger in an isolated environment to study malware persistence and defensive monitoring. Documented ethical considerations and mitigation strategies."
    },
    {
      title: "Honeypot Deployment",
      tools: "Honeypot, SIEM Integration",
      desc: "Implemented a low-interaction honeypot to capture scanning and exploitation attempts. Integrated logs with SIEM to enrich detection and visibility of attack patterns."
    }
  ];

  const container = document.querySelector('.projects-list');
  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-title">${proj.title}</div>
      <div class="project-tools"><strong>Tools:</strong> ${proj.tools}</div>
      <div class="project-desc">${proj.desc}</div>
    `;
    container.appendChild(card);
  });
});