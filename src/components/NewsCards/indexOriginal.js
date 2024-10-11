import image1 from '../../assets/img/newsPic.jpg';

// import A17 from './A17';
import A22 from './A22';
import A23 from './A23';
import A21 from './A21';



import { useEffect } from 'react';


function NewsCards() {

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
                <A21 />
                {/* Card 2 */}
                <A23 />
                {/* Card 3 */}
                <A22 />

            </div>
        </div>
    )
}



export default NewsCards;