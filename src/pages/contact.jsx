export default function Example() {
    return (
     <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-light">Get in touch</h2>
                <p className="mt-4 leading-7 text-white">
                Kontakt os på telefon for bookning eller andre henvendelser. 
                Book gerne en tid via. bookingsystemet øverst til højre
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Telefon</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+45 35 36 34 31</dd>
                      
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-light">Lokation</h2>
                <p className="mt-4 leading-7 text-white">
                Vi holder til i hjertet af København N.
                </p>

                <br></br>
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 text-center">
                Få vist vej til salonen her:{' '}
                <a href="https://goo.gl/maps/rUeyLt64drhZN4UL7" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Google Maps <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
              </div>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Elmegade 10</h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                    <p>2200 København N, Danmark</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  