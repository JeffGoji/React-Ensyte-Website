import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

import image1 from '../../assets/img/NaturalGasUtility.jpg'

function NaturalGas() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-white">
            <div className="row blue-bg">
                <h1 className="text-center mt-5 mb-5 text-white">GASTAR for Natural Gas Utility</h1>
            </div>
            <div className="row justify-content-center bg-lighter-grey mb-5">
                <div className="col-lg-4 col-sm-12 text-center">
                    <img src={image1} alt="Gas Utility" className=' img-fluid rounded imgShadow mt-5' style={{ maxHeight: "400px" }} />
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 text-justify">
                    <p className="mt-5">GASTAR is a fully integrated software solution for Gas Supply/Acquisition, Retail Customer Choice, Gas Control processes, and LNG/Propane peaking services. The product is the preferred natural gas management software for some of the largest natural gas utilities in the United States. GASTAR has been designed and refined over 35 years of working with Local Distribution Companies (LDCs). ENSYTE’s primary focus is the LDC market, and that concentration permeates through our entire corporate strategy, from hiring talent to investment in product development.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className=" col-lg-10 col-md-12 col-sm-12 text-justify p-3 mb-5 mt-5">

                    <h2 className="text-center">Integrated Natural Gas Management Software</h2>
                    <p>GASTAR is specifically designed with the concerns and priorities of the utility at the forefront – both from an upper management view and a user perspective. The outcome of that strategy is a solution that presents management with a high level summary of the key business issues, such as Cost of Gas Sold and Gas Value, and allows users to make quick decisions in terms of purchases, sales, scheduling, storage, and asset management. All GASTAR functionality is wrapped tightly with security and internal controls that have passed multiple audits from the most stringent audit firms.</p>

                </div>
            </div>
            <div className="row justify-content-center bg-lighter-grey mb-5 mt-5">
                <div className="col-sm-12 col-md-12 col-lg-10 p-3">

                    <h2 className="text-center">Multi-Utility Operations</h2>
                    <p>One of the key differentiators ENSYTE hears from our customers after the selection process is the flexibility of the software to handle different business practices, rather than forcing the customer to adapt business processes to the software, as is the case in so many competing software packages. The flexible architecture of the software has been of particular interest to our multi-company clients who need single instance support for multiple assets with differing business practices. There are no two utilities that have the same exact business practices, and GASTAR’s deployment experiences assure the client with multiple utilities or other assets that each can be effectively supported from the same platform.</p>
                </div>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="card mt-5 mb-5 border-1 imgShadow">
                        <div className="card-header text-center text-white blue-bg"><h2>GASTAR LDC Value Points</h2></div>
                        <div className="card-body fs-5">
                            <ul className="blue-dots check">
                                <li>Long-term, successful product with an established LDC footprint</li>
                                20+ years serving LDC clients in the United States

                                <li>Targeted features and processes driving financial and business efficiency</li>
                                Built from the “ground up” as a LDC software solution – not as a pipeline solution with LDC business features “tacked on”

                                <li>Thoroughly vetted by Internal Audit teams and Big 6 Accounting firms as a secure and SOX compliant software solution</li>
                                The transportation customer ‘Service Location’, the operator’s ‘Well Location,’ and ‘Attributes’ are setup directly from the LDC Premise & Meter List sub-module. In addition, the BTU Management and Weather Data features have been added to access that data from this sub-module. It provides access to the Premise and Meter data. Screen also provides a convenient location for assessing the Premises for a Marketer or pool.

                                <li>Comprehensive functionality proven in a number of high profile LDC clients</li>
                                Supports all LDC business functions: Gas Accounting, Contracts, Purchase and Sales, Nominations & Scheduling, Storage, Gas Supply Planning, City Gate Balancing, Retail Choice & Reporting

                                <li>A single solution for a set of common and dedicated features for each LDC</li>
                                Seamless, separate and secure transaction management for multiple LDCs within the same database structure, while supporting separate business processes. “No 2 LDCs are alike.”

                                <li>Lower overall cost of ownership for a superior LDC oriented software product</li>
                                Life cycle cost is anticipated to be substantially lower than those of ENSYTE’s primary competitors (Initial software license, implementation, and on-going support services)

                                <li>Personalized service promotes efficiency and full benefits from the investment</li>
                                Clients appreciate the dedicated support team and the personal approach to providing training and technical support.

                                <li>Obsolescence is not an issue nor is ongoing maintenance upgrades</li>
                                Built on current Microsoft technology with internal enhancement projects to stay up to date
                            </ul>

                        </div>
                    </div>
                </div>



                <div className="text-center p-5">
                    <NavLink className="btn btn-lg text-center btn-primary m-2" to="/gastar-pipeline"><h2 className="text-center">GASTAR for Pipeline Transportation</h2></NavLink>
                </div>
            </div>
        </div>
    )
}

export default NaturalGas;