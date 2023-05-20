
const features = [
  {
    description:
      ' *Placeholder text* Karim, en dygtig frisør med 12 års erfaring, har for nylig åbnet sin egen frisørsalon i Elmegade. Efter mange års hårdt arbejde har Karim udviklet sig fra en lille kundebase til at blive anerkendt og efterspurgt i branchen. Karims rejse begyndte for 12 år siden, da han startede som lærling. Han har siden dedikeret sig til at perfektionere sit håndværk og skabe unikke frisurer, der fremhæver kundernes skønhed og stil. Med sin professionalisme og dedikation vandt Karim hurtigt tilliden hos sine første kunder. Mens Karim opbyggede sin kundebase, begyndte han at udforske forskellige frisørstile og trends. Han deltog i workshops, seminarer og konkurrencer for at holde sig opdateret med de nyeste teknikker og metoder. Denne konstante læring hjalp med at forbedre hans færdigheder og gjorde ham eftertragtet som frisør.',
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
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Karim Fungus</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Midt navn er Karim og jeg arbejder i min egen frisørsalon "Fungus Haircut" som ligger i Elmegade.
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
            src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/123512711_843279483097862_78467846047393708_n.png?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=FGin6802zjMAX_3Jb5x&_nc_ht=scontent-arn2-1.xx&oh=00_AfCfS_P1G8MoOtLlrcZPjOKWapLTRsRqhiiEydQldwjfdQ&oe=648EFC51"
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
