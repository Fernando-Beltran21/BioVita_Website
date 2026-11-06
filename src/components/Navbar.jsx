import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/40 bg-[#FFFDF9]/70 px-5 py-3 backdrop-blur-xl">
        <a href="#top" className="font-display text-xl font-extrabold text-[#1B4332]">{BRAND.name}</a>
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map(l => (
            <li key={l.href}><a href={l.href} className="text-sm text-[#1A1A1A]/80 hover:text-[#FF5E6C]">{l.label}</a></li>
          ))}
        </ul>
        <a href="#ingredientes" className="hidden rounded-full bg-[#FF5E6C] px-5 py-2 text-sm font-semibold text-white md:block">Conoce BioVita</a>
        <button className="md:hidden" aria-label="Menú" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl bg-[#FFFDF9]/90 p-6 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-lg">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
