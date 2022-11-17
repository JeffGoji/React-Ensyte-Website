import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

// import image1 from '../../assets/img/oilfield-1.jpeg'

function Ebb() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row blue-bg">
                <h1 className="text-center text-white mt-3 mb-3">GASTAR Web Portal for Gas Suppliers Support for
                    Retail Transport Customers
                </h1>
            </div>
            <div className="row justify-content-center imgBg33">
                <div className="col-lg-8 col-md-12 col-sm-12 text-justify mt-5 text-center">
                    <h4 className="text-white">The GASTAR Electronic Bulletin Board (EBB)</h4>
                    <p className="mt-5 text-center text-white">Natural Gas Utilities are fanatics when it comes to Customer Services for internally supplied customers, as well as those customers that have elected to use an alternative natural gas Supplier / Marketer.   The Gas Utility has very high standards for helping its third party Suppliers maintain the customer service standards that it adopts for its managed customers.   This is the role that the GASTAR EBB plays for the utility and the supplier/marketer.   With implementations in some of the largest and best managed gas utilities, providing this service link to the suppliers is the GASTAR EBB’s mission.</p>
                    <p className="text-center text-white">
                        The GASTAR EBB supports the natural gas utilities’ mission critical retail choice programs for both firm and interruptible customers and suppliers/marketers.   The intention with the EBB is to create as much autonomy as possible so that customers, marketers, and suppliers can find information easily on their own and reduce dependence on the internal business team for administrative support.  The GASTAR EBB models are integrated at the data level to ensure that queries from internal and external Users operate on the same data structure.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-2 col-sm-8 text-center mb-2">
                        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal11">GASTAR EBB Features</button>
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
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR EBB Features</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-wrap">
                            <div className="row justify-content-center mb-5">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="card border-0">
                                        <div className="fs-6 p-3">
                                            <h3 className="blue-text text-center">Supplier/Marketer Pool Management </h3>
                                            <p>Suppliers/marketers manage most retail customers in one or more pools for each customer type—firm or interruptible.  In many cases, firm choice customers may be managed in either GASTAR or the utilities CIS program in order to post the daily demand for the pool.  All interruptible customers are managed in GASTAR as an aggregated pool or as a single nomination party.  Marketers can view and manage pool information, such as nominations, consumption, daily and monthly pool imbalances, rollup of cycle read data, pool total positions, and drill downs to individual customer information.</p>

                                            <h3 className="blue-text text-center mt-5">Gas Scheduling – Nomination and Confirmation Activity </h3>
                                            <p>Simplicity and responsive is the hallmark of the Gas Scheduling Module.ENSYTE is constantly looking for ways to improve scheduling efficiency.Several clients have implemented unique business processes for very large customers, including electricity generating facilities.For example, nomination changes hourly as necessary..</p>

                                            <h3 className="blue-text text-center mt-5 ">Informational Postings and Notifications </h3>
                                            <p>General public information postings of documents and messages, such as public broadcast messages, tariff updates, sign up information and other data relative to managing the end user transportation program.  Email notices can be triggered to provide a positive send/receipt control for critical notices.  Data files may be uploaded and/or downloaded via the EBB.</p>

                                            <h3 className="blue-text text-center mt-5">Customer Meter Setup / Customer Target Volumes </h3>
                                            <p>An interface to the utility’s Customer Information System (CIS) provides customer metrics including premise and meter setup information.  For firm customers, daily gas demand can be forecasted based on a weather forecast and a correlation between heating degree day (HDD) and consumption to generate a reliable firm pool forecast.  Interruptible customers are nominated daily based on historical consumption. </p>

                                            <h3 className="blue-text text-center mt-4">Pool Balancing (Residential / Commercial / Industrial) </h3>
                                            <p>Firm pool balancing tracks nominations vs. a provided pool demand per day with imbalances at month end calculated for penalties or as adjustments for a future period.  Interruptible pools are balanced daily with tiered imbalances calculated with penalties per day or aggregated to month end.  Penalty calculations are “equation” driven for maximum flexibility.   Imbalance calculations include adjustments for critical periods and interruptions with separate penalties for violating applicable rules. </p>

                                            <h3 className="blue-text text-center mt-4">Imbalance Trading </h3>
                                            <p>Daily and monthly imbalance trading occurs between suppliers where quantities are exchanged to achieve a preferred over/under imbalance position for each pool.  Imbalance trades are auto-confirmed with a 2 party process to minimize the utility’s administrative involvement.  After the imbalance trading window closes, the pools are recalculated to generate invoiceable tier penalties.</p>

                                            <h3 className="blue-text text-center mt-4">Pool and Customer Invoicing </h3>
                                            <p>Final pool or individual customer tier penalty calculations are approved, the settlement statement is processed in the GASTAR accounting module and enabled on the EBB.  Typically, the invoice is reviewed and approved for either direct issue to the counter party or interfaced back into the CIS system for transmittal to the supplier/marketer or direct customer. </p>

                                            <h3 className="blue-text text-center mt-4">Data Views & Reports </h3>
                                            <p>Marketers / Suppliers can easily view daily and monthly reports, as well as export to Excel for other internal uses.  Reports include daily consumption, daily and monthly pool rollup balances, capacity release reports, end of month imbalance calculations, and more.  ENSYTE supports custom reporting options, which offers maximum flexibility </p>

                                            <h3 className="blue-text text-center mt-4">Security</h3>
                                            <p>Password and User ID enabled security with expiring password reset options for authorized companies and Users.  A benefit of working with some of the industry’s most respected companies, the security options are world class.</p>

                                            <h3 className="blue-text text-center mt-4">Integration</h3>
                                            <p>GASTAR is delivered as in internal networked workstation and the external facing EBB with both systems operating from the same database.  In some cases, clients have used the EBB for internal support of the suppliers/marketers.    An internal development program is underway to migrate all workstation business functions to a new EBB system based on the latest software development options.  The GASTAR product is offered as a self or third party hosted solution on either ORACLE or Microsoft database platforms.  </p>

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
            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-overview"><h2 className="text-center">About GASTAR</h2></NavLink>
            </div>
        </div>



    )
}

export default Ebb;