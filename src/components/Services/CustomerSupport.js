import { useEffect } from 'react';

import image1 from '../../assets/img/productImage.jpg'
import image2 from '../../assets/img/customer-support-02.jpg'

const CustomerSupport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className='container-fluid'>
            <div className='row blue-bg text-center'>
                <h1 className='text-center mt-3 mb-3 blue-bg text-white'>ENSYTE Customer Support</h1>
            </div>
            {/* First Row */}


            <h2 className='text-center mb-5 mt-5'>Why Are We The Best?</h2>
            <div className="row row-cols-1 row-cols-md-3  mb-5 blue-bg text-white">
                <div className="col">
                    <div className="card h-100 bg-transparent border-0 text-center">
                        <div className="card-body">
                            <h4 className="card-title mb-5">Project Management</h4>
                            <p className="card-text">ENSYTE utilizes Scrum Methodology to manage all implementations. The ENSYTE project team works very closely with the client team to ensure full understanding of all requirements and successful delivery of all functionality.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 bg-transparent border-0 text-center">
                        <div className="card-body">
                            <h4 className="card-title mb-5">Client Relationship</h4>
                            <p className="card-text">ENSYTE prides itself on having flourishing long-term relationships with clients, some for over 25 years. We work very closely with our client teams and in essence become an extension of their internal teams. We complete enhancements and projects for our clients every year, and our relationships with our clients are continually growing and improving.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 bg-transparent border-0 text-center">

                        <div className="card-body">
                            <h4 className="card-title mb-5">Niche Natural Gas Expertise</h4>
                            <p className="card-text">ENSYTE is highly specialized in the natural gas business and especially natural gas utilities, giving the ENSYTE team a unique set of expertise and focus. The GASTAR solution is able to handle the natural gas business processes better than any other system on the market today.</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* Second Row */}
            <div className='row bg-white text-center'>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <img src={image1} alt='Solutions' className='img-fluid rounded mt-3 mb-3 d-none d-lg-block' />
                </div>
                <div className='col-lg-8 col-md-12 col-sm-12 text-center p-2'>
                    <h2 className='text-center mb-5'>We Are Here To Support You</h2>
                    <p>ENSYTE utilizes a team approach to support client implementations and ongoing needs after implementation. The ENSYTE team consists of technically trained and experienced professionals who provide clients with focused analysis and recommendations – professionals with diverse backgrounds in natural gas business processes, project management, software development, programming, design, testing, and customer support. The support team is made up of in-house staff, affiliate staff and independent consultants with specialty expertise in specific subject matters. The goal of ENSYTE’s Client Support Team is to help our clients receive the most effective and efficient use of their ENSYTE software applications.</p>
                </div>
            </div>

            {/* Third Row */}
            <div className='row blue-bg text-center mt-5 mb-5'>
                <div className='col-lg-8 col-md-12 col-sm-12 text-center p-2 text-white'>
                    <h2 className='text-center mt-5 mb-5'>HelpDesk</h2>
                    <p>ENSYTE offers help desk support services during normal business hours (7AM to 5PM) Central Standard Time, as well as 24-hour support as a premium option to our annual maintenance fee. The ENSYTE team provides support through a collaborative online helpdesk portal that tracks support tickets and allows users to monitor progress of support ticket resolution. The portal fosters interaction with other users and IT managers to effectively resolve issues and streamline workflow.</p>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <img src={image2} alt='Solutions' className='img-fluid rounded imgShadow mt-3 mb-3 d-none d-lg-block' />
                </div>
            </div>
        </main>
    )
};

export default CustomerSupport;