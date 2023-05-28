export default function Example() {
    return (

      <div className="relative bg-orangesmash py-24 sm:py-32 h-screen">
      <div className="absolute inset-0 mt-16 mx-4 mb-4 border-8 rounded-xl border-cream" />
      <div className="absolute inset-6 mt-16 mx-4 mb-4 border-4 rounded-xl border-cream opacity-70" />
      <div className="absolute inset-12 mt-16 mx-4 mb-4 border-2 rounded-xl border-cream opacity-40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
                <p className="mt-4 leading-7 text-cream">
                Book gerne en tid via bookingsystemet. <br></br>
                Kontakt os på telefon for andre henvendelser. 
                </p>
              </div>
           

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl border-2 border-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-white">Telefon</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-cream">
                    <div className="mt-1">
                      <dd>+45 35 36 34 31</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Lokation</h2>
                <p className="mt-4 leading-7 text-cream">
                Vi holder til i hjertet af København N.
                </p>

                <br></br>
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-cream ring-1 ring-white/10 hover:ring-white/20 text-center">
                Få vist vej til salonen her:{' '}
                <a href="https://goo.gl/maps/rUeyLt64drhZN4UL7" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Google Maps <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
              </div>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl border-2 border-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-white">Elmegade 10</h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-cream">
                    <p>2200 København N, Danmark</p>
                  </address>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Åbningstider</h2>
              </div>
              <div>

  <div className="mt-4 text-lg text-cream font-bold tracking-tight">
    
   <p className="mb-2 inline-block border border-white rounded-md px-2 py-1">Mandag <span className="font-semibold ml-5">10:00 - 18:00</span><br /></p>
   <p className="mb-2 inline-block border border-white rounded-md px-2 py-1">Tirsdag <span className="font-semibold ml-7">10:00 - 18:00</span><br /></p>
   <p className="mb-2 inline-block border border-white rounded-md px-2 py-1">Onsdag <span className="font-semibold ml-7">Lukket</span><br /></p>
   <p className="mb-2 inline-block border border-white rounded-md px-2 py-1">Torsdag <span className="font-semibold ml-6">10:00 - 18:00</span><br /></p>
   <p className="mb-2 inline-block border border-white rounded-md px-2 py-1">Fredag <span className="font-semibold ml-8">10:00 - 19:00</span><br /></p>
   <p className="mb-2 inline-block border border-white rounded-md px-2 py-1">Lørdag <span className="font-semibold ml-8">10:00 - 14:00</span><br /></p>
   <p className="mb-2 inline-block border border-white rounded-md px-2 py-1">Søndag <span className="font-semibold ml-7">Lukket</span><br /></p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    )
  }
  