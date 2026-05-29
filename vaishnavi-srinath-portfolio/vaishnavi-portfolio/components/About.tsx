'use client'
import { useEffect, useRef } from 'react'
import { Code2, Database, Brain, Cloud } from 'lucide-react'

const PILLARS = [
  {
    Icon: Code2,
    title: 'Production Engineering',
    desc: 'Full-stack systems shipped in regulated healthcare environments. Zero unplanned downtime. 95%+ SLA.',
  },
  {
    Icon: Brain,
    title: 'AI / ML Research',
    desc: 'Agentic pipelines with RAG + LLM tooling, ensemble classifiers, and generative audio models.',
  },
  {
    Icon: Database,
    title: 'Data at Scale',
    desc: 'ETL pipelines handling 1M+ records/day, BigQuery architectures, and end-to-end analytics platforms.',
  },
  {
    Icon: Cloud,
    title: 'Cloud Infrastructure',
    desc: 'AWS & GCP deployments, CI/CD with Jenkins & Docker, fault-tolerant production operations.',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.appear').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100)
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <div className="appear section-label mb-4">about</div>
            <h2
              className="appear font-display mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700 }}
            >
              Engineer at heart,
              <br />
              <span className="gradient-text">researcher by practice</span>
            </h2>
            <p className="appear mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              My path started at Philips — where I shipped a cloud-based remote monitoring platform
              for medical devices into production. In a regulated environment where failure has real
              consequences, I learned to hold my work to a high standard.
            </p>
            <p className="appear mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Today, as an ML Research Assistant at SFSU, I design agentic AI pipelines combining
              RAG-based retrieval and tool-augmented reasoning to classify phishing URLs across
              100K+ record datasets — improving accuracy by 10–15%.
            </p>
            <p className="appear leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              I hold an MS in Computer Science from Portland State University and have
              published research in IJIRCCE. I'm based in San Jose, CA and open to relocation.
            </p>

            <div className="appear mt-8 flex flex-wrap gap-3">
              {['San Jose, CA', 'Open to Relocation', 'MS CS — Portland State', 'Published Researcher'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="appear card p-5"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg mb-3"
                  style={{ background: 'var(--accent-dim)', border: '1px solid rgba(0,212,160,0.15)' }}
                >
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-medium mb-2" style={{ color: 'var(--text-primary)', fontSize: '15px' }}>
                  {title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
