import Link from 'next/link';
import { getAllBreeds, getBreedImages } from '@/utils/api';

export default async function Home() {
  const breeds = await getAllBreeds({ cache: 'force-cache' });
  const selectedBreeds = breeds.slice(0, 9);
  
  const breedImages = await Promise.all(
    selectedBreeds.map(async (breed) => ({
      breed,
      images: await getBreedImages(breed, 1)
    }))
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Dog Breeds for Adoption</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breedImages.map(({ breed, images }) => (
          <div key={breed} className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={images[0]} 
              alt={`${breed} dog`}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold capitalize mb-4 text-black">{breed}</h2>
              <Link 
                href={`/dogs/${breed}`} 
                className="mt-2 bg-black hover:bg-gray-800 transition-colors duration-200 text-white px-6 py-2 rounded-full inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}