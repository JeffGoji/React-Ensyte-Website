import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import image1 from '../../assets/img/newsPic.jpg';

import A4 from '../NewsCards/A4';
import A5 from '../NewsCards/A5';
import A7 from '../NewsCards/A7';
import A6 from '../NewsCards/A6';
import A9 from '../NewsCards/A9';

//Row 2
import A8 from '../NewsCards/A8';
// import A10 from '../NewsCards/A10';



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
                {/************************ ROW 1 ******************/}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-2">
                    {/* CARD 1 */}
                    <A6 />


                    {/* CARD 2 */}

                    <A4 />


                    {/* CARD 3 */}
                    <A5 />


                </div>
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* CARD 1 */}

                    <A9 />

                    {/* CARD 2 */}

                    <A7 />

                    {/* {/* CARD 3 */}

                    <A8 />

                </div>
                <div>
                    <NavLink to="../newsstand">
                        <button className='btn btn-lg btn-warning  m-2'>Prev</button>
                    </NavLink>
                    <NavLink to="../newsstand3">
                        <button className='btn btn-lg btn-warning m-2'>Next </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}



export default NewsStand;