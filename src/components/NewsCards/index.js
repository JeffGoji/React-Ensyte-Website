import image1 from '../../assets/img/newsPic.jpg';

import A17 from './A17';
import A18 from './A18';
import A6 from './A6';


import { useEffect } from 'react';


function NewsCards(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div
            className="row text-center blue-text justify-content-center bg-white"
        >
            <h1 className="mt-5">ENSYTE News</h1>

            <img src={image1} className='img-fluid' alt='Ensyte News Releases' style={{ maxWidth: "350px" }} />
            <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2 mb-5">
                {/* <!-- Card 1 --> */}
                <A17 />
                {/* Card 2 */}

                <A18 />

                {/* Card 3 */}
                <A6 />


                {/* MODAL SECTION FOR ALL ARTICLES */}

            </div>
        </div>
    )
}



export default NewsCards;