import { MARQUEE } from '../data/content'

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <section aria-label="Atributos" className="overflow-hidden bg-[#1B4332] py-4 text-[#FFFDF9]">
      {/* Animación: keyframes translateX(-50%) en CSS o Framer Motion */}
      <div className="flex w-max gap-12 whitespace-nowrap font-display text-xl font-bold">
        {items.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </section>
  )
}
