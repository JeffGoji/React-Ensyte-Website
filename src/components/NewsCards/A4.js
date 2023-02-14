import img4 from '../../assets/img/computers.jpg'
const A4 = () => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img4} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Delivers GASTAR for Largest Natural Gas Utility in New Jersey</h4>
                        <h6 className='text-center mt-3'>May 1st 2022</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal4">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Delivers GASTAR for Largest Natural Gas Utility in New Jersey</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6">
                            <div className="text-center mb-4">
                                <div className="text-center mb-4">
                                    <img src={img4} alt="Services Solutions" className='imgShadow img-fluid rounded' />

                                </div>
                            </div>
                            <p> ENSYTE has recently completed its implementation of GASTAR’s Retail Choice Suite of Modules for the largest gas and electric utility company in New Jersey, cementing GASTAR’s reputation as the industry’s most comprehensive integrated software solution for the natural gas supply chain.The addition of this Local Distribution Company(LDC) to GASTAR’s existing industry leading clients is a testament to the company’s breadth of knowledge of natural gas business processes, as well as the extensive functionality provided by the product for utility and related businesses.
                                < br /> <br />
                                The system went live in September 2021, in accordance with the original project schedule, replacing a legacy software system, as well as multiple spreadsheets with an integrated data model and application environment.The joint teams worked closely together over the period of the project to conduct an extensive Discovery phase, outline and agree to all the requirements, and deliver modules for testing on a milestone - based schedule that was managed using the Scrum / Agile project management methodology.The schedule included a parallel period, during which System Integration Testing(SIT) was validated and the legacy system was turned off.
                                < br /> <br />
                                On time and budget delivery of the GASTAR solution is a true testament to the collaboration and dedication of both the ENSYTE and Client implementation teams.The availability and engagement of the client teams for the projects is paramount and enabled the ENSYTE team to effectively translate business / workflow requirements into delivered software features.
                                < br /> <br />
                                Notable project deliverables include, among others:
                            </p>
                            <ul>
                                <li>Data integration with a SAP CIS system for managing 100,000+/- firm retail customers;</li>
                                <li>Web Portal for suppliers with extensive notification, nomination, imbalance trading and monthly settlement with invoice generation and interface back to SAP;</li>
                                <li>Support for COGEN facilities with hourly measurement capture and any-time nominations;</li>
                                <li>Support for LNG peaking services including maintaining inventory positions;</li>
                                <li>Support for City Gate balancing with multiple natural gas sources and distributions;</li>
                                <li>Support for Non-Firm (DCQ) Daily Pools with Tiered Imbalances, Interrupts and Critical Day.</li>
                            </ul>
                            <p>ENSYTE is excited to further broaden its client footprint, as well as adding to and improving GASTAR’s functionality for managing large / complex business processes for another top tier client.  The implementation took place on the client’s Amazon Web Services (AWS) cloud account, which broadens ENSYTE’s capacity to offer a variety of hosting options for clients.  ENSYTE also supports self-hosting as well as hosting for clients on it dedicated cloud platform, offered through CyberLink Solutions.
                                <br /><br />
                                ENSYTE is excited to announce the completion of its implementation of GASTAR as an integrated gas management system for the largest utility in New Jersey, with over 1.8 million natural gas customers.  The software went live on September 1, 2021, which was the original Go Live date in the project schedule.
                                <br /><br />
                                The project kicked off with a 2 month Discovery Phase, during which the teams met and outlined all the different areas of the system and any customizations needed.  The joint ENSYTE / client teams worked closely for the remainder of the project, utilizing the Scrum Methodology, to deliver the GASTAR modules on a milestone basis to address all requirements.
                                <br />
                                Can you possibly give a summary of the project here?
                                <br /><br />
                                The implemented solution includes interfaces for weather, SCADA, BTU, Platt’s Gas Daily, and customer information through SAP, to provide and support an integrated approach to management’s oversight.
                                <br /><br />
                                The implemented GASTAR product provides the following functionality:
                            </p>
                            <ul>
                                <li>Provide Supplier Pool Forecast from 100,000+ Firm Customers</li>
                                <li>Support Non-Firm (DCQ) Daily Pools with Tiered Imbalances, Interrupts and Critical Day</li>
                                <li>Support COGEN Facilities with Hourly Measurement Import and Nominations</li>
                                <li>Support City Gate Balancing and Daily Planning for Weather Impact</li>
                                <li>Import SAP Transportation Customers and Export Billing Determinants</li>
                                <li>Nominations & Scheduling Web Portal for 3rd Party Suppliers</li>
                            </ul>
                            <p>ENSYTE is excited to continue broadening its client footprint, as well as all the additional functionality that was added to the product over the course of the project.  The project also marks the first time the GASTAR Solution was delivered on Amazon Web Services (AWS), broadening ENSYTE’s capability for hosting options, which also include hosting through ENSYTE’s hosted solutions partner, Cyberlink, hosting on a client environment, or any other hosted environment.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default A4;