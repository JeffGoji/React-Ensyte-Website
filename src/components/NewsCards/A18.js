import img25 from '../../assets/img/Accounting.jpg'
const A18 = (props) => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img25} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">GASTAR Gas Accounting Module</h4>
                        <h6 className='text-center mt-3'>September 1st 2022</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal16">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal16" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Gas Accounting Module</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img25} alt="Accounting Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "25rem" }} />
                            </div>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">GASTAR Gas Accounting Module</h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p>ENSYTE’s GASTAR Gas Accounting Module provides auditable vendor invoice reconciliation and customer invoicing for off-system and on-system revenue transactions. </p>
                                            <p>The Module contains the following features for reconciling end of month gas acquisition contract transactions: </p>

                                            <ul className="list-padding">
                                                <li>General Ledger Linking Setup </li>
                                                <li>Summarized Data </li>
                                                <li>Sub GL Account Detail </li>
                                                <li>Transaction Linking Codes </li>
                                                <li>Contract Transaction Processing </li>
                                                <li>Contraction Linking </li>
                                                <li>Error Log Generation </li>
                                                <li>Transaction Summary </li>
                                                <li>Accrual Processing </li>
                                                <li>Mond End Transaction Locking </li>
                                                <li>Reconciled Processing </li>
                                                <li>Expense & Revenue Transaction Rollup </li>
                                                <li>Account Review </li>
                                                <li>Manual Insertion of Charges</li>
                                                <li>Revenue Invoice Process</li>
                                                <li>Invoice Detail Preview</li>
                                                <li>Invoice Approval</li>
                                                <li>Contract Summary</li>
                                                <li>Voucher Numbers</li>
                                                <li>Partial Approval</li>
                                                <li>Manual Adjustments of Rounding Errors</li>
                                                <li>Vendor Invoice Upload</li>
                                                <li>Invoice Charge Approval</li>
                                                <li>Approvals & Locking</li>
                                                <li>Excel Reports</li>


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

export default A18;