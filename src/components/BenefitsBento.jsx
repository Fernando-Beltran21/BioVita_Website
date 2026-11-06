import { BENEFITS } from '../data/content'

const SPAN = { lg: 'md:col-span-2 md:row-span-2', md: 'md:col-span-2', sm: '' }

export default function BenefitsBento() {
  return (
    <section id="beneficios" className="bg-[#F4EFE6] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold text-[#1A1A1A] md:text-5xl">Qué te aporta</h2>
        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4">
          {BENEFITS.map(b => (
            <article key={b.id} className={`group rounded-3xl bg-[#FFFDF9] p-6 transition hover:bg-[#FF5E6C] hover:text-white ${SPAN[b.size]}`}>
              {/* Icono Lucide por tarjeta */}
              <h3 className="font-display text-2xl font-bold text-[#1B4332] group-hover:text-white">{b.title}</h3>
              <p className="mt-2 opacity-80">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
