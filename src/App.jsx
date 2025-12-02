import { useMemo, useState } from 'react'
import './App.css'

const projectList = [
  {
    title: 'Smart City Dashboard',
    description:
      'Platform untuk memvisualisasikan data IoT perkotaan secara real-time dengan WebSocket dan WebGL.',
    stack: ['React', 'Three.js', 'WebSocket'],
    highlight: 'Optimisasi rendering membuat latency turun 38%.',
  },
  {
    title: 'Personal Finance Mentor',
    description:
      'Aplikasi PWA yang memanfaatkan AI untuk memberi insight pengelolaan keuangan harian.',
    stack: ['React', 'TensorFlow.js', 'IndexedDB'],
    highlight: 'Digunakan 2K+ pengguna dengan rating 4.9/5.',
  },
  {
    title: 'Culture Quest Microsite',
    description:
      'Website interaktif bertema perjalanan budaya dengan animasi scroll-linked yang halus.',
    stack: ['React', 'Framer Motion', 'Vite'],
    highlight: 'Meningkatkan durasi kunjungan campaign 3x lipat.',
  },
]

const skillGroups = [
  { title: 'Front-end', items: ['React', 'TypeScript', 'Vite', 'Tailwind'] },
  { title: 'Creative Tech', items: ['Framer Motion', 'Three.js', 'GSAP'] },
  { title: 'Product Mindset', items: ['Design System', 'UX Writing', 'Agile'] },
]

const socialLinks = [
  { label: 'LinkedIn', url: 'https://linkedin.com', tag: '@putri-dev' },
  { label: 'GitHub', url: 'https://github.com', tag: 'putri-labs' },
  { label: 'Email', url: 'mailto:hello@putri.dev', tag: 'hello@putri.dev' },
]

function Navbar() {
  return (
    <header className="navbar" aria-label="Navigasi utama">
      <span className="brand">Putri<span>Dev</span></span>
      <nav>
        <a href="#hero">Intro</a>
        <a href="#projects">Project</a>
        <a href="#skills">Skill</a>
        <a href="#contact">Kontak</a>
      </nav>
      <a className="cta-btn" href="#contact">
        Ajak Kolaborasi
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-intro">
        <p className="hero-pill">Frontend Developer • Creative Coder</p>
        <h1>
          Hai, aku Putri. <span>Membangun pengalaman web yang terasa hidup</span>{' '}
          lewat kombinasi desain dan teknologi.
        </h1>
        <p className="hero-copy">
          Fokusku adalah merancang antarmuka yang rapi, cepat, dan punya
          storytelling kuat sehingga brand terasa human-friendly.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="primary">
            Lihat Proyek
          </a>
          <a href="#contact" className="ghost">
            Jadwalkan Diskusi
          </a>
        </div>
      </div>

      <aside className="hero-profile">
        <div className="profile-photo" aria-label="Potret Putri" />
        <div className="hero-bio">
          <h3>Putri Ayu</h3>
          <p>Creative Frontend Engineer</p>
          <p>
            Mentranslasikan identitas brand ke antarmuka clean, modern, dan mudah
            dipahami—didukung kolaborasi erat dengan tim desain & produk.
          </p>
        </div>
      </aside>
    </section>
  )
}

function ProjectShowcase({ projects, selected, onSelect }) {
  return (
    <section id="projects" className="projects">
      <div>
        <p className="section-label">Project Pilihan</p>
        <h2>Eksperimen Web Interaktif</h2>
        <p className="section-copy">
          Setiap proyek menggabungkan storytelling, performa, dan aksesibilitas
          supaya impact bisnisnya lebih terasa.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`project-card ${
              selected.title === project.title ? 'active' : ''
            }`}
            onMouseEnter={() => onSelect(project)}
            onFocus={() => onSelect(project)}
            tabIndex={0}
          >
            <div className="card-header">
              <h3>{project.title}</h3>
              <span>{project.stack.join(' • ')}</span>
            </div>
            <p>{project.description}</p>
            <button type="button">Pelajari</button>
          </article>
        ))}
      </div>

      <div className="project-highlight">
        <p className="eyebrow">Highlight</p>
        <p>{selected.highlight}</p>
      </div>
    </section>
  )
}

function SkillSpotlight({ groups }) {
  return (
    <section id="skills" className="skills">
      <p className="section-label">Skillset</p>
      <h2>Teknologi favorit untuk eksplorasi ide</h2>
      <div className="skill-grid">
        {groups.map((group) => (
          <div key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div>
        <p className="section-label">Hubungi</p>
        <h2>Siap untuk menghidupkan ide berikutnya?</h2>
        <p>
          Ceritakan kebutuhan proyekmu, aku akan bantu terjemahkan ke
          pengalaman web yang engaging.
        </p>
      </div>
      <form className="contact-form">
        <label>
          Nama
          <input type="text" placeholder="Nama lengkap" />
        </label>
        <label>
          Email
          <input type="email" placeholder="email@contoh.com" />
        </label>
        <label>
          Cerita proyek
          <textarea rows={4} placeholder="Ceritakan tantanganmu..." />
        </label>
        <button type="submit">Kirim Pesan</button>
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Putri. Dibuat dengan rasa ingin tahu.</p>
      <div className="socials">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            <strong>{link.label}</strong>
            <span>{link.tag}</span>
          </a>
        ))}
      </div>
    </footer>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(projectList[0])

  const projects = useMemo(() => projectList, [])

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase
          projects={projects}
          selected={activeProject}
          onSelect={setActiveProject}
        />
        <SkillSpotlight groups={skillGroups} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

