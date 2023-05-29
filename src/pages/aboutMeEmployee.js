
const features = [
  {
    description: [
      'Som ung begyndte jeg at klippe mine venner og opdagede mit naturlige talent for det. Efter forskellige jobmuligheder fandt jeg min vej ind i frisørfaget og har nu været frisør i 28 år. For 15 år siden åbnede jeg min egen salon, hvor jeg fortsætter med at udleve min passion.',
      ' Mit arbejde som frisør betyder alt for mig, og mange af mine fritidsinteresser er relateret til mit fag. Jeg rejser til udlandet hvert år for at finde inspiration og undergrunds tendenser til min profession.',
      ' Mit fokus er at arbejde med hårets struktur og vejlede mine kunder, så de kan få det bedste ud af deres hår.',
      ' Som frisør er jeg altid til eksamen, da mine kunders tilfredshed er afgørende. Jeg er fra Nørrebro, arbejder på Nørrebro og vil forlade verden fra Nørrebro. Min gamle læremester anbefalede mig at åbne salon på Elmegade, hvor det føles som en landsby.',
      ' Min salon er lille, hvilket giver mulighed for intime samtaler med kunder. Jeg har kunder fra alle samfundslag og vi snakker om livets udfordringer. Jeg elsker at lytte til deres historier. Selvom nogle siger at man ikke skal diskutere politik med sin frisør, så gør jeg det gerne.',
      ' Menneskers indre finder jeg interresent. Det har altid fascineret mig. Jeg har en svaghed for dem, der har det svært. Selvom jeg nok er for dum til at blive psykolog, kan jeg blive psykoterapeut eller noget der kan hjælpe folk og gøre dem gladere.',
      ' Det kan sagtens kombineres med at være frisør. At være frisør er ikke bare et job for mig. Jeg arbejder med noget levende og skaber noget. Det er et håndværk, og for mig er det mere en hobby, jeg føler mig meget privilegeret. Jeg er glad når jeg går på arbejde, og efter 10 dages ferie glæder jeg mig utroligt meget til at komme tilbage.',
    ]
    
    
  },
]

export default function Example() {
  return (
    <div className="relative bg-cream w-screen py-24 sm:py-32">
    <div className="hidden-on-mobile md:absolute inset-0 mt-16 mx-4 mb-4 border-8 rounded-xl border-orangesmash" />
    <div className="hidden-on-mobile md:absolute inset-6 mt-16 mx-4 mb-4 border-4 rounded-xl border-orangesmash opacity-70" />
    <div className="hidden-on-mobile md:absolute inset-12 mt-16 mx-4 mb-4 border-2 rounded-xl border-orangesmash opacity-40" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-orangesmash sm:text-4xl" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>Karim Belkhelfa</p>
              <p className="mt-6 text-lg leading-8 text-greydark" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
              Mit navn er Karim og jeg arbejder i min frisørsalon Fungus i Elmegade, København.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-greydark lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="inline font-semibold text-white">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/Fungus-karim-1.jpg"
            alt="Karim Headshot"
            className="w-[48rem] max-w-100 rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            style={{width: "120%", marginTop: "100px" }}
            
          />
        </div>
      </div>
    </div>
  )
}
