import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="relative h-[90vh] min-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/pies1.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Witamy w Naszej Hodowli <span className="text-yellow-400">Golden Retrievers</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Nasza hodowla to miejsce, gdzie pasja spotyka się z profesjonalizmem. Od ponad 10 lat zajmujemy się 
              hodowlą psów rasy Golden Retriever, tworząc dom dla najwspanialszych czworonożnych przyjaciół.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/our-dogs"
                className="inline-block bg-yellow-400 px-8 py-3 text-base font-medium text-gray-900 hover:bg-yellow-300 rounded-md shadow-lg transform hover:scale-105 transition duration-200"
              >
                Zobacz nasze psy
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-white px-8 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md shadow-lg transform hover:scale-105 transition duration-200"
              >
                Skontaktuj się
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="bg-warm-gradient py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8 lg:mb-0">
              <Image
                src="/pies2.jpg"
                alt="Nasze psy"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                O Naszej Hodowli
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Nasza przygoda z hodowlą Golden Retrieverów rozpoczęła się ponad dekadę temu 
                  z miłości do tej wyjątkowej rasy. Dziś jesteśmy jedną z najbardziej uznanych 
                  hodowli w Polsce, a nasze psy zdobywają nagrody na międzynarodowych wystawach.
                </p>
                <p>
                  Każdy szczeniak w naszej hodowli otrzymuje:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pełną dokumentację hodowlaną i rodowód</li>
                  <li>Komplet szczepień i odrobaczenia</li>
                  <li>Książeczkę zdrowia i chip</li>
                  <li>Wyprawkę szczeniaka</li>
                  <li>Dożywotnie wsparcie hodowcy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-warm-gradient-reverse py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Dlaczego warto wybrać naszą hodowlę?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stawiamy na jakość, profesjonalizm i miłość do zwierząt
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="group">
                <div className="flow-root rounded-lg bg-white/80 backdrop-blur-sm px-6 pb-8 shadow-lg transition duration-200 hover:shadow-xl">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-yellow-400 p-3 shadow-lg group-hover:bg-yellow-500 transition duration-200">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-yellow-600 transition duration-200">
                      Doświadczenie i Pasja
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      Ponad 10 lat doświadczenia w hodowli, niezliczone sukcesy na wystawach i setki szczęśliwych rodzin, 
                      które przyjęły naszych pupili.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group">
                <div className="flow-root rounded-lg bg-white/80 backdrop-blur-sm px-6 pb-8 shadow-lg transition duration-200 hover:shadow-xl">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-yellow-400 p-3 shadow-lg group-hover:bg-yellow-500 transition duration-200">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-yellow-600 transition duration-200">
                      Najwyższa Jakość
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      Wszystkie nasze psy posiadają rodowody, przechodzą regularne badania i są pod stałą opieką weterynaryjną.
                      Zapewniamy pełne wsparcie po adopcji.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group">
                <div className="flow-root rounded-lg bg-white/80 backdrop-blur-sm px-6 pb-8 shadow-lg transition duration-200 hover:shadow-xl">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-yellow-400 p-3 shadow-lg group-hover:bg-yellow-500 transition duration-200">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-yellow-600 transition duration-200">
                      Profesjonalne Warunki
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      Przestronne wybiegi, codzienna socjalizacja, zbilansowana dieta i stała opieka behawiorysty 
                      to standard w naszej hodowli.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics section */}
      <div className="bg-warm-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500">10+</div>
              <div className="mt-2 text-gray-600">Lat doświadczenia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500">150+</div>
              <div className="mt-2 text-gray-600">Szczęśliwych rodzin</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500">25+</div>
              <div className="mt-2 text-gray-600">Nagród na wystawach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500">100%</div>
              <div className="mt-2 text-gray-600">Zadowolonych klientów</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-warm-gradient-reverse py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Co mówią o nas nasi klienci?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"Najlepsza decyzja w naszym życiu. Nasz Golden jest nie tylko piękny, 
              ale też świetnie wychowany i zdrowy. Hodowla zapewniła nam pełne wsparcie."</p>
              <p className="mt-4 font-medium text-gray-900">- Anna i Marek K.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"Profesjonalne podejście i widoczna miłość do zwierząt. 
              Nasza Luna to członek rodziny, którego nie wyobrażamy sobie nie mieć."</p>
              <p className="mt-4 font-medium text-gray-900">- Katarzyna W.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"Świetny kontakt z hodowcą, pełne wsparcie i cudowny pies. 
              Polecamy każdemu, kto szuka odpowiedzialnej hodowli."</p>
              <p className="mt-4 font-medium text-gray-900">- Piotr i Magdalena S.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-warm-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-400 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block">Gotowy na nowego przyjaciela?</span>
                  <span className="block text-white">Skontaktuj się z nami już dziś!</span>
                </h2>
                <p className="mt-4 text-lg text-gray-800">
                  Pomożemy Ci wybrać idealnego szczeniaka dla Twojej rodziny.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-600 bg-white hover:bg-gray-50 transform hover:scale-105 transition duration-200"
                >
                  Zapytaj o szczeniaki
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
