import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const tiers = [
  {
    name: 'Herre klip',
    id: 'tier-freelancer',
    href: '#',
    price: '475 kr',
    description: 'Den mest essentielle klip af dit hår.',
    features: [
    '45 min.', 
    'Vask af hår', 
    'Styling'

    ],
    mostPopular: false,
  },
  {
    name: 'Dame klip',
    id: 'tier-startup',
    href: '#',
    price: '575 kr',
    description: 'Den mest essentielle klip af længere hår',
    features: [
    '60 min.', 
    'Vask af hår', 
    'Styling'
      
    ],
    mostPopular: false,
  },
  {
    name: 'Junior-klip',
    id: 'tier-enterprise',
    href: '#',
    price: '400 kr',
    description: 'For børn mellem 10-16 år.',
    features: [
    '40 min.', 
    'Vask af hår',  
    'Styling'

    ],
    mostPopular: false,
  },
  {
    name: 'Børne-klip',
    id: 'tier-freelancer',
    href: '#',
    price: '350 kr',
    description: 'For børn fra 3-10 år',
    features: [
    '30 min.', 
    'Vask af hår', 
    'Styling'
    ],
    mostPopular: false,
  },
  {
    name: 'Satelit-klip',
    id: 'tier-freelancer',
    href: '#',
    price: '375 kr',
    description: 'Hvis du ikke har så meget hår / tyndhåret',
    features: [
    '35 min.', 
    'Vask af hår',
    'Styling'
    ],
    mostPopular: false,
  },
  {
    name: 'Farvning',
    id: 'tier-freelancer',
    href: '#',
    price: '475 kr',
    description: 'Almindelig farvning af dit hår.',
    features: [
    '80 min.', 
    'Konsultasion af ønsker', 
    'Styling'
    ],
    mostPopular: false,
  },
  {
    name: 'Kam striber',
    id: 'tier-freelancer',
    href: '#',
    price: '400 kr',
    description: 'En let måde at få solstrejf i det mørke vinterhår',
    features: [
    '30 min.',
    'Konsultasion af ønsker',  
    'Styling'
    ],
    mostPopular: false,
  },
  {
    name: 'Top striber',
    id: 'tier-freelancer',
    href: '#',
    price: '900 kr',
    description: 'Striber fra tændning til tændning, halve håret.',
    features: [
    '85 min.',
    'Konsultasion af ønsker',  
    'Styling'
    ],
    mostPopular: false,
  },
  {
    name: 'Alm. fuld striber',
    id: 'tier-freelancer',
    href: '#',
    price: '1600 kr',
    description: 'Almindelige striber vi laver hele året.',
    features: [
    '100 min.',
    'Konsultasion af ønsker', 
    'Styling'
    ],
    mostPopular: false,
  },
  {
    name: 'Speciel striber!',
    id: 'tier-freelancer',
    href: '#',
    price: '2200 kr',
    description: 'Alt fra Babylights, Ombre, Balayage og andre langtids farvebehandlinger med toninger.',
    features: [
    '180 min.',
    'Konsultasion af ønsker',  
    'Styling'
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  return (
      <div className="relative bg-cream py-24 sm:py-32">
      <div className="hidden-on-mobile md:absolute inset-0 mt-16 mx-4 mb-4 border-8 rounded-xl border-orangesmash" />
      <div className="hidden-on-mobile md:absolute inset-6 mt-16 mx-4 mb-4 border-4 rounded-xl border-orangesmash opacity-70" />
      <div className="hidden-on-mobile md:absolute inset-12 mt-16 mx-4 mb-4 border-2 rounded-xl border-orangesmash opacity-40" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-8 text-greydark" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>Priser</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-orangesmash sm:text-5xl" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
            Prispakker på de forskellige klip
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-greydark" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
          Vælg lige den type klipning som passer dig og dine behov best.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-greydark' : 'ring-2 ring-orangesmash/100',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-bold leading-8 text-orangesmash" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-greydark" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white"></span>
                <span className="text-sm font-semibold leading-6 text-gray-300"></span>
              </p>
              <p className="mt-2 text-2xl font-bold leading-6 text-orangesmash" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>{tier.price}</p>
              <Link
                href='/booking'
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-orangesmash text-greydark hover:bg-white/20 focus-visible:outline-white',
                  'mt-9 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Book en tid
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-greydark xl:mt-10" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-orangesmash" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
