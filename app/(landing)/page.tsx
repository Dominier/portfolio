import Image from "next/image";
import { ArrowDown, ArrowUpRight, Briefcase, Code2, Github, GraduationCap, Linkedin, Mail } from "lucide-react";

const experience = [
  { company: "Uber", logo: "uber.ico", role: "Software Engineering Intern", date: "2024 — 2026", detail: "Three summers in Core Services Engineering: Partner Identity (2024), Identity Services (2025), and Trusted Identity, SWE/ML (2026)." },
  { company: "Microsoft", logo: "microsoft.png", role: "Software Engineering Capstone", date: "Jan — Jun 2026", detail: "Led the design and development of a collaboration portal, taking the MVP from concept to production in five months." },
  { company: "UC Berkeley", logo: "berkeley.png", role: "Undergraduate Researcher", date: "Aug 2023 — May 2024", detail: "AI/ML research and development with ChatCHW." },
  { company: "Open Energy Dashboard", logo: "energy.png", role: "Software Engineering Intern", date: "Nov — Dec 2023", detail: "Open source contribution." },
  { company: "Refer Me", logo: "refer-me.png", role: "Software Engineering Intern", date: "May — Aug 2023", detail: "Software engineering internship." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero" id="about" aria-labelledby="intro-title">
        <div className="intro-label"><span className="status-dot" /> SOFTWARE ENGINEERING · UC IRVINE</div>
        <h1 id="intro-title">Hi, I’m Tim<span>.</span></h1>
        <p className="hero-description">I’m a software engineering student at <a href="https://uci.edu/">UC Irvine</a>, drawn to backend systems and the problems behind them. I build for the web, explore AI, and spend time behind a camera when I’m away from the keyboard.</p>
        <div className="hero-links">
          <a href="mailto:tleprojectcs@gmail.com" className="button primary">Email me <ArrowUpRight size={16} /></a>
          <a href="https://github.com/Dominier" aria-label="GitHub" target="_blank" rel="noreferrer" className="icon-link"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/timothy-le-cs/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="icon-link"><Linkedin size={20} /></a>
        </div>
      </section>

      <section id="projects" className="projects-section" aria-labelledby="projects-title">
        <div className="section-heading"><h2 id="projects-title">Selected work</h2><a href="https://github.com/Dominier" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={14} /></a></div>
        <div className="project-grid">
          <article className="project-card">
            <div className="project-art portal-art" aria-hidden="true"><div className="mini-window"><div className="window-bar"><i /><i /><i /><span>collaboration / workspace</span></div><div className="window-body"><div className="mini-sidebar"><b /><i /><i /><i /></div><div className="mini-content"><span className="mini-heading">A shared place to build.</span><div className="mini-lines"><i /><i /></div><div className="mini-panels"><div><span /><i /><i /></div><div><span /><i /><i /></div><div><span /><i /><i /></div></div></div></div></div></div>
            <div className="project-copy"><span className="eyebrow">MICROSOFT · CAPSTONE</span><h3>From concept to collaboration</h3><p>Led an end-to-end collaboration portal, delivering a production MVP in five months.</p><div className="tags"><span>Full-stack development</span><span>Product engineering</span></div></div>
          </article>
          <article className="project-card">
            <div className="project-art fraud-art" aria-hidden="true"><div className="fraud-grid" /><div className="fraud-panel"><span>LIVE TICKET EMBEDDINGS</span><strong>100k+</strong><small>per day</small></div><div className="fraud-stream"><i /><i /><i /><i /><i /></div><div className="fraud-search">similarity search <ArrowUpRight size={14} /></div></div>
            <div className="project-copy"><span className="eyebrow">UBER · CORE SERVICES</span><h3>Finding signals in live support data</h3><p>Built a fraud-detection pipeline that embeds live rider and earner support tickets for similarity search against past cases.</p><div className="tags"><span>Machine learning</span><span>Data pipelines</span></div></div>
          </article>
        </div>
      </section>

      <div className="details-grid">
        <section id="experience" aria-labelledby="experience-title"><div className="section-heading"><h2 id="experience-title"><Briefcase size={18} /> Experience</h2></div><div className="experience-list">{experience.map((item) => <article className="experience-row" key={item.company}><div className={`company-mark${item.logo === "refer-me.png" ? " refer-me-mark" : ""}`} aria-hidden="true"><Image src={`/companies/${item.logo}`} alt="" width={27} height={27} unoptimized /></div><div><div className="role-heading"><h3>{item.company}</h3><span>{item.date}</span></div><p className="role">{item.role}</p><p className="role-detail">{item.detail}</p></div></article>)}</div><a className="button resume-button" href="https://www.resume.lol/share/g703rle" target="_blank" rel="noreferrer">View full résumé <ArrowUpRight size={16} /></a></section>
        <aside className="sidebar">
          <section className="info-card" aria-labelledby="education-title"><h2 id="education-title"><GraduationCap size={19} /> Education</h2><div className="education-item"><span className="eyebrow">GRADUATING DEC 2026</span><h3>University of California, Irvine</h3><p>B.S. in Software Engineering</p></div><div className="education-item"><span className="eyebrow">2022 — 2024</span><h3>De Anza College</h3><p>A.S. in Computer Science<br />A.S. in Mathematics</p></div></section>
          <section className="info-card community"><h2><Code2 size={18} /> Beyond the classroom</h2><p>Previously President of the Google Developer Student Club (2023–2024). SHPE member since 2024.</p><p>Completed CodePath’s Advanced Technical Interview Prep and participated in the Computing Talent Initiative.</p></section>
          <div className="personal-note"><span className="note-mark">↳</span><p>When I’m not at my keyboard, you’ll probably find me studying at a local café or library.</p></div>
        </aside>
      </div>
      <section id="contact" className="contact-section"><div><h2>Let’s make a connection.</h2><p>Happy to talk about new opportunities!</p></div><a href="mailto:tleprojectcs@gmail.com" className="button primary"><Mail size={16} /> Say hello <ArrowUpRight size={16} /></a></section>
      <footer><p>© {new Date().getFullYear()} Timothy Le</p><a href="#about">Back to top <ArrowDown className="up-arrow" size={14} /></a></footer>
    </>
  );
}
