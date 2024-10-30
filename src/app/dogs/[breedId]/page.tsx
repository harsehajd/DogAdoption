import Head from 'next/head';

// Dummy dog breed data
const dummyBreeds = {
    bulldog: {
        name: 'Bulldog',
        description: 'Bulldogs are gentle and affectionate companions.',
    },
    beagle: {
        name: 'Beagle',
        description: 'Beagles are curious and friendly dogs.',
    },
    poodle: {
        name: 'Poodle',
        description: 'Poodles are intelligent and highly trainable.',
    },
};

export default function DogBreed({ params }: { params: { breedId: string } }) {
    const { breedId } = params;
    const breed = dummyBreeds[breedId];

    if (!breed) {
        return <div>Breed not found</div>; // Handle case where breedId is invalid
    }

    return (
        <div className="container">
            <Head>
                <title>{breed.name} Adoption</title>
            </Head>
            <header className="header">
                <h1 className="title">{breed.name}</h1>
            </header>
            <main className="main">
                <div className="introduction">
                    <h2>About This Breed</h2>
                    <p>{breed.description}</p>
                </div>
            </main>
        </div>
    );
}