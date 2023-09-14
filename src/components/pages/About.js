import { useEffect } from 'react';

import Execs from './Execs'


// import image1 from '../../assets/img/michael.png'
import image2 from '../../assets/img/buildingexterior-1.jpg'
import image4 from '../../assets/img/logo.png'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container-fluid'>
            <div className="row justify-content-center blue-bg text-white">
                <h1 className='text-white text-center mt-3 mb-3'>About Us</h1>
            </div>
            <Execs />
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-12 ">


                    <div className='row bg-lighter-grey'>
                        <h1 className="text-center mt-3 mb-3">
                            Who We Are
                        </h1>
                        <div className="col-sm-12 col-md-12 col-lg-4 text-center">
                            <img src={image4} alt="Michael Smith" className='img-fluid mt-5' style={{ maxHeight: "500px" }} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <p>ENSYTE is a Texas-based company with great values and business ethics. We are a leading provider of natural gas management software (GMS) solutions, combining over 35 years of industry knowledge with the latest technology and a user-friendly, customer-focused approach.</p>

                            <p>ENSYTE’s Founder, Michael Smith, is credited by industry experts as one of the original founders of C/ETRM software, giving our company a level of experience with the complexities of the natural gas business that is unmatched. The ENSYTE team is an energized team of technical and project management professionals that in essence become an extension of our clients’ internal teams to ensure project success. We leverage a cross matrix organization to foster open channels of communication with our clients and access to all areas of expertise within our team.</p>
                            <p>ENSYTE’s focus is creating win-win projects with our clients that develop into successful long-term relationships. We offer total transparency with regards to pricing and long-term support, so that all costs are articulated up front with no surprises down the road. ENSYTE has a long-standing emphasis on technology, as opposed to billable hours, which translates into a significant investment of time and resources back into our products and allows us to offer a superior product at a cost-effective price point. Our contracting process is extremely flexible, and we work hard to ensure that minimal investment is needed long term to keep the software updated and on the latest technology.</p>
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center row-cols-1 row-cols-md-3 g-2 fs-5 text-center blue-bg text-white pb-5">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="card h-100 bg-transparent border-0 mt-5">

                            <div className="card-body">
                                <h3 className="card-title mb-3">Our Mission</h3>
                                <p className="card-text">To create and successfully implement software solutions that optimize performance, provide visibility, and minimize risk.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="card h-100 bg-transparent border-0 mt-5">

                            <div className="card-body">
                                <h3 className="card-title mb-3">ENSYTE Values</h3>
                                <ul className='no-bullets'>
                                    <li>We Value Truth and Transparency</li>
                                    <li>We Value Doing the Right Thing</li>
                                    <li>We Value Fulfilling Our Commitments</li>
                                    <li>We Value Fairness</li>
                                    <li>We Value Diversity</li>
                                    <li>We Value Gratitude</li>
                                    <li>We Value Having Fun</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="card h-100 bg-transparent border-0 mt-5">
                            <div className="card-body">
                                <h3 className="card-title mb-3">Our Vision</h3>
                                <p className="card-text">To provide World-Class Software and Services for the Natural Gas Value Chain</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className='row'>

                            <div className="col-sm-12 col-md-12 col-lg-9 mt-5 mb-5">
                                <h1 className="text-center">
                                    Our History
                                </h1>
                                <p>ENSYTE was incorporated in Texas in 1981 as Michael Smith & Associates, Inc. and operated under that name for a number of years in the U.S. The business expanded over the next 10-15 years to a significant level of operations, employing over 70 professional staff members in various locations worldwide. ENSYTE’s initial projects included substantial international work and an office location in Calgary, Canada.</p>

                                <p>In the mid-1990s, we changed our corporate name to ENSYTE, and the company continued building customized software solutions for a broad range of energy industry clients in the U.S., Canada, and Africa. ENSYTE began an initiative to bring its natural gas management product, GASTAR, to the latest Microsoft technology. The result is a solution with a flexible architecture designed for users by users, which translates into less screen clicks, less spreadsheets to manage, less systems to learn, less errors, and ultimately more efficiency. The software technology, which is based on our partnership with Microsoft, positions GASTAR to be the system of reference for years to come. GASTAR has been very well-received by the marketplace, with particular response to the organization and usability of the system, and has become the system of choice for natural gas transportation and distribution at some of the largest natural gas utilities in the United States.</p>
                            </div>
                            <div className="col-lg-3">
                                <img src={image2} alt="Michael Smith" className='img-fluid d-none d-lg-block' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* <div className="row justify-content-center text-center">
                <div className="col-sm-12 col-md-12 col-lg-12 mt-5 mb-5">
                    <NavLink to="/about"><button className="btn btn-lg btn-primary text-center">
                        Meet our Executive Team
                    </button></NavLink>
                </div>
            </div> */}
        </div >
    )
}

export default About;