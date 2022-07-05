import image1 from '../../assets/img/newsPic.jpg';

import Slider from "react-slick";

import A2 from '../NewsCards/A2';
import A3 from '../NewsCards/A3';
import A4 from '../NewsCards/A4';
import A5 from '../NewsCards/A5';
import A6 from '../NewsCards/A6';
import A7 from '../NewsCards/A7';
import A8 from '../NewsCards/A8';
import A9 from '../NewsCards/A9';
import A10 from '../NewsCards/A10';
import A11 from '../NewsCards/A11';
import A12 from '../NewsCards/A12';
import A13 from '../NewsCards/A13';
import A14 from '../NewsCards/A14';
import A15 from '../NewsCards/A15';
import A16 from '../NewsCards/A16';

function NewsStand(props) {

    return (
        <div className="container-fluid mb-3 bg-white">
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
                    <A4 />
                    {/* Card 2 */}
                    <A5 />
                    {/* Card 3 */}
                    <A7 />
                </div>

                {/************************* ROW 3 ************************* */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* CARD 1 */}
                    <A8 />
                    {/* CARD 2 */}
                    <A9 />
                    {/* CARD 3 */}
                    <A10 />
                </div>
                {/************************* ROW 4 ************************* */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* CARD 1 */}
                    <A11 />
                    {/* CARD 2 */}
                    <A12 />
                    {/* {/* CARD 3 */}
                    <A13 />
                </div>
                {/************************* ROW 5 ************************* */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* CARD 1 */}
                    <A14 />
                    {/* CARD 2 */}
                    <A15 />
                    {/* CARD 3 */}
                    <A16 />
                </div>
            </div>
        </div>
    )
}



export default NewsStand;