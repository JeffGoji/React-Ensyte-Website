import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import image1 from '../../assets/img/newsPic.jpg';

import A2 from '../NewsCards/A2';
import A17 from '../NewsCards/A17';
import A18 from '../NewsCards/A18';

// Row 2
import A3 from '../NewsCards/A3';
import A6 from '../NewsCards/A6';
import A1 from '../NewsCards/A1';

import A19 from '../NewsCards/A19';

import Cards from './Cards';

function NewsStand() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className="container-fluid bg-white">
            <div
                className="text-center text-black justify-content-center pb-5">
                <h1 className="mt-5">ENSYTE Latest NEWS</h1>
                <img src={image1} className='img-fluid' alt='Ensyte data Releases' style={{ maxHeight: "18rem" }} />
                {/* <Cards /> */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2">
                    {/* <!-- Card 1 --> */}
                    <A19 />
                    {/* Card 2 */}
                    <A17 />
                    {/* Card 3 */}
                    <A18 />


                </div>
                {/************************ ROW 2 ******************/}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* Card 1 */}
                    <A2 />
                    {/* Card 2 */}
                    <A3 />

                    {/* Card 3 */}
                    <A6 />

                </div>
                <div>
                    <NavLink to="../newsstand2"><button className='btn btn-lg btn-warning m-2'>Next</button></NavLink>
                </div>

            </div>
        </div>
    )
}



export default NewsStand;