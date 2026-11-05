import { PROCESS } from '../data/content'

export default function ProcessScroll() {
  return (
    <section id="que-es" className="bg-[#FFFDF9] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold text-[#1A1A1A] md:text-5xl">¿Qué es BioVita?</h2>
        <p className="mt-4 max-w-xl text-lg text-[#1A1A1A]/70">
          Por cada kilo de queso se generan entre 9 y 10 litros de lactosuero. Nosotros lo fermentamos y lo convertimos en una bebida funcional.
        </p>
        {/* Scrollytelling: fijar con GSAP ScrollTrigger (pin) y cambiar el paso activo */}
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {PROCESS.map((s, i) => (
            <li key={s.title} className="rounded-3xl bg-[#F4EFE6] p-6">
              <span className="text-sm font-semibold text-[#FF5E6C]">Paso {i + 1}</span>
              <h3 className="mt-2 font-display text-xl font-bold text-[#1B4332]">{s.title}</h3>
              <p className="mt-2 text-[#1A1A1A]/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
