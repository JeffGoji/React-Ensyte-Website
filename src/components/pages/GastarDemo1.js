import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

import image1 from '../../assets/img/gastar-logo-1.png';
import image2 from '../../assets/img/logo-strip.png'

const GastarDemo1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="row imgBg10 text-black justify-content-center mt-5">
            <div className="col-lg-12 col-sm-12 text-center fs-4 mb-5">
                <img src={image1} alt="Schedule a Demo with us!" className='border-0 img-fluid' />
                <h2 className='text-center mt-1 blue-text'>Leverage natural gas data across your organization into one streamlined business process with GASTAR </h2>
                <img src={image2} alt="Schedule a Demo with us!" className='border-0 img-fluid' />
            </div>
            <div className="col-lg-12 col-sm-12 mt-2 mb-3 text-center">
                <NavLink to="/contact"><button type="button" className="btn btn-warning btn-lg">SCHEDULE A DEMO</button></NavLink>
            </div>
        </div>
    )



}

export default GastarDemo1;