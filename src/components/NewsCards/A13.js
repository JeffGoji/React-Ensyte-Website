import img20 from '../../assets/img/computers.jpg'
const A13 = (props) => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img20} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">Why is GASTAR™ the Preferred Solution?</h4>
                        <h6 className='text-center mt-3'>February 1st 2019</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal12">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal12" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">Why is GASTAR™ the Preferred Solution?</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img20} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                            </div>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">Why is GASTAR™ the Preferred Solution?</h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p>GASTAR is the preferred natural gas management software for some of the largest natural gas utilities in the United States, and we have put together a list of some of the top value points of the GASTAR solution.</p>
                                            <p><strong>GASTAR VALUE POINTS:</strong></p>

                                            <ul>
                                                <li>20+ years serving LDC clients in the United States</li>
                                            </ul>
                                            <p><strong>Benefit:</strong> Long term, successful product with an established LDC footprint</p>
                                            <ul>
                                                <li>Built from the “ground up” as a LDC software solution – not as a pipeline solution with LDC business features “tacked on”</li>
                                            </ul>
                                            <p><strong>Benefit:</strong> Targeted features and processes driving financial and business efficiency</p>
                                            <ul>
                                                <li>Thoroughly vetted by Internal Audit teams and Big 6 Accounting firms as a secure and SOX compliant software solution</li>
                                            </ul>
                                            <p><strong>Benefit:</strong> Credible internal controls and regulatory acceptance</p>
                                            <ul>
                                                <li>Supports all LDC business functions: Gas Accounting, Contracts, Purchase and Sales, Nominations & Scheduling, Storage, Gas Supply Planning, City Gate Balancing, Retail Choice & Reporting</li>
                                            </ul>
                                            <p><strong>Benefit:</strong> Comprehensive functionality proven in a number of high profile LDC clients</p>
                                            <ul>
                                                <li>Seamless, separate and secure transaction management for multiple LDCs within the same database structure, while supporting separate business processes. “No 2 LDC’s are alike.”</li>
                                            </ul>
                                            <p><strong>Benefit:</strong> A single solution for a set of common and dedicated features for each LDC</p>
                                            <ul>
                                                <li>Built on current Microsoft technology with internal enhancement projects to stay up to date</li>
                                            </ul>
                                            <p><strong>Benefit:</strong> Obsolescence is not an issue nor is ongoing maintenance upgrades</p>
                                            <ul>
                                                <li>Life cycle cost is anticipated to be substantially lower than those of ENSYTE’s primary competitors (Initial software license, implementation, and on-going support services)</li>
                                            </ul>
                                            <p><strong>Benefit:</strong> Lower overall cost of ownership for a superior LDC oriented software product.</p>
                                            <ul>
                                                <li>Clients appreciate the dedicated support team and the personal approach to providing training and technical support.</li>
                                            </ul>

                                            <p><strong>Benefit:</strong> Personalized service promotes efficiency and full benefits from the investment
                                                <br />
                                                Click HERE to learn more about GASTAR LDC..</p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default A13;