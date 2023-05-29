export default function Example() {
    return (
        
      <div className="relative bg-cream py-24 sm:py-32 h-screen">
      <div className="hidden-on-mobile md:absolute inset-0 mt-16 mx-4 mb-4 border-8 rounded-xl border-orangesmash" />
      <div className="hidden-on-mobile md:absolute inset-6 mt-16 mx-4 mb-4 border-4 rounded-xl border-orangesmash opacity-70" />
      <div className="hidden-on-mobile md:absolute inset-12 mt-16 mx-4 mb-4 border-2 rounded-xl border-orangesmash opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-orangesmash lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-orangesmash" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>Get in touch</h2>
                <p className="mt-4 leading-7 text-darkgrey" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                Book gerne en tid via bookingsystemet. <br></br>
                Kontakt os på telefon for andre henvendelser. 
                </p>
              </div>
           

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl border-2 border-orangesmash p-10">
                  <h3 className="text-base font-semibold leading-7 text-orangesmash" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>Telefon</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-darkgrey" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                    <div className="mt-1">
                      <dd>+45 35 36 34 31</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-orangesmash" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>Lokation</h2>
                <p className="mt-4 leading-7 text-darkgrey" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                Vi holder til i hjertet af København N.
                </p>

                <br></br>
            <div className="relative rounded-full px-3 py-2 text-sm leading-6 text-darkgrey ring-2 ring-orangesmash/60 hover:ring-orangedark/60 text-center" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                Få vist vej til salonen her:{' '}
                <a href="https://goo.gl/maps/rUeyLt64drhZN4UL7" className="font-semibold text-orangesmash" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                <span className="absolute inset-0" aria-hidden="true" />
                Google Maps <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
              </div>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl border-2 border-orangesmash p-10">
                  <h3 className="text-base font-semibold leading-7 text-orangesmash" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>Elmegade 10</h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-darkgrey" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
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
  