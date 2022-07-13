import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import img1 from "../../assets/img/CloudHosting.jpg"
import img2 from "../../assets/img/Diamond-mask-1.png"

const GastarHosting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-white pb-4">
            <div className="row justify-content-center blue-bg">
                <h1 className="text-center mt-4 mb-4 text-white">GASTAR Hosting</h1>
            </div>
            <div className="row mt-5 justify-content-center">
                {/* <div className="col-lg-6 col-sm-12 text-center">
                    <img src={img1} alt="Hosting Options" className='img-fluid rounded-3 mb-5 imgShadow' style={{ maxWidth: "90%" }} />
                </div> */}
                <div className="col-lg-10 col-sm-12 text-justify mb-5">
                    <div className="card border-2 mb-3 cardshadow rounded-4">
                        <div className="card-header blue-bg"><h3 className="card-title text-center text-white">GASTAR Hosting Options</h3></div>
                        <div className="card-body bg-white">
                            <div className="text-center">
                                <img src={img1} alt="Hosting Options" className='img-fluid' style={{ maxWidth: "90%" }} />
                            </div>
                            <p>ENSYTE offers flexible options with regards to hosting environments for GASTAR. We have clients who house GASTAR on their own environment, as well as clients that host the solution using other services such as Amazon Web Services (AWS). ENSYTE also partners with Cyberlink ASP to provide a hosted environment for GASTAR for a monthly fee.</p>
                            <ul className="list justify-content-center">
                                <li>Client-Owned Environment</li>
                                <li>ENSYTE Hosted Environment</li>
                                <li>Other Hosting Services (Amazon Web Services, Azure, etc.)</li>
                            </ul>
                        </div>
                        <div className="card-header blue-bg"><h3 className="card-title text-center text-white">ENSYTE Hosted Environment Value</h3></div>
                        <div className="card-body bg-white align-self-center">
                            <h3 className="text-center mt-3">Expertise</h3>
                            <ul>
                                <li>Foundational leaders in establishing cloud service technology</li>
                                <li>Advisors to the early adopters</li>
                                <li>Partners with primary software vendors</li>
                            </ul>
                            <h4 className="card-title text-center mt-5">Experience</h4>

                            <ul>
                                <li>
                                    Broad experience with a gamut of business applications and processes
                                </li>
                                <li>Valued partner with certified independent consultants who advise on cloud technology</li>
                                <li>Access to cloud security teams at datacenters worldwide</li>
                            </ul>
                            <h3 className="text-center mt-5">Systems</h3>
                            <ul>
                                <li>Leading edge proprietary technology tuned to the paperless office</li>
                                <li>State-of-the-art security defenses</li>
                                <li>Service delivery engines optimized for the fastest user experience</li>
                                <li>Fast anywhere anytime access to applications and data for mobile devices</li>
                            </ul>
                            <h3 className="text-center mt-5">Processes</h3>
                            <ul>
                                <li>Proprietary workflow software</li>
                                <li>Streamlined onboarding processes for seamless migration</li>
                                <li>All customer data is replicated to geo-redundant data centers and is encrypted in transit and at rest.</li>
                            </ul>
                            <h3 className="text-center mt-5">Customer Service</h3>
                            <ul>
                                <li>CLE-accredited instruction on cloud security and paperless workflow</li>
                            </ul>
                            <h3 className="text-center mt-5">Cost Savings</h3>
                            <ul>
                                <li>Unique services strategy lowers customer costs and improves customer profitability</li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='row mt-5 mb-5 blue-bg'> */}
            <div className="row mt-5 blue-bg">
                <h2 className="text-center text-white mt-2 mb-2">ENSYTE Hosted Environment Security Protocols</h2>
            </div>

            <div className='row justify-content-center bg-lighter-grey mb-5'>

                <div className="col-lg-6 col-sm-12 text-center">
                    <img src={img2} alt="ENSYTE Hosted Environment Security Protocols" className='img-fluid' style={{ maxWidth: "90%" }} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 bg-lighter-grey'>

                    <div className='card border-0 bg-lighter-grey' style={{ justifyContent: "center" }}>

                        <ul>
                            <li>Dedicated facilities</li>
                            <li>2 Factor Authentication access</li>
                            <li>Security officer and team</li>
                            <li>Public facing attack detection and prevention</li>
                            <li>American Institute of CPAs</li>
                            <li>(AICPA) Certified</li>
                            <li>Cloud Security Alliance (CSA)</li>
                            <li>Cloud Controls Matrix (CCM)</li>
                            <li>Service Organization Control</li>
                            <li>(SOC) AICPA SOC 2</li>
                            <li>PCI, HIPAA, SOX Audited</li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="text-center mt-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-risk"><h2 className="text-center">Risk Management</h2></NavLink>
                <NavLink className="btn btn-lg text-center btn-primary" to="../gastar-security"><h2 className="text-center">Data Security</h2></NavLink>
            </div>
        </div >

    )
}

export default GastarHosting