import { useEffect } from 'react';
import image1 from '../../assets/img/consulting-2.jpeg'
import image2 from '../../assets/img/consulting-services-02.jpg'

const Consulting = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className='container-fluid'>
            <div className='row blue-bg text-center'>
                <h1 className='text-center mt-3 mb-3 text-white'>ENSYTE Consulting Services</h1>
            </div>
            <div className='row text-center'>
                <div className='col-lg-8 col-md-12 col-sm-12 text-start p-2'>
                    <h2 className='text-center mt-5 mb-5'>NatGas Industry Experts</h2>
                    <p className='text-center'>As energy companies look at upgrading their software systems, the ENSYTE team lends its expertise to help analyze existing infrastructures and create go-forward strategies. Leveraging over 30 years of experience in natural gas supply, transportation, gathering, storage, marketing, and trading; the ENSYTE team identifies business processes early on to establish system requirements. From preliminary scoping and system reviews to comprehensive system implementation and project management, ENSYTE offers a range of services to companies looking at making a change.</p>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <img src={image1} alt='Solutions' className='img-fluid rounded imgShadow mt-3 mb-3 d-none d-lg-block' />
                </div>

            </div>

            {/* Row 2 */}

            <div className='row blue-bg text-white mt-5 mb-5'>

                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <img src={image2} alt='Solutions' className='img-fluid rounded mt-3 mb-3 d-none d-lg-block' />
                </div>
                <div className='col-lg-8 col-md-12 col-sm-12 text-start p-2'>
                    <h2 className='text-center mt-5 mb-5'>Consulting for Custom Solutions</h2>
                    <p className='text-center '>Companies that elect to build customized systems internally or revise legacy systems utilize ENSYTE specialists to guide work teams during the design and implementation. Providing pre-implementation scoping, developing a detailed project plan, and coordinating the achievement of deliverables all make a significant impact in the assurance of a successful project completion. In addition, ENSYTE now offers enhancement to clients who prefer to utilize their own in-house systems to bring the desired legacy products onto Microsoft’s latest technology platform.</p>
                </div>
            </div>
        </main>
    )
};

export default Consulting;