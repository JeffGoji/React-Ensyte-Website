import img15 from '../../assets/img/linkedinholiday.jpg'

const A8 = () => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img15} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">Happy Holidays from ENSYTE!</h4>
                        <h6 className='text-center mt-3'>December 20th 2020</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal7">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal7" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">Happy Holidays from ENSYTE!</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img15} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                            </div>
                            <p>Happy Holidays to all our clients, partners, and friends!
                                <br />
                                <br />
                                We wish everyone a Wonderful Holiday Season and New Year.
                                <br />
                                <br />
                                ENSYTE is wrapping up the year with significant enhancements to the GASTAR Suite of Products, as well as continued growth of our client base.
                                <br />
                                <br />
                                We look forward to helping you streamline and automate your energy transactions in the new year.</p>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">ENSYTE Service Lines</h2>
                                <div className="card-body">
                                    <div className="row text-center">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <ul className="no-bullets"><h5>GASTAR Software Suite</h5>
                                                <li>Contract Management</li>
                                                <li>Pipeline / Points / Rates</li>
                                                <li>Gas Purchases / Sales</li>
                                                <li>Nominations / Scheduling</li>
                                                <li>Electronic Bulletin Boar</li>
                                                <li>Capacity Release</li>
                                                <li>Asset Management</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <ul className="no-bullets"><h5>Energy Software Solutions</h5>
                                                <li>Gas Balancing</li>
                                                <li>Production Accounting</li>
                                                <li>Production Allocation</li>
                                                <li>Land Management</li>
                                                <li>Inventory Management</li>
                                                <li>Gathering Systems</li>
                                                <li>Measurement Integration</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <ul className="no-bullets"><h5>Training & Support</h5>
                                                <li>Technology Updates</li>
                                                <li>Software Enhancements</li>
                                                <li>Unique Feature Requests</li>
                                                <li>Data Migration / Integration</li>
                                                <li>Training Refreshers</li>
                                                <li>Team Alignment</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <ul className="no-bullets"><h5>Consulting Services</h5>
                                                <li>Requirements Gathering</li>
                                                <li>Project Scope Formation</li>
                                                <li>Business Process Optimization</li>
                                                <li>Software Design</li>
                                                <li>Project Management</li>
                                                <li>Acquisition Integration</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default A8;