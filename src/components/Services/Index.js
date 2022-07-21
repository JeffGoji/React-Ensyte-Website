import { useEffect } from 'react';

import image1 from '../../assets/img/customer-support.jpg'


const CustomSolutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className='container-fluid'>
            <div className='row blue-bg text-center'>
                <h1 className='text-white mt-3 mb-3'>ENSYTE Customized Solutions</h1>
            </div>
            <div className='row bg-white text-center mb-6'>

                <div className='col-lg-5 col-md-12 col-sm-12'>
                    <img src={image1} alt='Solutions' className='img-fluid rounded imgShadow mt-6' />
                </div>
                <div className='col-lg-5 col-md-12 col-sm-12 text-start mt-6'>
                    <p>Our Customized Software Solutions manage oil and gas business transactions for all participants along the natural gas supply chain – from the wellhead to the burner tip. We recognize that every company is different and may have unique requirements that may not fit into the parameters of an ‘out of the box’ solution, so the ENSYTE Team works with clients to leverage our flexible technology architecture into tailor-made software systems.</p>

                    <p>ENSYTE’s roots grew out of large-scale customized software implementations throughout the U.S., Canada, Europe, and Africa. The GASTAR product was first developed and deployed for several natural gas utilities in Canada, as well as an integrated gas processing and field production model for a major exploration and production company. ENSYTE has also provided customized solutions for pipeline gathering systems and gas processing facilities. ENSYTE was recently contracted to develop a customized natural gas and liquids scheduling system to support 20 aggregated supply locations, several gas processing plants, and offshore production platforms. The ENSYTE Team developed real-time data capture software and an optimization scheduling process that supported intraday, daily, and future generation of optimal gas schedules from the integrated facilities. The intraday nominations for this application were made at any time of the day and could change multiple times.</p>

                    <p>ENSYTE offers customized modules as integrated components to the standardized GASTAR product. ENSYTE is currently implementing a customized Retail Billing Module for one utility client and an Electricity Module for another. The Electricity Module provides transaction support, ISO Report management, and accounting integration. The ENSYTE Team has extensive expertise in all categories of oil and gas transactions, from the point of origination to the point of sale, and all the exchanges in between. We lend this expertise to our clients to design the best software system for their business.</p>
                </div>
            </div>
        </main>
    )
};

export default CustomSolutions;