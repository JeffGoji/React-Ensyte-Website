import { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

const Testimonials = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="row imgBg9 text-black justify-content-center mt-5">
            <h1 className='text-center mt-5 blue-text'>GASTAR Client Testimonials </h1>
            <hr />
            <div className="col-lg-12 col-sm-12 text-center fs-4 mb-5">
                <h4>“The Best Part About GASTAR is Your Support!”</h4>
                Client Testimonial, June 2022
                <br />
                <br />
                <h4>“I am proud of the product and how far it has come, and I give credit to the whole ENSYTE team.  It is functioning tremendously well.”</h4>
                Client Testimonial, February 2022
                <br />
                <br />
                <h4>“I appreciate all the effort that the ENSYTE team has been dedicating to ensure we are ready.  I very much appreciate the responsiveness to all the inquiries!”</h4>
                Client Testimonial, August 2021
                <br />
                <br />
                <h4>“The support that ENSYTE has provided has exceeded my expectations.”</h4>
                Client Testimonial, November 2021

            </div>
            <div className="col-lg-6 col-sm-12 mt-2 mb-2">
            </div>
        </div>
    )



}

export default Testimonials;