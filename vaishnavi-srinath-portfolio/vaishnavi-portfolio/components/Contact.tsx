'use client'
import { useEffect, useRef } from 'react'
import { Mail, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react'

const CONTACT_ITEMS = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'vaishnavis.mys@gmail.com',
    href: 'mailto:vaishnavis.mys@gmail.com',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vaishnavisrinath',
    href: 'https://www.linkedin.com/in/vaishnavisrinath/',
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: 'github.com/vaishnavisrinath',
    href: 'https://github.com/vaishnavisrinath',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'San Jose, CA · Open to Relocation',
    href: null,
  },
]

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border-bright), transparent)' }}
      />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,160,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="appear section-label mb-4">contact</div>
        <h2
          className="appear font-display mb-6"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1 }}
        >
          Let's build something
          <br />
          <span className="gradient-text">that matters</span>
        </h2>

        <p
          className="appear mb-10 mx-auto max-w-xl"
          style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}
        >
          I'm actively looking for roles in Software Engineering, AI/ML Engineering, and Data Analytics.
          If you're working on something ambitious — let's talk.
        </p>

        {/* Contact grid */}
        <div className="appear grid sm:grid-cols-2 gap-4 mb-10 text-left">
          {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
            <div key={label} className="card p-4 flex items-center gap-4">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
              >
                <Icon size={18} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px' }}>
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors duration-200 hover:underline"
                    style={{ color: 'var(--text-primary)', fontSize: '14px' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    {value}
                    <ExternalLink size={11} style={{ opacity: 0.5 }} />
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-primary)', fontSize: '14px' }}>{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="appear flex flex-wrap justify-center gap-4">
          <a
            href="mailto:vaishnavis.mys@gmail.com"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: 'var(--accent)',
              color: '#0a0c0f',
              boxShadow: '0 0 30px var(--accent-glow)',
            }}
          >
            Send me an email →
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnavisrinath/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              background: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        className="mt-20 pt-6 text-center"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
          Vaishnavi Srinath · San Jose, CA · Built with Next.js & Tailwind
        </p>
      </div>
    </section>
  )
}
