import { ArrowDown } from 'lucide-react'
import { BRAND } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] to-[#F4EFE6] px-6 pt-28">
      {/* Fondo: manchas de color (animar con Framer Motion) */}
      <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#FF8A80]/40 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-[#1A1A1A] md:text-7xl">
            {BRAND.tagline}
          </h1>
          <p className="mt-6 max-w-md text-lg text-[#1A1A1A]/70">
            Bebida probiótica de guayaba hecha con lactosuero de queserías locales. Refrescante, accesible y buena para el planeta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#que-es" className="rounded-full bg-[#FF5E6C] px-7 py-3 font-semibold text-white">Descubre cómo se hace</a>
            <a href="#ingredientes" className="rounded-full border border-[#1B4332] px-7 py-3 font-semibold text-[#1B4332]">Ver ingredientes</a>
          </div>
        </div>
        {/* Envase: reemplazar por <Canvas> de react-three-fiber o imagen con parallax */}
        <div className="relative mx-auto flex h-[420px] w-64 items-center justify-center rounded-[3rem] bg-gradient-to-b from-[#FF8A80] to-[#FF5E6C] shadow-2xl">
          <span className="font-display text-3xl font-extrabold text-white [writing-mode:vertical-rl]">BioVita · Guayaba · 350 ml</span>
        </div>
      </div>
      <a href="#que-es" aria-label="Bajar" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#1B4332]"><ArrowDown /></a>
    </section>
  )
}
