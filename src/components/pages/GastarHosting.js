import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import img1 from "../../assets/img/CloudHosting.jpg"
import img2 from "../../assets/img/Diamond-mask-1.png"

const GastarHosting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid pb-4">
            <div div className="row justify-content-center blue-bg" >
                <h1 className="text-center mt-3 mb-3 text-white">GASTAR Hosting</h1>
            </div >
            <div className="row mt-3 justify-content-center">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <img src={img1} alt="Hosting Options" className='img-fluid' style={{ maxWidth: "90%" }} />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 text-justify">
                    <h3 className="text-center">GASTAR Hosting Options</h3>
                    <p className="mt-3">ENSYTE offers flexible options with regards to hosting environments for GASTAR. We have clients who house GASTAR on their own environment, as well as clients that host the solution using other services such as Amazon Web Services (AWS). ENSYTE also partners with Cyberlink ASP to provide a hosted environment for GASTAR for a monthly fee.</p>
                    <ul className="list justify-content-center">
                        <li>Client-Owned Environment</li>
                        <li>ENSYTE Hosted Environment</li>
                        <li>Other Hosting Services (Amazon Web Services, Azure, etc.)</li>
                    </ul>
                </div>
            </div>
            <div className="row blue-bg justify-content-center">
                <div className="card blue-bg border-0 mt-4 text-white" style={{ maxWidth: "60rem" }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 col-sm-12 text-justify mb-5">
                            <h3 className="text-center">ENSYTE Hosted Environment Value</h3>
                            <h5 className=" mt-5 text-center">Expertise</h5>
                            <ul>
                                <li>Foundational leaders in establishing cloud service technology</li>
                                <li>Advisors to the early adopters</li>
                                <li>Partners with primary software vendors</li>
                            </ul>
                            <h5 className="mt-5 text-center">Experience</h5>
                            <ul>
                                <li>
                                    Broad experience with a gamut of business applications and processes
                                </li>
                                <li>Valued partner with certified independent consultants who advise on cloud technology</li>
                                <li>Access to cloud security teams at datacenters worldwide</li>
                            </ul>
                            <h5 className="mt-5 text-center">Systems</h5>
                            <ul>
                                <li>Leading edge proprietary technology tuned to the paperless office</li>
                                <li>State-of-the-art security defenses</li>
                                <li>Service delivery engines optimized for the fastest user experience</li>
                                <li>Fast anywhere anytime access to applications and data for mobile devices</li>
                            </ul>
                            <h5 className="mt-5 text-center">Processes</h5>
                            <ul>
                                <li>Proprietary workflow software</li>
                                <li>Streamlined onboarding processes for seamless migration</li>
                                <li>All customer data is replicated to geo-redundant data centers and is encrypted in transit and at rest.</li>
                            </ul>
                            <h5 className=" mt-5 text-center">Customer Service</h5>
                            <ul>
                                <li>CLE-accredited instruction on cloud security and paperless workflow</li>
                            </ul>
                            <h5 className=" mt-5 text-center">Cost Savings</h5>
                            <ul>
                                <li>Unique services strategy lowers customer costs and improves customer profitability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center ">
                <h3 className="text-center mt-4">ENSYTE Hosted Environment Security Protocols</h3>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-12 col-sm-12 text-justify">
                                    <img src={img2} alt="ENSYTE Hosted Environment Security Protocols" className='img-fluid mt-5' style={{ maxWidth: "100%" }} />
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 text-justify">
                                    <ul className="check mt-5">
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
                    </div>
                </div>
            </div>

            <div className="text-center mt-2">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-risk"><h2 className="text-center">Risk Management</h2></NavLink>
                <NavLink className="btn btn-lg text-center btn-primary" to="../gastar-security"><h2 className="text-center">Data Security</h2></NavLink>
            </div>
        </div>


    )
}

export default GastarHosting