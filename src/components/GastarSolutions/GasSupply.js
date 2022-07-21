
import { useEffect } from "react";
import { NavLink } from 'react-router-dom'
// import image1 from '../../assets/img/gas-supply.png';

// import image1 from '../../assets/img/CustomerRetailChoice.jpg'

function GasSupply() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row blue-bg">
                <h1 className="text-center mt-3 mb-3 text-white">GASTAR Gas Supply</h1>
            </div>
            <div className="row imgBg23 darkGradient justify-content-center">
                <div className="col-lg-6 col-md-12 col-sm-12 text-white text-center mt-6 rounded">
                    <h2 className='text-center mb-4'>Natural Gas Supply & Gas Acquisition</h2>
                    <p className="text-center">The Gas Acquisition System manages all business processes associated with the purchase, off-system sales, transportation, storage, and accounting of natural gas for the sales service side of the utility. GASTAR couples NAESB-compliant master purchase and sales contracts with NAESB-compliant nominations and scheduling to support all ‘off-system’ transactions, including storage, related gas accounting, and the interface of General Ledger (GL) data to corporate billing/accounting systems.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-2 col-sm-8 text-center mb-2">
                        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal11">Features</button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-center mb-2" data-bs-toggle="modal" data-bs-target="#modal169"><button className="btn btn-warning btn-lg">Schedule a Demo</button>
                    </div>
                </div>
            </div>
            {/* Modal Begin */}
            <div className="modal fade" id="modal11" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Features for Gas Supply & Gas Acquisition</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="row justify-content-center mb-5 ">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="card border-0">
                                        <div className="card-body">
                                            <ul className="blue-dots check">
                                                <span><li>Counter Parties & Contracts</li></span>
                                                <li>Gas Purchases & Sales</li>
                                                NAESB Compliant Gas Purchases / Sales with WACOG Cost Tracking & Platt’s Interface

                                                <li>Nominations and Scheduling</li>
                                                This module is NAESB compliant and supports scheduling for operated and non-operated pipelines. Typical business functions include gathering, operated interstate, storage, and non-operated interstate pipelines. It supports extensive pooling transactions on a pipeline and also typical park/loan, banking, shipper balancing, no-notice and other business practices. Electronic Bulletin Board (EBB) web-based component for managing end-user nominations of marketers, producers, and customers.

                                                <li>EDI Shipper Nominations</li>
                                                GASTAR includes a manual backup for the EDI system so that schedulers can easily insert nominations into the pipeline’s Electronic Bulletin Board (EBB).
                                                <li>Capacity Release</li>
                                                Pipeline operators likely release firm transportation capacity to marketers for the transportation of gas to transportation customers. GASTAR manages the release of firm demand capacity.
                                                Asset Management Capacity Releases
                                                Seasonal Capacity Releases
                                                Month to Month Capacity Releases

                                                <li>Asset Management</li>
                                                For both Storage and Transportation Contracts

                                                <li>City Gate Balancing</li>
                                                Including SCADA & Weather Interface with Daily Gas Plan Tracking

                                                <li>LNG & Propane Peaking Module</li>
                                                Includes Purchases, Sales, and Storage Features
                                                <li>Demand Forecasting</li>
                                                Key features to display customer demand statistics; Demand forecasting algorithms that are far superior compared to traditional regression analysis or neural programming techniques for estimating customer demand.
                                                <li>Storage Management</li>
                                                Includes contracts with shippers, rate structures, nominations into and out of storage, no-notice injections and withdrawals for marketers and large end use customers.
                                                <li>Storage Operations</li>
                                                This module supports non-operated and operated storage transactions including injection, withdrawal, and daily WACOG calculations for inventory cost management. For operated facilities, logic is embedded to test nominations against ratchet levels based on time of inventory.
                                                <li>Pipeline Point Imbalance Management</li>
                                                GASTAR provides a comprehensive pipeline imbalance management feature, which is based on the individual needs of our clients.
                                                <li>Purchase Pathing - WACOG Calculations</li>
                                                GASTAR has features for tracking purchase cost along transportation routes for calculating WACOG gas costs delivered to the City Gate.
                                                <li>Gas Accounting</li>
                                                To Include Shadow G/L Accounts, Accrual, Invoicing and Expense Reconciliation
                                                <li>Reporting</li>
                                                Flexible MS Excel Exports for Ad Hoc Reporting and a Suite of KPI Reports
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
            {/* Modal End */}

            {/* Original below:
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-lg-4 col-sm-12 text-center">
                    <img src={image1} alt="Product" className=' img-fluid imgShadow rounded m-2' style={{ maxHeight: "300px" }} />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 mt-5 mb-5 ">
                    <h2 className='text-center'>Natural Gas Supply & Gas Acquisition</h2>
                    <p className="fs-5">The Gas Acquisition System manages all business processes associated with the purchase, off-system sales, transportation, storage, and accounting of natural gas for the sales service side of the utility. GASTAR couples NAESB-compliant master purchase and sales contracts with NAESB-compliant nominations and scheduling to support all ‘off-system’ transactions, including storage, related gas accounting, and the interface of General Ledger (GL) data to corporate billing/accounting systems.</p>
                </div>
            </div> */}
            {/* <div className="row justify-content-center mt-5 mb-5 ">
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="card border-0">
                        <div className=" mt-5 text-center"><h2>GASTAR Features for Gas Supply & Gas Acquisition</h2></div>
                        <div className="card-body fs-5">
                            <ul className="blue-dots check">
                                <span><li>Counter Parties & Contracts</li></span>
                                <li>Gas Purchases & Sales</li>
                                NAESB Compliant Gas Purchases / Sales with WACOG Cost Tracking & Platt’s Interface

                                <li>Nominations and Scheduling</li>
                                This module is NAESB compliant and supports scheduling for operated and non-operated pipelines. Typical business functions include gathering, operated interstate, storage, and non-operated interstate pipelines. It supports extensive pooling transactions on a pipeline and also typical park/loan, banking, shipper balancing, no-notice and other business practices. Electronic Bulletin Board (EBB) web-based component for managing end-user nominations of marketers, producers, and customers.

                                <li>EDI Shipper Nominations</li>
                                GASTAR includes a manual backup for the EDI system so that schedulers can easily insert nominations into the pipeline’s Electronic Bulletin Board (EBB).
                                <li>Capacity Release</li>
                                Pipeline operators likely release firm transportation capacity to marketers for the transportation of gas to transportation customers. GASTAR manages the release of firm demand capacity.
                                Asset Management Capacity Releases
                                Seasonal Capacity Releases
                                Month to Month Capacity Releases

                                <li>Asset Management</li>
                                For both Storage and Transportation Contracts

                                <li>City Gate Balancing</li>
                                Including SCADA & Weather Interface with Daily Gas Plan Tracking

                                <li>LNG & Propane Peaking Module</li>
                                Includes Purchases, Sales, and Storage Features
                                <li>Demand Forecasting</li>
                                Key features to display customer demand statistics; Demand forecasting algorithms that are far superior compared to traditional regression analysis or neural programming techniques for estimating customer demand.
                                <li>Storage Management</li>
                                Includes contracts with shippers, rate structures, nominations into and out of storage, no-notice injections and withdrawals for marketers and large end use customers.
                                <li>Storage Operations</li>
                                This module supports non-operated and operated storage transactions including injection, withdrawal, and daily WACOG calculations for inventory cost management. For operated facilities, logic is embedded to test nominations against ratchet levels based on time of inventory.
                                <li>Pipeline Point Imbalance Management</li>
                                GASTAR provides a comprehensive pipeline imbalance management feature, which is based on the individual needs of our clients.
                                <li>Purchase Pathing - WACOG Calculations</li>
                                GASTAR has features for tracking purchase cost along transportation routes for calculating WACOG gas costs delivered to the City Gate.
                                <li>Gas Accounting</li>
                                To Include Shadow G/L Accounts, Accrual, Invoicing and Expense Reconciliation
                                <li>Reporting</li>
                                Flexible MS Excel Exports for Ad Hoc Reporting and a Suite of KPI Reports
                            </ul>

                        </div>
                    </div>
                </div>
            </div> */}
            {/* Original below
            <div className="row justify-content-center bg-lighter-grey mt-5 mb-5 ">
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="card imgShadow">
                        <div className="card-header text-center text-white blue-bg"><h2>GASTAR Features for Gas Supply & Gas Acquisition</h2></div>
                        <div className="card-body fs-5">
                            <ul className="blue-dots check">
                                <span><li>Counter Parties & Contracts</li></span>
                                <li>Gas Purchases & Sales</li>
                                NAESB Compliant Gas Purchases / Sales with WACOG Cost Tracking & Platt’s Interface

                                <li>Nominations and Scheduling</li>
                                This module is NAESB compliant and supports scheduling for operated and non-operated pipelines. Typical business functions include gathering, operated interstate, storage, and non-operated interstate pipelines. It supports extensive pooling transactions on a pipeline and also typical park/loan, banking, shipper balancing, no-notice and other business practices. Electronic Bulletin Board (EBB) web-based component for managing end-user nominations of marketers, producers, and customers.

                                <li>EDI Shipper Nominations</li>
                                GASTAR includes a manual backup for the EDI system so that schedulers can easily insert nominations into the pipeline’s Electronic Bulletin Board (EBB).
                                <li>Capacity Release</li>
                                Pipeline operators likely release firm transportation capacity to marketers for the transportation of gas to transportation customers. GASTAR manages the release of firm demand capacity.
                                Asset Management Capacity Releases
                                Seasonal Capacity Releases
                                Month to Month Capacity Releases

                                <li>Asset Management</li>
                                For both Storage and Transportation Contracts

                                <li>City Gate Balancing</li>
                                Including SCADA & Weather Interface with Daily Gas Plan Tracking

                                <li>LNG & Propane Peaking Module</li>
                                Includes Purchases, Sales, and Storage Features
                                <li>Demand Forecasting</li>
                                Key features to display customer demand statistics; Demand forecasting algorithms that are far superior compared to traditional regression analysis or neural programming techniques for estimating customer demand.
                                <li>Storage Management</li>
                                Includes contracts with shippers, rate structures, nominations into and out of storage, no-notice injections and withdrawals for marketers and large end use customers.
                                <li>Storage Operations</li>
                                This module supports non-operated and operated storage transactions including injection, withdrawal, and daily WACOG calculations for inventory cost management. For operated facilities, logic is embedded to test nominations against ratchet levels based on time of inventory.
                                <li>Pipeline Point Imbalance Management</li>
                                GASTAR provides a comprehensive pipeline imbalance management feature, which is based on the individual needs of our clients.
                                <li>Purchase Pathing - WACOG Calculations</li>
                                GASTAR has features for tracking purchase cost along transportation routes for calculating WACOG gas costs delivered to the City Gate.
                                <li>Gas Accounting</li>
                                To Include Shadow G/L Accounts, Accrual, Invoicing and Expense Reconciliation
                                <li>Reporting</li>
                                Flexible MS Excel Exports for Ad Hoc Reporting and a Suite of KPI Reports
                            </ul>

                        </div>
                    </div>
                </div>
            </div> */}
            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-overview"><h2 className="text-center">About GASTAR</h2></NavLink>
            </div>

        </div >

    )
}

export default GasSupply;