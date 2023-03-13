import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import image1 from '../../assets/img/newsPic.jpg';

import A11 from '../NewsCards/A11';
import A12 from '../NewsCards/A12';
import A13 from '../NewsCards/A13';

//row 2
import A14 from '../NewsCards/A14';
// import A15 from '../NewsCards/A15';
// import A16 from '../NewsCards/A16';

// import CardData from './Cards';

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

                    <A14 />

                    {/* CARD 2 */}

                    <A12 />

                    {/* CARD 3 */}

                    <A13 />

                </div>
                {/************************* ROW 2 ************************* */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* CARD 1 */}


                    <A11 />
                    {/* <A15 /> */}

                    {/* <CardData /> */}

                </div>
                <div>
                    <NavLink to="../newsstand2">
                        <button className='btn btn-lg btn-warning  m-2'>Prev</button>
                    </NavLink>
                    {/* <NavLink to="../newsstand4">
                        <button className='btn btn-lg btn-warning  m-2'>Next</button>
                    </NavLink> */}
                    {/* <NavLink to="../newsstand4">
                            <button className='btn btn-lg btn-warning m-2'>Next </button>
                        </NavLink> */}
                </div>
            </div>
        </div>
    )
}



export default NewsStand;