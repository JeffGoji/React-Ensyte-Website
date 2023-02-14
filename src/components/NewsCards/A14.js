import img21 from '../../assets/img/dataCenter.jpg'

const A14 = (props) => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img21} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Signs First GASTAR Online Client</h4>
                        <h6 className='text-center mt-3'>November 1st 2019</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal13">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal13" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Signs First GASTAR Online Client</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img21} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                            </div>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">ENSYTE Signs First GASTAR Online Client</h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p>We are excited to announce our first client for GASTAR Online, a hosted version of our GASTAR product, offered at a monthly subscription fee to smaller and mid-size companies. GASTAR Online provides smaller to mid-size companies a cost-effective alternative to traditional license-based pricing models, with flexible pricing structures so that the software can grow with your company.</p>
                                            <p>ENSYTE has partnered with Air Desk, a leading cloud technology provider for businesses world-wide, to offer the hosted software in a best-in-class operational environment with state of the art security defenses. The partnership offers the following benefits to GASTAR Online clients:</p>
                                            <p>Expertise</p>
                                            <ul>
                                                <li>Foundational leaders in establishing cloud service technology</li>
                                                <li>Advisors to the early adopters</li>
                                                <li>Partners with primary software vendors</li>
                                            </ul>
                                            <p>Experience</p>
                                            <ul>
                                                <li>Broad experience with a gamut of business applications and processes</li>
                                                <li>Valued partner with certified independent consultants who advise on cloud technology</li>
                                                <li>Access to cloud security teams at datacenters world-wide</li>
                                            </ul>
                                            <p>Systems</p>
                                            <ul>
                                                <li>Leading edge proprietary technology tuned to the paperless office</li>
                                                <li>State-of-the-art security defenses</li>
                                                <li>Service delivery engines optimized for the fastest user experience</li>
                                                <li>Fast anywhere anytime access to applications and data for mobile devices</li>
                                            </ul>
                                            <p>Click HERE to learn more about GASTAR Online..</p>
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

export default A14;