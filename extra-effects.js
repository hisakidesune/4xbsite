}

// === INTERACTIVE CONSOLE ===
function initConsole() {
  const console = document.getElementById('console');
  const input = document.getElementById('consoleInput');
  
  if (!console || !input) return;
  
  const commands = {
    'help': 'Available commands: help, whoami, ls, date, clear, hack, matrix, uptime, ping',
    'whoami': 'nova@mainframe - elite hacker extraordinaire',
    'ls': 'secret_files.txt  passwords.db  mainframe_access.exe  cool_projects/',
    'date': () => new Date().toString(),
    'uptime': () => `System uptime: ${Math.floor(performance.now() / 1000)} seconds`,
    'ping': 'PONG! Connection established to mainframe.',
    'clear': () => { 
      console.innerHTML = ''; 
      addToConsole('Terminal cleared. Type "help" for commands.'); 
      return ''; 
    },
    'hack': () => {
      addToConsole('Initiating hack sequence...');
      setTimeout(() => addToConsole('Scanning for vulnerabilities...'), 1000);
      setTimeout(() => addToConsole('Exploiting buffer overflow...'), 2000);
      setTimeout(() => addToConsole('ACCESS GRANTED! 🔓'), 3000);
      return '';
    },
    'matrix': () => {
      addToConsole('Wake up, Neo...');
      setTimeout(() => addToConsole('The Matrix has you...'), 1500);
      setTimeout(() => addToConsole('Follow the white rabbit. 🐰'), 2500);
      return '';
    },
  };
  
  function addToConsole(text, isCommand = false) {
    const line = document.createElement('div');
    line.className = isCommand ? 'command-line' : 'output-line';
    line.textContent = (isCommand ? '> ' : '') + text;
    console.appendChild(line);
    console.scrollTop = console.scrollHeight;
  }
  
  // Initial message
  addToConsole('Terminal initialized. Type "help" for commands.');
  addToConsole('System ready. Awaiting input...');
  
  // Handle input
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const command = this.value.trim().toLowerCase();
      
      if (command) {
        addToConsole(this.value, true);
        
        if (commands[command]) {
          const response = typeof commands[command] === 'function' ? 
            commands[command]() : commands[command];
          if (response) {
            setTimeout(() => addToConsole(response), 100);
          }
        } else {
          setTimeout(() => addToConsole(`Command not found: ${command}. Type "help" for available commands.`), 100);
        }
      }
      
      this.value = '';
    }
  });
  
  // Focus input when console is clicked
  console.addEventListener('click', () => input.focus());
}

// === RANDOM GLITCH EFFECTS ===
function addRandomGlitches() {
  if (!HackerConfig.enableRandomGlitches) return;
  
  const elements = document.querySelectorAll('h1, h2, h3, .site-title, .subheader');
  
  function randomGlitch() {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    if (!randomElement) return;
    
    // Add temporary glitch class
    randomElement.style.animation = 'glitch 0.3s ease-in-out';
    
    setTimeout(() => {
      randomElement.style.animation = '';
    }, 300);
  }
  
  // Random glitches
  setInterval(randomGlitch, HackerConfig.glitchInterval);
}

// === KONAMI CODE EASTER EGG ===
function initKonamiCode() {
  if (!HackerConfig.enableKonamiCode) return;
  
  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
  let userInput = [];
  
  document.addEventListener('keydown', function(e) {
    userInput.push(e.keyCode);
    userInput = userInput.slice(-konamiCode.length);
    
    if (userInput.join(',') === konamiCode.join(',')) {
      // Activate hacker mode
      document.body.classList.add('shake');
      
      // Create dramatic effect
      const originalBG = document.body.style.background;
      document.body.style.background = 'linear-gradient(45deg, #000, #001100, #000)';
      
      // Show message
      const message = document.createElement('div');
      message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #000;
        border: 3px solid #00ff66;
        color: #00ff66;
        padding: 20px;
        font-family: 'Courier New', monospace;
        font-size: 18px;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 0 50px rgba(0, 255, 102, 0.5);
      `;
      message.innerHTML = '🎮 KONAMI CODE ACTIVATED!<br>GENIUS MODE ENGAGED! 🎮<br><small>Press ESC to exit</small>';
      document.body.appendChild(message);
      
      // Exit on ESC
      function exitHackerMode(e) {
        if (e.key === 'Escape') {
          document.body.classList.remove('shake');
          document.body.style.background = originalBG;
          if (message.parentNode) {
            message.parentNode.removeChild(message);
          }
          document.removeEventListener('keydown', exitHackerMode);
        }
      }
      
      document.addEventListener('keydown', exitHackerMode);
      
      // Auto-exit after 10 seconds
      setTimeout(() => {
        document.body.classList.remove('shake');
        document.body.style.background = originalBG;
        if (message.parentNode) {
          message.parentNode.removeChild(message);
        }
      }, 10000);
    }
  });
}

// === CURSOR TRAIL EFFECT ===
function createCursorTrail() {
  if (!HackerConfig.enableCursorTrail) return;
  
  const trail = [];
  
  document.addEventListener('mousemove', function(e) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    
    document.body.appendChild(dot);
    trail.push(dot);
