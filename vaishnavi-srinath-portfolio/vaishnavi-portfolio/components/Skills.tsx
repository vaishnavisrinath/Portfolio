'use client'
import { useEffect, useRef } from 'react'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    color: '#00d4a0',
    skills: ['Python', 'Java', 'R', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    label: 'AI / ML',
    color: '#7b6fff',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'Pandas', 'NumPy', 'LangChain', 'Prompt Engineering', 'Agentic AI', 'RAG', 'LLMs'],
  },
  {
    label: 'Backend & APIs',
    color: '#00a8d4',
    skills: ['Java Spring Boot', 'Flask', 'Django', 'RESTful APIs', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    label: 'Frontend',
    color: '#f7b731',
    skills: ['Angular', 'React', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    label: 'Cloud & DevOps',
    color: '#00d4a0',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'BigQuery', 'GCS'],
  },
  {
    label: 'Data & Analytics',
    color: '#00a8d4',
    skills: ['Power BI', 'Tableau', 'ETL Pipelines', 'Data Warehousing', 'Excel', 'Mapbox', 'Folium'],
  },
  {
    label: 'Engineering Practices',
    color: '#7b6fff',
    skills: ['Agile/Scrum', 'Git', 'Jira', 'Confluence', 'JUnit', 'Mockito', 'System Design', 'OOP'],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.appear').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 60)
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-bright), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="appear section-label mb-3">skills</div>
        <h2
          className="appear font-display mb-12"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700 }}
        >
          Tools of the trade
        </h2>

        <div className="space-y-6">
          {SKILL_GROUPS.map(group => (
            <div key={group.label} className="appear">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-5 rounded-full" style={{ background: group.color }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: group.color,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {group.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="skill-chip"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '5px 12px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.color = group.color
                      el.style.borderColor = group.color + '55'
                      el.style.background = group.color + '12'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.color = 'var(--text-secondary)'
                      el.style.borderColor = 'var(--border)'
                      el.style.background = 'var(--bg-card)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="appear section-label mb-6">certifications</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Programming for Everybody (Python) — Coursera',
              'Google Cloud — 30 Days Quest',
              'SQL Gold Level',
              'Deep Learning A-Z — Hands-On ANNs',
            ].map(cert => (
              <div
                key={cert}
                className="appear card p-4"
                style={{ borderLeft: '2px solid var(--accent-dim)' }}
              >
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
