import { getAllBreeds, getBreedImages } from '@/utils/api';

export async function generateStaticParams() { /// This is the newer method with Next.js 13+, which is why I didn't use getStaticPaths. Same rationale for not using getStaticProps (used app router instead).
  const breeds = await getAllBreeds({ cache: 'force-cache' });
  return breeds.map((breed) => ({
    breedId: breed,
  }));
}

export default async function BreedPage({ params }: { params: { breedId: string } }) {
  const breedImages = await getBreedImages(params.breedId, 20); 

  return (
    <div className="container p-4">
      <h1 className="text-3xl font-bold capitalize mb-4">{params.breedId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {breedImages.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={`${params.breedId} dog ${index + 1}`}
            className="w-full h-48 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}