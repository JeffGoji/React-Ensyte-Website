import img24 from '../../assets/img/img24.jpeg'
const A17 = (props) => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img24} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Adds New Reports to GASTAR</h4>
                        <h6 className='text-center mt-3'>November 1st 2022</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal15">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal15" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Adds New Reports to GASTAR</h3>

                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img24} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "25rem" }} />
                            </div>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">ENSYTE Adds New Reports to GASTAR</h2>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p>ENSYTE has added several reports to the GASTAR Solution to help natural gas utilities manage their natural gas business process:</p>

                                            <ul className="list-padding">
                                                <li>Supplier Information Listing Report</li>
                                                <li>Nomination/Confirmation Difference Report at Supplier Level for Firm and Interruptible Pools</li>
                                                <li>Monthly Confirmed Delivery by Contract Report </li>
                                                <li>Estimated and Actual Cashout Reports for Firm and Interruptible Pools </li>
                                                <li>Estimated and Actual Daily Firm & Interruptible Volumes Report</li>
                                                <li>Supplier’s Imbalance Trade Report</li>
                                                <li>Customer List at Supplier Level</li>
                                                <li>System Level Interface Exceptions Report</li>
                                                <li>Storage Inventory Report</li>
                                                <li>Physical Purchase and Sales Deals Report </li>
                                                <li>Interstate Nominations Summary</li>

                                            </ul>
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

export default A17;