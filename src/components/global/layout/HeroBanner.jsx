import Image from "next/image"
import Link from "next/link"


export const HeroBanner = () => {
    const handleOnClick =() => {
    }
    return (
        <div className="relative h-screen isolate overflow-hidden pt-14">
        <img
          src="Fungus-outside-1-bg.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"

        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-96 sm:pt-80 lg:pt-[25%]">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-cream ring-1 ring-white/10 hover:ring-white/20" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
              Få vist vejen til salonen her.{' '}
              <Link href="https://goo.gl/maps/rUeyLt64drhZN4UL7" className="font-semibold text-light">
                <span className="absolute inset-0" aria-hidden="true" />
                Google Maps <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-orangesmash sm:text-6xl" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
              Fungus Haircut
            </h1>
            <p className="mt-6 text-lg leading-8 text-cream" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
              Vi tilbyder alt fra alminnelig klip til styling, farvning og hårprodukter.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/booking"
                className="rounded-md bg-orangesmash px-3.5 py-2.5 text-sm font-semibold text-dark shadow-sm hover:bg-orangedark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greydark"
                onClick={handleOnClick}
              >
                Book tid
              </Link>
              <Link href="/prices" className="text-sm font-semibold leading-6 text-cream">
                Priser <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}