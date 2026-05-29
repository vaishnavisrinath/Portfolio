'use client'
import { useEffect, useRef } from 'react'

const EXPERIENCES = [
  {
    company: 'San Francisco State University',
    role: 'ML Research Assistant',
    period: 'Sep 2025 – Present',
    location: 'San Francisco Bay Area',
    type: 'current',
    highlights: [
      'Architecting agentic AI pipelines with RAG-based retrieval and tool-augmented reasoning (Claude + LangChain) over 100K+ URL datasets.',
      'Improving phishing classification accuracy by 10–15% through feature engineering, experimental benchmarking, and algorithmic optimization.',
      'Maintaining dataset governance with strict versioning and audit practices across 100K+ records — compliance-conscious ML development.',
    ],
    tags: ['Python', 'LangChain', 'Claude', 'RAG', 'Scikit-Learn', 'Research'],
  },
  {
    company: 'Philips',
    role: 'Software Development Engineer',
    period: 'Jul 2022 – Sep 2023',
    location: 'Bengaluru, India',
    type: 'past',
    highlights: [
      'Shipped a cloud-based remote monitoring web application for medical devices — zero unplanned downtime, 80% improvement in operational efficiency, 95%+ SLA ticket resolution.',
      'Built optimized RESTful Java APIs and Angular UI supporting hierarchical device diagnostics; integrated C# desktop app via OOP and optimized PostgreSQL schemas.',
      'Deployed and managed AWS infrastructure for fault-tolerant, high-availability production systems in a mission-critical healthcare environment.',
      'Built CI/CD pipelines with Jenkins and Docker; resolved 80% of legacy defects, improving system stability by 70%.',
    ],
    tags: ['Java', 'Angular', 'AWS', 'PostgreSQL', 'Jenkins', 'Docker', 'C#', '.NET'],
  },
  {
    company: 'Philips',
    role: 'Software Development Engineer Intern',
    period: 'Jan 2022 – Jun 2022',
    location: 'Bengaluru, India',
    type: 'past',
    highlights: [
      'Improved diagnostic application performance by 50% through multi-threading optimizations in the legacy .NET framework codebase.',
      'Triaged and resolved high-priority user issues, maintaining service quality under production conditions.',
    ],
    tags: ['.NET', 'C#', 'Multi-threading'],
  },
  {
    company: 'IOLITE Technologies',
    role: 'Student Intern',
    period: 'Aug 2021 – Sep 2021',
    location: 'India',
    type: 'past',
    highlights: [
      'Contributed to early-career projects in software development, gaining exposure to production workflows and collaborative engineering practices.',
    ],
    tags: ['Software Development'],
  },
]

export default function Experience() {
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
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-bright), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="appear section-label mb-3">experience</div>
        <h2
          className="appear font-display mb-12"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700 }}
        >
          Where I've worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, var(--accent), var(--border), transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={`${exp.company}-${i}`} className="appear flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div
                    className="timeline-dot"
                    style={{
                      opacity: exp.type === 'current' ? 1 : 0.5,
                      boxShadow: exp.type === 'current' ? '0 0 12px var(--accent-glow)' : 'none',
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="card flex-1 p-6"
                  style={{
                    borderLeft: exp.type === 'current' ? '1px solid var(--border-bright)' : '1px solid var(--border)',
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h3>
                        {exp.type === 'current' && (
                          <span
                            className="flex items-center gap-1 px-2 py-0.5 rounded text-xs"
                            style={{
                              background: 'var(--accent-dim)',
                              color: 'var(--accent)',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '10px',
                            }}
                          >
                            <span className="glow-dot w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                            current
                          </span>
                        )}
                      </div>
                      <div style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '14px' }}>{exp.company}</div>
                    </div>
                    <div className="text-right">
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
                        {exp.period}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="mb-4 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                        <span style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }}>›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="appear section-label mb-6">education</div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                degree: 'Master of Science, Computer Science',
                school: 'Portland State University',
                period: '2023 – 2025',
                loc: 'Portland, OR',
              },
              {
                degree: 'Bachelor of Engineering, Computer Science',
                school: 'JSS Science and Technology University',
                period: '2018 – 2022',
                loc: 'Mysore, India',
              },
            ].map(e => (
              <div key={e.school} className="appear card p-5">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', marginBottom: '4px' }}>
                  {e.period} · {e.loc}
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '15px', marginBottom: '2px' }}>
                  {e.degree}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{e.school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
