'use client'
import { useEffect, useRef } from 'react'
import { ExternalLink, Github, Music, Shield, MapPin, Bot } from 'lucide-react'

const PROJECTS = [
  {
    featured: true,
    icon: <Bot size={22} />,
    title: 'Agentic Phishing Classifier',
    subtitle: 'ML Research · SFSU',
    description:
      'Architected an agentic AI pipeline combining RAG-based retrieval with tool-augmented reasoning using Claude and LangChain. The system autonomously extracts features across 100K+ URL datasets, achieving a 10–15% classification accuracy improvement over baselines.',
    tags: ['Python', 'LangChain', 'Claude', 'RAG', 'Scikit-Learn', 'Feature Engineering'],
    metrics: [
      { val: '10–15%', label: 'accuracy lift' },
      { val: '100K+', label: 'URL records' },
    ],
    links: [],
  },
  {
    featured: true,
    icon: <Music size={22} />,
    title: 'Text-Tune AI',
    subtitle: 'Text-to-Music Generation',
    description:
      'Built a generative text-to-music system leveraging Meta\'s MusicGen autoregressive transformer. Designed a zero-shot prompting strategy that uses GPT-3.5 and Gemini to extract musical attributes before generation, boosting prompt-to-output coherence by 22% over baseline. Evaluated with FAD and Signal-to-Noise Ratio metrics.',
    tags: ['Python', 'MusicGen', 'GPT-3.5', 'Gemini', 'Transformers', 'NLP'],
    metrics: [
      { val: '22%', label: 'coherence improvement' },
      { val: 'FAD + SNR', label: 'evaluation metrics' },
    ],
    github: 'https://github.com/vaishnavisrinath/text-tune-ai',
    links: [{ label: 'GitHub', href: 'https://github.com/vaishnavisrinath/text-tune-ai', Icon: Github }],
  },
  {
    featured: false,
    icon: <Shield size={22} />,
    title: 'Phishing URL Detector',
    subtitle: 'Published · IJIRCCE June 2022',
    description:
      'Designed an ensemble ML framework combining Gradient Boosting, AdaBoost, and Random Forest to detect phishing URLs with 97.3% accuracy, including zero-day attack mitigation. Paired with a full-stack HTML/CSS/JS front end for live URL analysis.',
    tags: ['Python', 'Gradient Boosting', 'AdaBoost', 'Random Forest', 'HTML/CSS/JS'],
    metrics: [
      { val: '97.3%', label: 'detection accuracy' },
      { val: 'Published', label: 'IJIRCCE 2022' },
    ],
    links: [],
  },
  {
    featured: false,
    icon: <MapPin size={22} />,
    title: 'TriMet Route Insight',
    subtitle: 'Data Engineering · Portland',
    description:
      'Engineered scalable ETL pipelines processing 1M+ real-time transit records daily using Python, BeautifulSoup, and Pandas. Automated data flows with cron jobs and daemon services, reduced data inconsistencies by 35% via PostgreSQL cleaning, and visualized trip patterns using Mapbox and Folium.',
    tags: ['Python', 'PostgreSQL', 'BeautifulSoup', 'Pandas', 'GCS', 'Mapbox'],
    metrics: [
      { val: '1M+', label: 'records/day' },
      { val: '35%', label: 'fewer data errors' },
    ],
    github: 'https://github.com/vaishnavisrinath/Data-Engineering',
    links: [{ label: 'GitHub', href: 'https://github.com/vaishnavisrinath/Data-Engineering', Icon: Github }],
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.appear').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80)
          })
        }
      }),
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const featured = PROJECTS.filter(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      {/* Subtle divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-bright), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="appear section-label mb-3">featured work</div>
        <h2
          className="appear font-display mb-12"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700 }}
        >
          Things I've built
        </h2>

        {/* Featured 2-up */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <div
              key={p.title}
              className="appear card p-6 flex flex-col"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* Featured badge */}
              <div
                className="absolute top-0 right-0 px-3 py-1 text-xs font-mono rounded-bl-xl"
                style={{
                  background: 'var(--accent-dim)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  borderLeft: '1px solid rgba(0,212,160,0.2)',
                  borderBottom: '1px solid rgba(0,212,160,0.2)',
                }}
              >
                featured
              </div>

              {/* Icon */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(0,212,160,0.15)' }}
              >
                {p.icon}
              </div>

              <div className="mb-1">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em' }}>
                  {p.subtitle}
                </span>
              </div>
              <h3
                className="font-display mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}
              >
                {p.title}
              </h3>

              <p className="mb-4 flex-1" style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                {p.description}
              </p>

              {/* Metrics */}
              <div className="flex gap-4 mb-4">
                {p.metrics.map(m => (
                  <div key={m.label}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--accent)' }}>
                      {m.val}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              {/* Links */}
              {p.links && p.links.length > 0 && (
                <div className="flex gap-3 mt-auto">
                  {p.links.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map(p => (
            <div key={p.title} className="appear card p-6">
              <div className="flex items-start justify-between mb-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                >
                  {p.icon}
                </div>
                <div className="flex gap-2">
                  {p.links?.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="transition-colors duration-200"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                {p.subtitle}
              </div>
              <h3 className="mb-2" style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                {p.title}
              </h3>
              <p className="mb-3" style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.65 }}>
                {p.description}
              </p>

              <div className="flex gap-4 mb-3">
                {p.metrics.map(m => (
                  <div key={m.label}>
                    <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '15px' }}>{m.val} </span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
