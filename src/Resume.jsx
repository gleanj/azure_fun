import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

export default function Resume() {
  const handleDownload = () => {
    // For now, we'll use window.print() which allows saving as PDF
    // In a production environment, you could generate a PDF on the backend
    window.print();
  };

  return (
    <div className="resume-container">
      {/* Navigation Bar - Hidden when printing */}
      <nav className="resume-nav no-print">
        <div className="nav-content">
          <Link to="/" className="nav-link">← Back to Home</Link>
          <button onClick={handleDownload} className="download-btn">
            📄 Download PDF
          </button>
        </div>
      </nav>

      {/* Resume Content */}
      <div className="resume-content">
        <header className="resume-header">
          <h1>Nicholas Gleason</h1>
          <p className="resume-title">Cybersecurity Engineer</p>
          <div className="contact-info">
            <span>📧 gleason_secops@outlook.com</span>
            <span>🔗 linkedin.com/in/nicholas-gleason</span>
            <span>💻 github.com/gleanj</span>
            <span>📍 Fort Wayne, IN</span>
          </div>
        </header>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Cybersecurity Engineer with 3+ years of progressive experience in security operations, incident
            response, and security infrastructure architecture. Proven track record of architecting enterprise
            security solutions and leading end-to-end EDR/SIEM deployments for multiple clients. Deep expertise
            in threat detection, vulnerability management, and workflow automation across cloud and hybrid
            environments. Seeking to leverage advanced security engineering capabilities in EDR, SIEM, and cloud
            security to fortify digital assets and drive proactive defense strategies.
          </p>
        </section>

        <section className="resume-section">
          <h2>Core Competencies</h2>
          <div className="competencies-grid">
            <div className="competency-column">
              <ul>
                <li>Incident Response & Threat Detection</li>
                <li>EDR/XDR Security Architecture</li>
                <li>SIEM Deployment & Optimization</li>
                <li>Network Intrusion Analysis</li>
                <li>Vulnerability Assessment & Risk Management</li>
              </ul>
            </div>
            <div className="competency-column">
              <ul>
                <li>Host-Based Forensics</li>
                <li>Security Automation & Orchestration</li>
                <li>Cloud Security (Azure, AWS)</li>
                <li>Threat Hunting</li>
                <li>Security Consulting & Client Advisory</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Professional Experience</h2>

          <div className="job-entry">
            <div className="job-header">
              <div>
                <h3>Cyber Security Engineer</h3>
                <p className="company">Resultant</p>
              </div>
              <p className="job-dates">June 2023 - Present</p>
            </div>
            <ul className="job-responsibilities">
              <li>
                Architected and deployed end-to-end security stack onboarding solutions for enterprise clients,
                including EDR (SentinelOne, CrowdStrike), email security (Proofpoint, Barracuda), and SIEM platforms
              </li>
              <li>
                Led incident response operations for high-impact security events including ransomware attacks,
                account takeovers, and firewall breaches, developing standardized response playbooks to improve
                resolution times
              </li>
              <li>
                Engineered automated threat detection workflows in Rapid7 and ConnectWise SIEM, analyzing daily
                security alerts and optimizing correlation rules to reduce false positives
              </li>
              <li>
                Managed enterprise security awareness programs using KnowBe4 for multiple clients, deploying
                phishing simulations and security training campaigns to improve organizational security posture
              </li>
              <li>
                Consulted with clients on vulnerability management programs, analyzing Rapid7 and ConnectSecure
                scan results to prioritize remediation of critical and high-severity vulnerabilities
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <div className="job-header">
              <div>
                <h3>Network Engineer</h3>
                <p className="company">Resultant</p>
              </div>
              <p className="job-dates">December 2022 - June 2023</p>
            </div>
            <ul className="job-responsibilities">
              <li>
                Engineered and executed large-scale network infrastructure modernization project, migrating
                enterprise clients from legacy Cisco hardware to full Meraki stack including switches, firewalls,
                and access points
              </li>
              <li>
                Configured and maintained Checkpoint firewall infrastructure across multi-site environments,
                implementing access control policies to improve security posture while maintaining high network uptime
              </li>
              <li>
                Served as Tier 3 escalation point for help desk, resolving complex Layer 2/Layer 3 network
                connectivity issues and developing troubleshooting documentation to improve team efficiency
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <div className="job-header">
              <div>
                <h3>Network Engineer</h3>
                <p className="company">U.S. Cyber Command (Active Duty)</p>
              </div>
              <p className="job-dates">September 2021 - December 2022</p>
            </div>
            <ul className="job-responsibilities">
              <li>
                Architected, configured, and deployed next-generation firewall infrastructure protecting
                classified networks, maintaining security compliance during DISA Security Technical
                Implementation Guide (STIG) audits
              </li>
              <li>
                Hardened and maintained defense-in-depth network architecture for classified data environments,
                implementing security controls to prevent unauthorized access across multiple network segments
              </li>
              <li>
                Collaborated with Security Operations Center (SOC) to optimize threat monitoring coverage,
                reducing false positive alerts through correlation rule tuning and traffic analysis
              </li>
              <li>
                Developed and implemented Standard Operating Procedures (SOPs) for Network Operations Center
                (NOC), improving incident response processes and establishing operational efficiency metrics
              </li>
              <li>
                Trained and mentored Tier 1 and Tier 2 personnel on network architecture, security
                configurations, and troubleshooting best practices
              </li>
              <li>
                Completed 80 hours of formal Juniper Networks security training, achieving certification
                in JUNOS security platform administration and advanced threat prevention
              </li>
            </ul>
          </div>

          <div className="job-entry">
            <div className="job-header">
              <div>
                <h3>Network Engineer</h3>
                <p className="company">Department of Defense</p>
              </div>
              <p className="job-dates">July 2019 - September 2021</p>
            </div>
            <ul className="job-responsibilities">
              <li>
                Led network infrastructure preparation and remediation for CISA security audits, working
                directly with auditors to address findings and achieve compliance across multiple sites
              </li>
              <li>
                Managed enterprise-wide Information Assurance Vulnerability Management (IAVM) compliance
                program, patching and updating network devices to maintain security standards and meet
                DoD security requirements
              </li>
              <li>
                Architected and deployed Cisco DNA-C software-defined networking solution, integrating
                with Cisco ISE and Wireless Controllers to enhance network visibility, automation, and
                zero-trust access control
              </li>
              <li>
                Spearheaded implementation of 802.1x network access control across enterprise environment,
                securing endpoints and reducing unauthorized access attempts while maintaining user satisfaction
              </li>
              <li>
                Directed hardware lifecycle modernization project, configuring and deploying Cisco Catalyst
                9200/9300 series switches across hub-and-spoke network infrastructure
              </li>
              <li>
                Served as Tier 3 escalation engineer for all network incidents and outages, maintaining
                high network uptime and developing advanced troubleshooting methodologies
              </li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Certifications</h2>
          <div className="certifications">
            <div className="cert-item">
              <h4>GIAC Certified Penetration Tester (GPEN)</h4>
              <p>SANS Institute | Expires August 2028</p>
            </div>
            <div className="cert-item">
              <h4>GIAC Certified Forensic Analyst (GCFA)</h4>
              <p>SANS Institute | In Progress</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Military Service</h2>
          <div className="job-entry" style={{ borderBottom: 'none', paddingBottom: '0', marginBottom: '0' }}>
            <div className="job-header">
              <div>
                <h3>U.S. Army National Guard</h3>
              </div>
              <p className="job-dates">2014 - 2024</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>

          <div className="skills-section">
            <div className="skill-category">
              <h4>Security Platforms (EDR/XDR):</h4>
              <p>SentinelOne, CrowdStrike Falcon, Microsoft Defender for Endpoint, Trend Micro</p>
            </div>

            <div className="skill-category">
              <h4>SIEM & Threat Detection:</h4>
              <p>Rapid7 InsightIDR, ConnectWise SIEM, Splunk, Varonis</p>
            </div>

            <div className="skill-category">
              <h4>Email & Endpoint Security:</h4>
              <p>Barracuda Email Gateway, Proofpoint, Microsoft Defender for Email, KnowBe4 Security Awareness</p>
            </div>

            <div className="skill-category">
              <h4>Vulnerability Management:</h4>
              <p>Rapid7 InsightVM, Nexpose, ConnectSecure, Nessus, IAVM Compliance</p>
            </div>

            <div className="skill-category">
              <h4>Network Security:</h4>
              <p>Palo Alto Firewalls, Checkpoint, Cisco ASA, Meraki, pfSense, IDS/IPS (Snort, Suricata)</p>
            </div>

            <div className="skill-category">
              <h4>Cloud Security:</h4>
              <p>Microsoft Azure Security, Amazon Web Services (AWS) Security, Cloud Security Posture Management (CSPM)</p>
            </div>

            <div className="skill-category">
              <h4>Automation & Scripting:</h4>
              <p>Rewst, Python, PowerShell, Bash, Jinja Templating</p>
            </div>

            <div className="skill-category">
              <h4>IT & Network Infrastructure:</h4>
              <p>Liongard, RMM Platforms, ConnectWise Suite, Cisco DNA-C, Cisco ISE, Cisco CUCM, 802.1x</p>
            </div>

            <div className="skill-category">
              <h4>Frameworks & Compliance:</h4>
              <p>NIST Cybersecurity Framework, MITRE ATT&CK, DISA STIG, DoD Security Controls, Zero Trust Architecture</p>
            </div>

            <div className="skill-category">
              <h4>Core Competencies:</h4>
              <p>Incident Response, Threat Detection & Analysis, Network Intrusion Analysis, Host-Based Forensics, Security Architecture, Vulnerability Assessment, Risk Management, Security Consulting</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
