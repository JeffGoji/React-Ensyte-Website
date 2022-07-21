import { NavLink } from 'react-router-dom';

import image1 from '../../assets/img/newsPic.jpg';

import A2 from '../NewsCards/A2';
import A3 from '../NewsCards/A3';
import A6 from '../NewsCards/A6';
// Row 2
import A1 from '../NewsCards/A1';
import A4 from '../NewsCards/A4';
import A5 from '../NewsCards/A5';

function NewsStand() {

    return (

        <div className="container-fluid bg-white">
            <div
                className="text-center text-black justify-content-center pb-5">
                <h1 className="mt-5">ENSYTE Latest NEWS</h1>
                <img src={image1} className='img-fluid' alt='Ensyte data Releases' style={{ maxHeight: "18rem" }} />
                {/* <Cards /> */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2">
                    {/* <!-- Card 1 --> */}
                    <A6 />
                    {/* Card 2 */}
                    <A2 />
                    {/* Card 3 */}
                    <A3 />
                </div>
                {/************************ ROW 2 ******************/}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* Card 1 */}
                    <A1 />
                    {/* Card 2 */}
                    <A4 />
                    {/* Card 3 */}
                    <A5 />
                </div>
                <div>
                    <NavLink to="../newsstand2"><button className='btn btn-lg btn-warning m-2'>Next</button></NavLink>
                </div>

            </div>
        </div>
    )
}



export default NewsStand;