'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: '01 about' },
  { href: '#projects', label: '02 projects' },
  { href: '#experience', label: '03 experience' },
  { href: '#skills', label: '04 skills' },
  { href: '#contact', label: '05 contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,12,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-widest uppercase"
          style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
        >
          VS<span style={{ color: 'var(--text-muted)' }}>_</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a
            href="mailto:vaishnavis.mys@gmail.com"
            className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            style={{
              background: 'var(--accent-dim)',
              color: 'var(--accent)',
              border: '1px solid rgba(0,212,160,0.25)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
            }}
          >
            hire me →
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          style={{ color: 'var(--text-secondary)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(10,12,15,0.98)', borderTop: '1px solid var(--border)' }}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
