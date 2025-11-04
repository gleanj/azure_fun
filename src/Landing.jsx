import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  useEffect(() => {
    // Generate particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particlesContainer.appendChild(particle);
      }
    }

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .timeline-item, .project-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      {/* Particle Background */}
      <div id="particles"></div>

      {/* Navigation */}
      <nav className="landing-nav">
        <div className="container">
          <Link to="/" className="logo">NG</Link>
          <ul className="nav-links">
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Nicholas Gleason</h1>
            <p className="subtitle">Cybersecurity Engineer | Incident Response Specialist</p>
            <p className="email-highlight">nick@nicksec.com</p>
            <p className="tagline">Protecting enterprise infrastructure with cutting-edge security solutions 🛡️</p>
            <div className="cta-buttons">
              <Link to="/terminal" className="btn btn-primary">🖥️ Try Terminal Resume</Link>
              <Link to="/resume" className="btn btn-secondary">📄 View Full Resume</Link>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-secondary">📧 Get In Touch</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Core Competencies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🔒</div>
              <h3>Incident Response & DFIR</h3>
              <p>Expert in threat detection, forensic analysis with Velociraptor, and rapid incident mitigation across enterprise environments.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛡️</div>
              <h3>EDR/XDR Management</h3>
              <p>Deploying and optimizing SentinelOne, CrowdStrike, Trend Micro, and Microsoft Defender for comprehensive endpoint protection.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔍</div>
              <h3>Threat Hunting</h3>
              <p>Proactive threat detection and security monitoring using ConnectWise SIEM and advanced analytics platforms.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎯</div>
              <h3>Vulnerability Management</h3>
              <p>Comprehensive scanning and remediation strategies using ConnectSecure and Rapid7 platforms.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📧</div>
              <h3>Email & Data Security</h3>
              <p>Implementing Barracuda email security and Varonis for data protection and insider threat detection.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Security Automation</h3>
              <p>Leveraging Rewst for security orchestration and ConnectWise RMM for automated incident response workflows.</p>
            </div>
          </div>

          {/* Security Tools Showcase */}
          <div style={{ marginTop: '4rem' }}>
            <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>Security Arsenal</h3>
            <div className="security-arsenal">
              {[
                'SentinelOne', 'CrowdStrike Falcon', 'Trend Micro', 'Microsoft Defender',
                'Rapid7 InsightIDR', 'ConnectWise SIEM', 'Splunk', 'Varonis',
                'Proofpoint', 'Barracuda', 'KnowBe4', 'Rapid7 InsightVM',
                'ConnectSecure', 'Palo Alto', 'Checkpoint', 'Rewst',
                'Python', 'PowerShell', 'Cisco DNA-C', 'Meraki'
              ].map((tool, index) => (
                <span
                  key={index}
                  className="tool-badge"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Cyber Security Engineer</h3>
                <div className="date">Resultant | June 2023 - Present</div>
                <ul>
                  <li>Architected and deployed end-to-end security stack onboarding solutions for enterprise clients, including EDR (SentinelOne, CrowdStrike), email security (Proofpoint, Barracuda), and SIEM platforms</li>
                  <li>Led incident response operations for high-impact security events including ransomware attacks, account takeovers, and firewall breaches, developing standardized response playbooks</li>
                  <li>Engineered automated threat detection workflows in Rapid7 and ConnectWise SIEM, analyzing daily security alerts and optimizing correlation rules to reduce false positives</li>
                  <li>Managed enterprise security awareness programs using KnowBe4, deploying phishing simulations and training campaigns</li>
                  <li>Consulted with clients on vulnerability management programs, analyzing Rapid7 and ConnectSecure scan results to prioritize remediation</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Network Engineer</h3>
                <div className="date">Resultant | December 2022 - June 2023</div>
                <ul>
                  <li>Engineered and executed large-scale network infrastructure modernization project, migrating enterprise clients from legacy Cisco hardware to full Meraki stack</li>
                  <li>Configured and maintained Checkpoint firewall infrastructure across multi-site environments</li>
                  <li>Served as Tier 3 escalation point for help desk, resolving complex Layer 2/Layer 3 network connectivity issues</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Network Engineer</h3>
                <div className="date">U.S. Cyber Command (Active Duty) | September 2021 - December 2022</div>
                <ul>
                  <li>Architected, configured, and deployed next-generation firewall infrastructure protecting classified networks, maintaining security compliance during DISA STIG audits</li>
                  <li>Hardened and maintained defense-in-depth network architecture for classified data environments</li>
                  <li>Collaborated with Security Operations Center to optimize threat monitoring coverage, reducing false positive alerts</li>
                  <li>Developed and implemented SOPs for Network Operations Center, improving incident response processes</li>
                  <li>Trained and mentored Tier 1 and Tier 2 personnel on network architecture and security configurations</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Network Engineer</h3>
                <div className="date">Department of Defense | July 2019 - September 2021</div>
                <ul>
                  <li>Led network infrastructure preparation and remediation for CISA security audits, working directly with auditors to achieve compliance</li>
                  <li>Managed enterprise-wide IAVM compliance program, patching and updating network devices to maintain security standards</li>
                  <li>Architected and deployed Cisco DNA-C software-defined networking solution, integrating with Cisco ISE and Wireless Controllers</li>
                  <li>Spearheaded implementation of 802.1x network access control across enterprise environment</li>
                  <li>Directed hardware lifecycle modernization project, deploying Cisco Catalyst 9200/9300 series switches</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>🔍 Threat Intel Dashboard</h3>
              <p>Comprehensive threat intelligence gathering and visualization platform that aggregates security feeds and displays actionable insights for proactive defense.</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Threat Intelligence</span>
                <span className="tag">Dashboard</span>
              </div>
              <a href="https://github.com/gleanj/threat-intel-dashboard" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
            </div>
            <div className="project-card">
              <h3>⚾ DingersBot</h3>
              <p>Automated Twitter bot that monitors MLB games using the MLB Stats API and tweets in real-time whenever a player hits a home run.</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">API Integration</span>
                <span className="tag">Automation</span>
              </div>
              <a href="https://github.com/gleanj/dingersbot" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
            </div>
            <div className="project-card">
              <h3>💻 Interactive Terminal Resume</h3>
              <p>A fully functional terminal-based resume built with React, featuring hidden commands, themes, and achievement system.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">CSS</span>
              </div>
              <Link to="/terminal" className="project-link">Try it live →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Let's Connect</h2>
            <p>I'm always interested in hearing about new opportunities, cybersecurity projects, or collaboration.</p>
            <a href="mailto:nick@nicksec.com" className="btn btn-primary">📧 Send Me an Email</a>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/nicholas-gleason" className="social-link" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://github.com/gleanj" className="social-link" target="_blank" rel="noopener noreferrer">gh</a>
              <a href="mailto:nick@nicksec.com" className="social-link">✉</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <p>&copy; 2024 Nicholas Gleason. Built with passion for cybersecurity.</p>
        </div>
      </footer>
    </div>
  );
}