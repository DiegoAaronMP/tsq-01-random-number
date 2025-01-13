import { useQuery } from '@tanstack/react-query';
import '../App.css';

const getRandomNumber = async (): Promise<number> => {
    const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
        .then(resp => resp.json());

    return Number(resp);
}

export const RandomNumber = () => {
    const {data} = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getRandomNumber
    })

    return (
        <div>Random Number: {data}</div>
    )
}
