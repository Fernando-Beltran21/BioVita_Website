import { FLAVOR_NOTES } from '../data/content'

export default function FlavorBurst() {
  return (
    <section id="sabor" className="relative bg-gradient-to-br from-[#FF5E6C] to-[#FF8A80] px-6 py-32 text-white">
      {/* Cambio de color de fondo al scroll: GSAP ScrollTrigger sobre esta sección */}
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-5xl font-extrabold md:text-7xl">Guayaba de verdad</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
          Dulce, ligeramente cítrica y cremosa. Una acidez suave que refresca, inspirada en las bebidas lácteas fermentadas de estilo Calpis.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {FLAVOR_NOTES.map(n => (
            <li key={n} className="rounded-full border border-white/50 bg-white/15 px-5 py-2 backdrop-blur">{n}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
