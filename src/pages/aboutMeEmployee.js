
const features = [
  {
    description: [
      ' Hår er blevet min livsstil. Mit arbejde som frisør betyder alt for mig, og mange af mine fritidsinteresser er relateret til mit fag. Jeg besøger London hvert år for at finde inspiration og undergrundstendenser til min profession. Musik spiller også en stor rolle i mit liv, da det er forbundet med følelser, hår og mode. Som ung begyndte jeg at klippe mine venner og opdagede min naturlige talent for det. Efter forskellige jobmuligheder fandt jeg min vej ind i frisørfaget og har nu været frisør i 28 år. For 15 år siden åbnede jeg min egen salon, hvor jeg fortsætter med at udleve min passion for håret.',
      ' Min dag som frisør er fyldt med klipning, lidt regnskab og personlige interaktioner. Jeg bruger en del tid på at forbedre mine færdigheder gennem shows, billedmateriale og undervisning. Mit fokus er at arbejde med hårets struktur og vejlede mine kunder, så de kan få det bedste ud af deres hår med minimal indsats. Jeg lægger ikke så meget vægt på styling efter en klipning, da håret skal kunne se godt ud selv med en simpel føntørring. Som frisør er jeg altid til eksamen, da mine kunders tilfredshed er afgørende for mig. Jeg undgår at arbejde med noget, jeg ikke føler mig kompetent til, og har taget det som en personlig udfordring at blive bedre til at lave håropsætninger på langt hår.', 
      ' Jeg er fra Nørrebro, arbejder på Nørrebro og vil forlade verden fra Nørrebro. Det er her, jeg hører til. Min gamle læremester anbefalede mig at åbne min salon på Elmegade, hvor det føles som en landsby. Folk hilser på hinanden, og folk kigger ind i salonen for en sludder. Min salon er lille, hvilket giver mig mulighed for intime samtaler med mine kunder. Jeg har kunder fra alle samfundslag og vi snakker om psykologi og livets udfordringer. Jeg elsker at lytte til deres historier. Selvom nogle siger, at man ikke skal diskutere politik med sin frisør, så gør jeg det gerne. Det er sjovt, selvom vi er uenige.',
      ' Hvis jeg skulle lave det samme på alle kunder, ville jeg blive træt af det. Jeg kalder det samlebåndsarbejde. Lige nu har jeg overskud til at fortsætte med at videreuddanne mig, og det er derfor jeg kan holde ud at arbejde som frisør. Men når jeg ikke længere udvikler mig som frisør, vil jeg hellere fokusere mere på menneskers indre end deres ydre. Det har altid fascineret mig. Jeg har en svaghed for dem, der har det svært. Selvom jeg nok er for dum til at blive psykolog, kan jeg blive psykoterapeut eller stresscoach eller noget, der kan hjælpe folk og gøre dem gladere. Det kan sagtens kombineres med at være frisør.',
      ' At være frisør er ikke bare et job for mig. Jeg arbejder med noget levende og skaber noget. Det er et håndværk, men det handler ikke kun om at tjene penge. For mig er det mere en hobby, og jeg føler mig meget privilegeret. Jeg er glad, når jeg går på arbejde, og efter 10 dages ferie glæder jeg mig utroligt meget til at komme tilbage. Jeg elsker mit arbejde, og det gør mig virkelig lykkelig. Jeg kan ikke forestille mig, hvordan man kan overleve i 28 år, hvis man ikke trives med det, man laver. Det må være forfærdeligt.'
    ]
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-light">Om mig:</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Karim Belkhelfa</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Mit navn er Karim og jeg arbejder i min egen frisørsalon "Fungus" som ligger her i Elmegade.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
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
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
