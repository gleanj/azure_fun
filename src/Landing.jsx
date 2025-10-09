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
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Nicholas Gleason</h1>
            <p className="subtitle">Security Engineer & Cloud Security Specialist</p>
            <p className="tagline">Protecting infrastructure, one system at a time 🛡️</p>
            <div className="cta-buttons">
              <Link to="/terminal" className="btn btn-primary">🖥️ Try Terminal Resume</Link>
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
              <h3>Incident Response</h3>
              <p>Expert in threat detection, forensic analysis, and rapid incident mitigation across enterprise environments.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">☁️</div>
              <h3>Cloud Security</h3>
              <p>Building secure Azure infrastructure with automated compliance checking and vulnerability management.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🌐</div>
              <h3>Network Engineering</h3>
              <p>Designing and implementing secure network architectures with intrusion detection systems.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📧</div>
              <h3>Email Security</h3>
              <p>Implementing advanced email protection and conducting security awareness training programs.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛡️</div>
              <h3>EDR Deployment</h3>
              <p>Deploying and managing endpoint detection and response solutions across diverse environments.</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Automation</h3>
              <p>Creating CI/CD pipelines for automated vulnerability scanning and security remediation.</p>
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
                <h3>Security Engineer</h3>
                <div className="date">Resultant | May 2023 - Present</div>
                <ul>
                  <li>Built secure cloud infrastructure on Azure for enterprise customers</li>
                  <li>Led incident response and threat mitigation efforts</li>
                  <li>Automated vulnerability scanning with CI/CD pipelines</li>
                  <li>Conducted security assessments and penetration testing</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Network Engineer</h3>
                <div className="date">Resultant | Dec 2022 - May 2023</div>
                <ul>
                  <li>Led City of Fort Wayne's transition to Meraki infrastructure</li>
                  <li>Managed network security implementations</li>
                  <li>Optimized network performance and reliability</li>
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
              <h3>🔒 Azure Security Infrastructure</h3>
              <p>Automated cloud security monitoring and compliance checking system for Azure environments.</p>
              <div className="project-tags">
                <span className="tag">Azure</span>
                <span className="tag">Python</span>
                <span className="tag">Security</span>
              </div>
              <a href="https://github.com/gleanj" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
            </div>
            <div className="project-card">
              <h3>🛡️ Incident Response Toolkit</h3>
              <p>Custom tools for forensic analysis and threat hunting in enterprise environments.</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Forensics</span>
                <span className="tag">Automation</span>
              </div>
              <a href="https://github.com/gleanj" className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
            </div>
            <div className="project-card">
              <h3>💻 Interactive Terminal Resume</h3>
              <p>A fully functional terminal-based resume built with React, featuring games and achievements.</p>
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
            <p>I'm always interested in hearing about new opportunities, projects, or just chatting about cybersecurity.</p>
            <a href="mailto:gleason_secops@outlook.com" className="btn btn-primary">📧 Send Me an Email</a>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/nicholas-gleason" className="social-link" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://github.com/gleanj" className="social-link" target="_blank" rel="noopener noreferrer">gh</a>
              <a href="mailto:gleason_secops@outlook.com" className="social-link">✉</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <p>&copy; 2025 Nicholas Gleason. Built with passion for security.</p>
        </div>
      </footer>
    </div>
  );
}