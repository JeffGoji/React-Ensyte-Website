
import { useEffect } from 'react';


import NewsCards from '../NewsCards';
import Carousel from '../Carousel'
import Testimonials from './Testimonials'
import GastarDemo1 from './GastarDemo1'


export const Intro = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <main className='container-fluid'>
            <Carousel />
            <GastarDemo1 />
            <Testimonials />
            <NewsCards />

        </main >
    )
}

export default Intro;