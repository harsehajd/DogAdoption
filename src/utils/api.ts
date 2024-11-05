export async function getAllBreeds(options?: { cache: RequestCache }) {
    const response = await fetch('https://dog.ceo/api/breeds/list/all', {
        cache: options?.cache || 'default'
    });
    const data = await response.json();
    return Object.keys(data.message);
}

export async function getBreedImages(breed: string, limit: number = 9, options?: { cache: RequestCache }) {
    const formattedBreed = breed.replace(' ', '/');
    const response = await fetch(`https://dog.ceo/api/breed/${formattedBreed}/images/random/${limit}`, {
        cache: options?.cache || 'default'
    });
    const data = await response.json();
    return data.message; 
}