import { NavLink } from 'react-router-dom';

import image1 from '../../assets/img/newsPic.jpg';


import A16 from '../NewsCards/A16';



function NewsStand() {

    return (

        <div className="container-fluid bg-white">
            <div
                className="text-center text-black justify-content-center pb-5">
                <h1 className="mt-5">ENSYTE Latest NEWS</h1>
                <img src={image1} className='img-fluid' alt='Ensyte data Releases' style={{ maxHeight: "18rem" }} />
                {/* <Cards /> */}
                {/************************* ROW 3 ************************* */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-2">
                    {/* CARD 1 */}
                    <A16 />

                </div>
                <div>
                    <NavLink to="../newsstand5">
                        <button className='btn btn-lg btn-warning  m-2'>Prev</button>
                    </NavLink>
                    {/* <NavLink to="../newsstand7">
                        <button className='btn btn-lg btn-warning m-2'>Next </button>
                    </NavLink> */}
                </div>

            </div>
        </div>
    )
}



export default NewsStand;