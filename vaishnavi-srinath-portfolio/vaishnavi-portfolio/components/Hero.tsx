'use client'
import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const ROLES = [
  'AI / ML Engineer',
  'Software Engineer',
  'Data Engineer',
  'Full-Stack Builder',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const current = ROLES[roleIdx]
    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          setDeleting(false)
          setRoleIdx((roleIdx + 1) % ROLES.length)
        }
      }
      setTick(t => t + 1)
    }, deleting ? 40 : 80)
    return () => clearTimeout(timer)
  }, [displayed, deleting, roleIdx, tick])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,212,160,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Animated grid nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'var(--accent)',
              top: `${15 + i * 13}%`,
              left: `${10 + i * 15}%`,
              opacity: 0.3 + (i % 3) * 0.2,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
          style={{
            background: 'var(--accent-dim)',
            border: '1px solid rgba(0,212,160,0.2)',
          }}
        >
          <span className="glow-dot w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
            open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display mb-3 leading-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          Vaishnavi
          <br />
          <span className="gradient-text">Srinath</span>
        </h1>

        {/* Typewriter role */}
        <div
          className="flex items-center gap-2 mb-6"
          style={{ height: '2.2rem' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              color: 'var(--text-secondary)',
              fontWeight: 400,
            }}
          >
            {displayed}
            <span
              className="inline-block w-0.5 h-5 ml-0.5 align-middle animate-blink"
              style={{ background: 'var(--accent)' }}
            />
          </span>
        </div>

        {/* Tagline */}
        <p
          className="max-w-2xl mb-10 leading-relaxed"
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            fontWeight: 300,
          }}
        >
          I build systems that{' '}
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>stay up under pressure</span>,
          {' '}pipelines that process millions of records daily, and ML models that{' '}
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>solve real problems</span>.
          {' '}From production healthcare platforms to agentic AI research — I ship work that matters.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 mb-10">
          {[
            { val: '80%', label: 'ops efficiency gained at Philips' },
            { val: '97.3%', label: 'phishing detection accuracy' },
            { val: '1M+', label: 'records/day in ETL pipelines' },
            { val: '0', label: 'unplanned downtime in prod' },
          ].map(s => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', maxWidth: '120px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'var(--accent)',
              color: '#0a0c0f',
              fontSize: '15px',
              fontWeight: 600,
              boxShadow: '0 0 30px var(--accent-glow)',
            }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200"
            style={{
              background: 'transparent',
              color: 'var(--text-secondary)',
              fontSize: '15px',
              border: '1px solid var(--border)',
            }}
          >
            Get in touch
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3 ml-2">
            {[
              { href: 'https://github.com/vaishnavisrinath', Icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/vaishnavisrinath/', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:vaishnavis.mys@gmail.com', Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.color = 'var(--accent)'
                  el.style.borderColor = 'var(--border-bright)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.color = 'var(--text-secondary)'
                  el.style.borderColor = 'var(--border)'
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            SCROLL
          </span>
          <ArrowDown size={14} style={{ color: 'var(--text-muted)', animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  )
}
