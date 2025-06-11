import Image from 'next/image';

const dogs = [
  {
    id: 1,
    name: 'Max',
    title: 'Champion Polski',
    image: '/pies1.jpg',
    description: 'Nasz wspaniały reproduktor, champion Polski z wieloma osiągnięciami na wystawach międzynarodowych. Max to doskonały przykład rasy, charakteryzujący się idealną budową i wspaniałym temperamentem.',
    achievements: ['Champion Polski', 'Zwycięzca Międzynarodowej Wystawy 2023', 'Najlepszy Reproduktor 2022'],
    details: {
      age: '4 lata',
      weight: '32 kg',
      height: '58 cm',
      color: 'Złoty',
    }
  },
  {
    id: 2,
    name: 'Luna',
    title: 'Młoda Championka',
    image: '/pies2.jpg',
    description: 'Luna to nasza duma i radość. Młoda suczka z doskonałym rodowodem, która już teraz pokazuje wielki potencjał wystawowy. Jej łagodne usposobienie i inteligencja zachwycają wszystkich.',
    achievements: ['Młodzieżowy Champion Polski', 'Najlepsza Suczka Junior 2023'],
    details: {
      age: '2 lata',
      weight: '27 kg',
      height: '54 cm',
      color: 'Kremowy',
    }
  },
  {
    id: 3,
    name: 'Rocky',
    title: 'Gwiazda Hodowli',
    image: '/pies3.jpg',
    description: 'Rocky to energiczny i przyjazny pies rodzinny. Jego potomstwo odziedziczyło po nim nie tylko piękny wygląd, ale także wspaniały charakter. Jest uwielbiany przez wszystkie dzieci odwiedzające naszą hodowlę.',
    achievements: ['Zwycięzca Klubu 2022', 'Ojciec Championa'],
    details: {
      age: '5 lat',
      weight: '34 kg',
      height: '60 cm',
      color: 'Złoty',
    }
  },
];

export default function OurDogs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Nasze Psy
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Poznaj naszych wspaniałych czworonożnych przyjaciół. Każdy z nich to wyjątkowa osobowość
            i przykład najwyższych standardów rasy Golden Retriever.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {dogs.map((dog, index) => (
            <div
              key={dog.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="relative w-full lg:w-1/2 h-[400px]">
                <Image
                  src={dog.image}
                  alt={dog.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{dog.name}</h2>
                    <p className="text-yellow-600 font-semibold mt-1">{dog.title}</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {dog.description}
                    </p>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold text-gray-900">Osiągnięcia:</h3>
                      <ul className="mt-2 space-y-1">
                        {dog.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Wiek</p>
                      <p className="font-medium text-gray-900">{dog.details.age}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Waga</p>
                      <p className="font-medium text-gray-900">{dog.details.weight}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Wysokość</p>
                      <p className="font-medium text-gray-900">{dog.details.height}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Umaszczenie</p>
                      <p className="font-medium text-gray-900">{dog.details.color}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-yellow-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Zainteresowany naszymi psami?
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
            Wszystkie nasze psy posiadają pełną dokumentację hodowlaną, książeczki zdrowia
            i przechodzą regularne badania weterynaryjne. Zapewniamy pełne wsparcie i doradztwo
            zarówno przed, jak i po nabyciu szczeniaka.
          </p>
        </div>
      </div>
    </div>
  );
} 