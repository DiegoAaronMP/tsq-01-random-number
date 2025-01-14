import { useQuery } from '@tanstack/react-query';


const getRandomNumber = async (): Promise<number> => {
    const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
        .then(resp => resp.json());

    return Number(resp);
}

export const useRandom = () => {
    const randomQuery = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getRandomNumber,
        // retry: false - Por defecto Tanstack hace 3 retries antes de retornar un error
    });

    return {
        randomQuery,
    }
}
