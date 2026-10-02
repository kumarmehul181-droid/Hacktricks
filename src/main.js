const tricks = [
  { title: 'SQL Injection', category: 'Web', desc: 'Exploiting unsanitized database queries to access or modify data.' },
  { title: 'XSS (Cross-Site Scripting)', category: 'Web', desc: 'Injecting malicious scripts into web pages viewed by other users.' },
  { title: 'Privilege Escalation', category: 'Linux', desc: 'Gaining higher-level permissions than originally granted.' },
  { title: 'Pass the Hash', category: 'Windows', desc: 'Authenticating using NTLM hashes instead of plaintext passwords.' },
  { title: 'ARP Spoofing', category: 'Network', desc: 'Sending false ARP messages to link an attacker MAC to a legitimate IP.' },
  { title: 'Buffer Overflow', category: 'Binary', desc: 'Overwriting memory buffers to execute arbitrary code.' },
];

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <header>
      <h1>🔒 Hacktricks</h1>
      <p>A quick-reference collection of cybersecurity techniques and concepts.</p>
    </header>
    <main>
      <div class="tricks-grid">
        ${tricks
          .map(
            (t) => `
          <div class="card">
            <span class="badge">${t.category}</span>
            <h2>${t.title}</h2>
            <p>${t.desc}</p>
          </div>`,
          )
          .join('')}
      </div>
    </main>
    <footer>
      <p>Hacktricks — educational reference only. Always act ethically and within authorized scope.</p>
    </footer>
  `;
}

renderApp();
