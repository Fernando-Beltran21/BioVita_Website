import { BRAND, NAV_LINKS, FOOTER_LINKS } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] px-6 pb-10 pt-20 text-[#FFFDF9]">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-6xl font-extrabold md:text-9xl">{BRAND.name}</p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="email" className="font-semibold">Recibe novedades y nuevos sabores</label>
            <div className="mt-3 flex gap-2">
              <input id="email" type="email" required placeholder="tu@correo.com" className="w-full rounded-full px-4 py-2 text-[#1A1A1A]" />
              <button className="rounded-full bg-[#FF5E6C] px-5 font-semibold">Suscribirme</button>
            </div>
          </form>
          <ul>{NAV_LINKS.map(l => <li key={l.href}><a href={l.href} className="hover:text-[#FF8A80]">{l.label}</a></li>)}</ul>
          <ul>{FOOTER_LINKS.map(l => <li key={l.label}><a href={l.href} className="hover:text-[#FF8A80]">{l.label}</a></li>)}</ul>
        </div>
        <p className="mt-12 text-sm text-white/60">© 2026 BioVita · Proyecto UAA, Aguascalientes, México.</p>
      </div>
    </footer>
  )
}
