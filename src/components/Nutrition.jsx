import { useState } from 'react'
import { INGREDIENTS } from '../data/content'

export default function Nutrition() {
  const [active, setActive] = useState(0)
  return (
    <section id="ingredientes" className="bg-[#FFFDF9] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl font-extrabold text-[#1A1A1A] md:text-5xl">Transparencia total</h2>
        <div role="tablist" className="mt-8 flex gap-2">
          {INGREDIENTS.map((t, i) => (
            <button key={t.tab} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${active === i ? 'bg-[#1B4332] text-white' : 'bg-[#F4EFE6] text-[#1B4332]'}`}>
              {t.tab}
            </button>
          ))}
        </div>
        <ul role="tabpanel" className="mt-6 divide-y divide-[#1A1A1A]/10 rounded-3xl bg-[#F4EFE6] p-2">
          {INGREDIENTS[active].items.map(it => <li key={it} className="px-4 py-3">{it}</li>)}
        </ul>
      </div>
    </section>
  )
}
