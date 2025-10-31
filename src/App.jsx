import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  const [lines, setLines] = useState([
    { type: 'ascii', content: `
███╗   ██╗██╗ ██████╗██╗  ██╗
████╗  ██║██║██╔════╝██║ ██╔╝
██╔██╗ ██║██║██║     █████╔╝ 
██║╚██╗██║██║██║     ██╔═██╗ 
██║ ╚████║██║╚██████╗██║  ██╗
╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝` },
    { type: 'welcome', content: 'Welcome to Nick Gleason\'s Interactive Resume Terminal' },
    { type: 'welcome', content: 'Type "help" to see available commands or try discovering hidden ones...' },
    { type: 'output', content: '' }
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState('green');
  const [commandCount, setCommandCount] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [konamiSequence, setKonamiSequence] = useState([]);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [playSound, setPlaySound] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const lastKeyTime = useRef(Date.now());

  const themes = {
    green: { primary: '#4ade80', bg: '#000000', text: '#d1d5db' },
    amber: { primary: '#fbbf24', bg: '#1a0f00', text: '#ffd9a3' },
    blue: { primary: '#60a5fa', bg: '#000a1a', text: '#bfdbfe' },
    matrix: { primary: '#00ff00', bg: '#000000', text: '#00cc00' }
  };

  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const playBeep = () => {
    if (!playSound) return;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.1;
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.05);
  };

  const unlockAchievement = (name) => {
    if (!achievements.includes(name)) {
      setAchievements([...achievements, name]);
      return true;
    }
    return false;
  };

  function handleCommand() {
    const cmd = input.toLowerCase().trim();
    const now = Date.now();
    const timeDiff = now - lastKeyTime.current;
    if (input.length > 0) {
      setTypingSpeed(Math.round(60000 / (timeDiff / input.length)));
    }
    lastKeyTime.current = now;
    
    playBeep();
    setCommandCount(commandCount + 1);
    
    const nextLines = [...lines, { type: 'input', content: `$ ${input}` }];
    
    if (cmd) {
      setHistory([...history, cmd]);
      setHistoryIndex(-1);
    }

    // Check for achievement unlocks
    if (commandCount + 1 === 10 && unlockAchievement('explorer')) {
      nextLines.push({ type: 'achievement', content: '🏆 Achievement Unlocked: Explorer - Used 10 commands!' });
    }

    switch (cmd) {
      case 'help':
        nextLines.push({ type: 'output', content: 'Available Commands:' });
        nextLines.push({ type: 'output', content: '  help         - Show this help message' });
        nextLines.push({ type: 'output', content: '  about        - Learn about me' });
        nextLines.push({ type: 'output', content: '  skills       - View my technical skills' });
        nextLines.push({ type: 'output', content: '  tools        - Security tools I work with daily' });
        nextLines.push({ type: 'output', content: '  experience   - See my work experience' });
        nextLines.push({ type: 'output', content: '  education    - View education & certifications' });
        nextLines.push({ type: 'output', content: '  projects     - Check out my projects' });
        nextLines.push({ type: 'output', content: '  contact      - Get my contact information' });
        nextLines.push({ type: 'output', content: '  resume       - View full formatted resume' });
        nextLines.push({ type: 'output', content: '  download     - Download my resume PDF' });
        nextLines.push({ type: 'output', content: '  theme        - Change terminal theme' });
        nextLines.push({ type: 'output', content: '  stats        - View your session stats' });
        nextLines.push({ type: 'output', content: '  achievements - View unlocked achievements' });
        nextLines.push({ type: 'output', content: '  sound        - Toggle sound effects' });
        nextLines.push({ type: 'output', content: '  clear        - Clear the terminal' });
        nextLines.push({ type: 'hint', content: '' });
        nextLines.push({ type: 'hint', content: '💡 Hint: Try some classic Unix commands...' });
        break;

      case 'about':
        nextLines.push({ type: 'header', content: '=== ABOUT ME ===' });
        nextLines.push({ type: 'output', content: "Hello! I'm Nick Gleason, a Cybersecurity Engineer at Resultant." });
        nextLines.push({ type: 'output', content: "I have 3+ years of progressive experience in security operations," });
        nextLines.push({ type: 'output', content: "incident response, and security infrastructure architecture." });
        nextLines.push({ type: 'output', content: "" });
        nextLines.push({ type: 'output', content: "I architect enterprise security solutions and lead end-to-end" });
        nextLines.push({ type: 'output', content: "EDR/SIEM deployments for multiple clients with expertise in threat" });
        nextLines.push({ type: 'output', content: "detection, vulnerability management, and workflow automation." });
        nextLines.push({ type: 'output', content: "" });
        nextLines.push({ type: 'output', content: "Background includes network engineering roles with U.S. Cyber Command" });
        nextLines.push({ type: 'output', content: "and the Department of Defense, bringing classified network security" });
        nextLines.push({ type: 'output', content: "experience to commercial cybersecurity challenges." });
        break;

      case 'skills':
        nextLines.push({ type: 'header', content: '=== TECHNICAL SKILLS ===' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'Security Operations:' });
        nextLines.push({ type: 'output', content: '  • Incident Response & DFIR' });
        nextLines.push({ type: 'output', content: '  • Threat Hunting & Detection' });
        nextLines.push({ type: 'output', content: '  • Security Awareness Training' });
        nextLines.push({ type: 'output', content: '  • Vulnerability Management' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'Infrastructure:' });
        nextLines.push({ type: 'output', content: '  • EDR/XDR Deployment & Management' });
        nextLines.push({ type: 'output', content: '  • SIEM Administration' });
        nextLines.push({ type: 'output', content: '  • Network Security Compliance' });
        nextLines.push({ type: 'output', content: '  • Email Security Solutions' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'Automation & Engineering:' });
        nextLines.push({ type: 'output', content: '  • Security Automation & Orchestration' });
        nextLines.push({ type: 'output', content: '  • Network Engineering & Architecture' });
        nextLines.push({ type: 'output', content: '  • Client-Facing Consulting' });
        nextLines.push({ type: 'hint', content: '' });
        nextLines.push({ type: 'hint', content: '💡 Try "tools" to see the security platforms I use!' });
        break;

      case 'tools':
        nextLines.push({ type: 'header', content: '=== SECURITY TOOLS & PLATFORMS ===' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'Endpoint Detection & Response (EDR/XDR):' });
        nextLines.push({ type: 'output', content: '  • SentinelOne        • CrowdStrike Falcon' });
        nextLines.push({ type: 'output', content: '  • Trend Micro        • Microsoft Defender for Endpoint' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'SIEM & Threat Detection:' });
        nextLines.push({ type: 'output', content: '  • Rapid7 InsightIDR  • ConnectWise SIEM' });
        nextLines.push({ type: 'output', content: '  • Splunk             • Varonis' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'Email & Endpoint Security:' });
        nextLines.push({ type: 'output', content: '  • Proofpoint         • Barracuda Email Gateway' });
        nextLines.push({ type: 'output', content: '  • Microsoft Defender for Email' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'Vulnerability Management:' });
        nextLines.push({ type: 'output', content: '  • Rapid7 InsightVM   • ConnectSecure' });
        nextLines.push({ type: 'output', content: '  • Nessus             • Nexpose' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'Network Security:' });
        nextLines.push({ type: 'output', content: '  • Palo Alto Firewalls • Checkpoint' });
        nextLines.push({ type: 'output', content: '  • Cisco ASA/Meraki    • pfSense' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'Cloud Security:' });
        nextLines.push({ type: 'output', content: '  • Microsoft Azure Security' });
        nextLines.push({ type: 'output', content: '  • Amazon Web Services (AWS) Security' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: 'Automation & Scripting:' });
        nextLines.push({ type: 'output', content: '  • Rewst              • Python' });
        nextLines.push({ type: 'output', content: '  • PowerShell         • Bash' });
        if (unlockAchievement('toolmaster')) {
          nextLines.push({ type: 'achievement', content: '🏆 Achievement Unlocked: Tool Master - Explored the security toolkit!' });
        }
        break;

      case 'experience':
        nextLines.push({ type: 'header', content: '=== WORK EXPERIENCE ===' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'job-title', content: 'Cyber Security Engineer — Resultant' });
        nextLines.push({ type: 'date', content: 'June 2023 - Present' });
        nextLines.push({ type: 'output', content: '  • Architect end-to-end security stack onboarding for enterprise clients' });
        nextLines.push({ type: 'output', content: '  • Lead incident response for ransomware, account takeovers, firewall breaches' });
        nextLines.push({ type: 'output', content: '  • Engineer automated threat detection in Rapid7 and ConnectWise SIEM' });
        nextLines.push({ type: 'output', content: '  • Manage security awareness programs using KnowBe4' });
        nextLines.push({ type: 'output', content: '  • Consult on vulnerability management with Rapid7 and ConnectSecure' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'job-title', content: 'Network Engineer — Resultant' });
        nextLines.push({ type: 'date', content: 'December 2022 - June 2023' });
        nextLines.push({ type: 'output', content: '  • Engineered large-scale network modernization to Meraki stack' });
        nextLines.push({ type: 'output', content: '  • Configured Checkpoint firewall infrastructure across multi-site environments' });
        nextLines.push({ type: 'output', content: '  • Tier 3 escalation for complex Layer 2/Layer 3 network issues' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'job-title', content: 'Network Engineer — U.S. Cyber Command (Active Duty)' });
        nextLines.push({ type: 'date', content: 'September 2021 - December 2022' });
        nextLines.push({ type: 'output', content: '  • Architected next-gen firewalls protecting classified networks' });
        nextLines.push({ type: 'output', content: '  • Maintained defense-in-depth architecture for classified data' });
        nextLines.push({ type: 'output', content: '  • Optimized SOC threat monitoring and reduced false positives' });
        nextLines.push({ type: 'output', content: '  • Developed SOPs for Network Operations Center' });
        nextLines.push({ type: 'output', content: '  • Trained and mentored Tier 1/2 personnel' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'job-title', content: 'Network Engineer — Department of Defense' });
        nextLines.push({ type: 'date', content: 'July 2019 - September 2021' });
        nextLines.push({ type: 'output', content: '  • Led network preparation for CISA security audits' });
        nextLines.push({ type: 'output', content: '  • Managed enterprise IAVM compliance program' });
        nextLines.push({ type: 'output', content: '  • Deployed Cisco DNA-C with ISE for zero-trust access control' });
        nextLines.push({ type: 'output', content: '  • Implemented 802.1x network access control' });
        nextLines.push({ type: 'output', content: '  • Directed hardware lifecycle modernization project' });
        break;

      case 'education':
        nextLines.push({ type: 'header', content: '=== CERTIFICATIONS ===' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'success', content: '  ✓ GIAC Certified Penetration Tester (GPEN)' });
        nextLines.push({ type: 'date', content: '    SANS Institute | Expires August 2028' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'success', content: '  ⏳ GIAC Certified Forensic Analyst (GCFA)' });
        nextLines.push({ type: 'date', content: '    SANS Institute | In Progress' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'header', content: '=== MILITARY SERVICE ===' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'job-title', content: 'U.S. Army National Guard' });
        nextLines.push({ type: 'date', content: '2014 - 2024' });
        break;

      case 'projects':
        nextLines.push({ type: 'header', content: '=== PROJECTS ===' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'job-title', content: '🔍 Threat Intel Dashboard' });
        nextLines.push({ type: 'output', content: '  Threat intelligence gathering and visualization platform' });
        nextLines.push({ type: 'link', content: '  GitHub: https://github.com/gleanj/threat-intel-dashboard' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'job-title', content: '⚾ DingersBot' });
        nextLines.push({ type: 'output', content: '  Automated Twitter bot using MLB Stats API for home run notifications' });
        nextLines.push({ type: 'link', content: '  GitHub: https://github.com/gleanj/dingersbot' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'job-title', content: '💻 This Resume Terminal!' });
        nextLines.push({ type: 'output', content: '  Interactive terminal-based resume built with React' });
        nextLines.push({ type: 'link', content: '  GitHub: https://github.com/gleanj/resume-terminal' });
        if (unlockAchievement('curious')) {
          nextLines.push({ type: 'achievement', content: '🏆 Achievement Unlocked: Curious - Checked out projects!' });
        }
        break;

      case 'contact':
        nextLines.push({ type: 'header', content: '=== CONTACT INFORMATION ===' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: '📧 Email:    gleason_secops@outlook.com' });
        nextLines.push({ type: 'link', content: '🔗 LinkedIn: https://www.linkedin.com/in/nicholas-gleason' });
        nextLines.push({ type: 'link', content: '💻 GitHub:   https://github.com/gleanj' });
        break;

      case 'resume':
        nextLines.push({ type: 'output', content: '📄 Opening full formatted resume...' });
        nextLines.push({ type: 'hint', content: '' });
        nextLines.push({ type: 'hint', content: '💡 Tip: Click "📄 Full Resume" in the top-right corner or visit /resume' });
        nextLines.push({ type: 'hint', content: '    to view the complete formatted resume with download option.' });
        // Navigate to resume page
        setTimeout(() => {
          window.location.href = '/resume';
        }, 1000);
        break;

      case 'download':
        nextLines.push({ type: 'output', content: '📄 Generating PDF resume...' });
        nextLines.push({ type: 'success', content: '✓ Resume download started!' });
        nextLines.push({ type: 'hint', content: '(In a real implementation, this would download a PDF)' });
        if (unlockAchievement('interested')) {
          nextLines.push({ type: 'achievement', content: '🏆 Achievement Unlocked: Interested - Downloaded resume!' });
        }
        break;

      case 'theme':
        const themeNames = Object.keys(themes);
        const currentIndex = themeNames.indexOf(theme);
        const nextTheme = themeNames[(currentIndex + 1) % themeNames.length];
        setTheme(nextTheme);
        nextLines.push({ type: 'success', content: `✓ Theme changed to: ${nextTheme}` });
        break;

      case 'stats':
        nextLines.push({ type: 'header', content: '=== SESSION STATISTICS ===' });
        nextLines.push({ type: 'output', content: '' });
        nextLines.push({ type: 'output', content: `Commands executed: ${commandCount + 1}` });
        nextLines.push({ type: 'output', content: `Average typing speed: ${typingSpeed} WPM` });
        nextLines.push({ type: 'output', content: `Achievements unlocked: ${achievements.length}/5` });
        nextLines.push({ type: 'output', content: `Current theme: ${theme}` });
        break;

      case 'achievements':
        nextLines.push({ type: 'header', content: '=== ACHIEVEMENTS ===' });
        nextLines.push({ type: 'output', content: '' });
        const allAchievements = [
          { id: 'explorer', name: '🏆 Explorer', desc: 'Used 10 commands' },
          { id: 'curious', name: '🏆 Curious', desc: 'Viewed projects' },
          { id: 'toolmaster', name: '🏆 Tool Master', desc: 'Explored security tools' },
          { id: 'interested', name: '🏆 Interested', desc: 'Downloaded resume' },
          { id: 'hacker', name: '🏆 Hacker', desc: 'Found hidden command' }
        ];
        allAchievements.forEach(ach => {
          const unlocked = achievements.includes(ach.id);
          nextLines.push({
            type: unlocked ? 'success' : 'output',
            content: `${unlocked ? '✓' : '✗'} ${ach.name} - ${ach.desc}`
          });
        });
        break;

      case 'sound':
        setPlaySound(!playSound);
        nextLines.push({ type: 'success', content: `✓ Sound effects ${!playSound ? 'enabled' : 'disabled'}` });
        break;

      // Easter eggs and hidden commands
      case 'whoami':
        nextLines.push({ type: 'output', content: 'nick-gleason' });
        if (unlockAchievement('hacker')) {
          nextLines.push({ type: 'achievement', content: '🏆 Achievement Unlocked: Hacker - Found hidden command!' });
        }
        break;

      case 'pwd':
        nextLines.push({ type: 'output', content: '/home/nick-gleason/resume' });
        break;

      case 'ls':
        nextLines.push({ type: 'output', content: 'about.txt  skills.txt  tools.txt  experience.txt  education.txt  contact.txt' });
        break;

      case 'sudo':
        nextLines.push({ type: 'error', content: 'Nice try! 😄 You don\'t have root access here.' });
        break;

      case 'hack':
        nextLines.push({ type: 'success', content: 'Hacking mainframe...' });
        nextLines.push({ type: 'success', content: 'Access granted! Just kidding. 😎' });
        break;

      case 'matrix':
        setTheme('matrix');
        nextLines.push({ type: 'success', content: 'Welcome to the Matrix...' });
        break;

      case 'exit':
      case 'quit':
        nextLines.push({ type: 'output', content: 'Thanks for visiting! To truly exit, close this tab. 👋' });
        break;

      case 'clear':
        setLines([
          { type: 'ascii', content: `
███╗   ██╗██╗ ██████╗██╗  ██╗
████╗  ██║██║██╔════╝██║ ██╔╝
██╔██╗ ██║██║██║     █████╔╝ 
██║╚██╗██║██║██║     ██╔═██╗ 
██║ ╚████║██║╚██████╗██║  ██╗
╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝` },
          { type: 'welcome', content: 'Welcome to Nick Gleason\'s Interactive Resume Terminal' },
          { type: 'welcome', content: 'Type "help" to see available commands or try discovering hidden ones...' },
          { type: 'output', content: '' }
        ]);
        setInput('');
        return;

      default:
        if (cmd) {
          nextLines.push({ type: 'error', content: `Command not found: "${cmd}"` });
          nextLines.push({ type: 'error', content: 'Type "help" for a list of available commands.' });
        }
        break;
    }
    
    setLines(nextLines);
    setInput('');
  }

  function handleKeyDown(e) {
    // Konami code detection
    const newSequence = [...konamiSequence, e.key].slice(-10);
    setKonamiSequence(newSequence);
    
    if (JSON.stringify(newSequence) === JSON.stringify(konami)) {
      const nextLines = [...lines];
      nextLines.push({ type: 'achievement', content: '🎮 KONAMI CODE ACTIVATED! 🎮' });
      nextLines.push({ type: 'success', content: 'You are a true gamer! 🕹️' });
      setLines(nextLines);
      setKonamiSequence([]);
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'about', 'skills', 'tools', 'experience', 'education', 'projects', 'contact', 'download', 'theme', 'stats', 'achievements', 'clear'];
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  }

  const getLineColor = (type) => {
    const currentTheme = themes[theme];
    switch (type) {
      case 'input': return `text-[${currentTheme.primary}]`;
      case 'error': return 'text-red-400';
      case 'success': return 'text-green-400';
      case 'header': return 'text-cyan-400 font-bold';
      case 'job-title': return 'text-yellow-400 font-semibold';
      case 'date': return 'text-gray-500 italic';
      case 'welcome': return 'text-purple-400';
      case 'hint': return 'text-gray-500 italic';
      case 'achievement': return 'text-yellow-300 font-bold';
      case 'link': return 'text-blue-400 underline cursor-pointer hover:text-blue-300';
      case 'ascii': return 'text-cyan-300 text-xs leading-tight';
      default: return 'text-gray-300';
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen p-3 sm:p-5 relative"
      style={{ backgroundColor: themes[theme].bg }}
    >
      <div 
        className="w-full max-w-5xl h-screen sm:h-[92vh] rounded-none sm:rounded-xl border-0 sm:border flex flex-col overflow-hidden shadow-2xl"
        style={{ 
          backgroundColor: themes[theme].bg,
          borderColor: themes[theme].primary + '40'
        }}
      >
        <div 
          className="px-4 sm:px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b flex items-center justify-between"
          style={{ borderColor: themes[theme].primary + '40' }}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-300 text-sm sm:text-base font-semibold ml-2">
              resume@nick-gleason ~ {theme} theme
            </span>
          </div>
          <div className="flex gap-4">
            <Link to="/" className="text-gray-400 hover:text-green-400 text-sm font-medium transition-colors">
              ← Back to Home
            </Link>
            <Link to="/resume" className="text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors">
              📄 Full Resume
            </Link>
          </div>
        </div>

        <div
          ref={terminalRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-sm sm:text-base leading-relaxed"
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className={`mb-1 whitespace-pre-wrap break-words ${getLineColor(line.type)}`}
              style={line.type === 'input' || line.type === 'success' ? { color: themes[theme].primary } : {}}
            >
              {line.content}
            </div>
          ))}
        </div>

        <div 
          className="px-4 sm:px-6 py-4 border-t flex items-center gap-2"
          style={{ 
            backgroundColor: themes[theme].bg,
            borderColor: themes[theme].primary + '40'
          }}
        >
          <span 
            className="text-sm sm:text-base font-mono font-bold"
            style={{ color: themes[theme].primary }}
          >$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm sm:text-base placeholder-gray-600"
            style={{ color: themes[theme].text }}
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck="false"
            autoCapitalize="off"
            autoCorrect="off"
          />
        </div>
      </div>
    </div>
  );
}