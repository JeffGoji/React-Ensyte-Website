import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

import image1 from '../../assets/img/Accounting.jpg'


const Accounting = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row blue-bg">
                <h1 className="text-center mt-3 mb-3 text-white">GASTAR For Gas Accounting</h1>
            </div>
            <div className="row justify-content-center imgBg32">
                <div className="col-lg-8 col-md-12 col-sm-12 text-center">
                    <p className="mt-6 text-white">The GASTAR Gas Accounting Solution provides a comprehensive auditable vendor invoice reconciliation and customer invoicing for off-system and on-system revenue transactions.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-2 col-sm-8 text-center mb-2">
                        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal-accounting">Features</button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-center mb-2" data-bs-toggle="modal" data-bs-target="#modal169"><button className="btn btn-warning btn-lg">Schedule a Demo</button>
                    </div>
                </div>
            </div>
            {/* Modal Begin */}
            <div className="modal fade" id="modal-accounting" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Gas Accounting</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-wrap text-center">
                            <div className="row justify-content-center mb-5">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <img src={image1} alt='data Article' className='rounded img-fluid imgShadow mb-4' />
                                    <div className="card border-0 text-start">
                                        <div className="card-body row justify-content-center">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="p-2">
                                                    <h4 className="blue-text text-center mb-4">GASTAR for Natural Gas Accountings</h4>
                                                    <p>The GASTAR Gas Accounting Solution provides a comprehensive auditable vendor invoice reconciliation and customer invoicing for off-system and on-system revenue transactions.

                                                        GASTAR contains the following features for reconciling monthly contract transactions:</p>

                                                    <ul className="list-padding">
                                                        <li>Shadow General Ledger Linking Setup – Sets up transaction linking rules for high and low level accounts for export to the GL System and for capturing operational summary data.</li>
                                                        <li>Summarized Data – Provides summarized data in accordance with the shadow General Ledger (GL) account structures and account transactions for export directly to the Company GL and/or CIS systems or to an excel file for upload. </li>
                                                        <li>Sub GL Account Detail – Detail for grouping contract transactions by Company defined subgroups, which provide transaction details at intermediate levels, such as gas purchases by type.</li>
                                                        <li>Transaction Linking Codes – Ability to build aggregated sub-totals for operational reporting, such as break out purchased gas totals into base load, swing, spot, for off system and other company defined categories. Other options are available for building intermediate contract level totals.</li>
                                                        <li>Determining Proforma Cash Flow Positions– Process expense and revenue contract transactions any time during the month to capture expected cash inflow/outflow obligations.  </li>
                                                        <li>Contraction Linking – Link contractions to low level account codes for rollup to the GL Account codes.</li>
                                                        <li>Error Log Generation – Generate an error log for all transactions that do not process.</li>
                                                        <li>Transaction Summary – Summarize transactions by Contract Type, such as Master Purchase/Sale, Pipeline and Storage.</li>
                                                        <li>Manual Insertion of Charges – Manually insert charges by account number that is not captured in the program, such as Cash In/Out, PPA updates and others that may not have a direct contract transaction during the month</li>
                                                        <li>Accrual Processing – Accrual processing 2-5 business days after month end close for a quick flash report of the month’s business including revenue and expenses.</li>
                                                        <li>Month End Transaction Locking – Month end accrual transaction locking prior to initiating invoice reconciliation. </li>
                                                        <li>Vendor Invoice Upload – Upload vendor invoice and calculation documents referenced to the voucher # and to the Contract and invoice month. </li>
                                                        <li>Vendor Expense Invoice Actualization – Reconcile invoiced expenses against GASTAR recorded contract transaction with ‘un-locking’ option for correcting GASTAR transactions as needed. </li>
                                                        <li>Excel Reports – Excel exports and other transaction summaries for internal company, PUC and other gas utility reporting requirements. </li>

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
                </div>
            </div>


            {/* <div className="row justify-content-center imgBg13">
                 <div className="col-lg-6 col-sm-12 text-center">
                    <img src={image1} alt="Product" className=' img-fluid' />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 text-justify text-white mt-3">
                </div>
            </div> */}
            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-overview"><h2 className="text-center">About GASTAR</h2></NavLink>
            </div>
        </div >

    )
}

export default Accounting;