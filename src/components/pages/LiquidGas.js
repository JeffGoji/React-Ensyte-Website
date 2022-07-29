import React from 'react'
import { NavLink } from 'react-router-dom'

class LiquidGas extends React.Component {
    render() {
        return (
            <div className="container-fluid text-white">
                <div className="row blue-bg text-center">
                    <h1 className='text-white text-center mt-3 mb-3 '>GASTAR Liquids Storage Module for
                        NGL & LNG Product Management</h1>
                </div>
                <div className='row justify-content-center imgBg31'>
                    <div className="col-lg-6 col-md-12 col-sm-12 text-white text-center mt-5 rounded">
                        <h2 className='mb-4'>GASTAR Liquids Storage Module for
                            NGL & LNG Product Management</h2>

                        <p>The GASTAR-LQ Solution manages Natural Gas Liquids (NGL) and Liquified Natural Gas (LNG) business processes with the following features:
                            Daily Update of Total Liquefaction, Vaporization and Gauged Ending Inventory with Daily Boil-Off Calculations;
                            Daily Balancing & Reconciliation of Contract Storage Inventory;
                            Sales to Third Parties
                            LNG Transfers
                            Liquid for Natural Gas Exchanges
                            A Truck Terminal Module
                            Inventory Reporting
                            Reconciliation of Contract Transactions
                            Settlement

                            The GASTAR-LQ Module can be implemented as a stand-alone solution for any company managing NGL, by product, or LNG, or the module can be integrated into a fully functional natural gas management solution dealing with flowing natural gas and the liquid components.</p>

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
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Liquids Storage Module for NGL & LNG Product Management</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-wrap">
                                <div className="row justify-content-center mb-5">
                                    <div className="col-lg-12 col-md-12 col-sm-12 text-justify">
                                        <div className="card border-0">
                                            <div className="row justify-content-center">
                                                <div className="card-body">
                                                    <div className="row justify-content-center">
                                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                                            <div className="mt-3 mb-3">
                                                                <div className="p-2">
                                                                    <h4 className='text-center mb-3'>The GASTAR-LQ Solution manages Natural Gas Liquids (NGL) and Liquified Natural Gas (LNG) business processes with the following features:</h4>
                                                                    <ul className="list-padding">
                                                                        <li>Daily Update of Total Liquefaction, Vaporization and Gauged Ending Inventory with Daily Boil-Off Calculations</li>
                                                                        <li>Daily Balancing & Reconciliation of Contract Storage Inventory</li>
                                                                        <li>Sales to Third Parties – The operating business entity may sell LNG to Buyers and deliver through a truck terminal, via weight differential or metered volume, and issue an Invoice for Accounting</li>
                                                                        <li>LNG Transfers – LNG transfers can be tracked among any party with storage inventory updated as appropriate.  Transfers are used to track most changes to Contract inventory as a transfer simply changes the balance in the pools.  A Transfer out is generally a 3rd party transfer to another party through the truck terminal</li>
                                                                        <li>Liquid for Natural Gas Exchanges – Setup of specialty transfer with a capacity holder, with financial considerations, to conduct a physical swap with a counter party of LNG liquid for natural gas on a connecting pipeline;</li>
                                                                        <li>A Truck Terminal Module – Supports receipt and delivery of LNG for third party contract holders and for Operator sales transactions.  Fee variable may be applied per contract terms to secure a revenue position in each transfer; </li>
                                                                        <li>Inventory Reporting – Physical (total) LNG inventory is updated daily, along with the virtual inventory held by the Operator and each contract party.  Reporting includes:
                                                                            <ul>
                                                                                <li>Daily and Month to Date Beginning Inventory</li>
                                                                                <li>Injections to Storage</li>
                                                                                <li>Withdrawals</li>
                                                                                <li>Gauged inventory</li>
                                                                                <li>Boil-Off Calculated as the difference between Beginning Inventory and the Measured Net inventory Changes</li>
                                                                            </ul>
                                                                        </li>

                                                                        <li>Reconciliation of Contract Transactions – For Third Party and Operator transactions, contract transactions are reconciled daily for quantity and monthly for settlement and processing in the Accounting Module.</li>
                                                                        <li>Settlement – All contract transactions are cross linked to GASTAR shadow account numbers for settlement at the client’s LNG Facility Business unit.  </li>
                                                                    </ul>
                                                                    <p>The GASTAR-LQ Module can be implemented as a stand-alone solution for any company managing NGL, by product, or LNG, or the module can be integrated into a fully functional natural gas management solution dealing with flowing natural gas and the liquid components. </p>
                                                                </div>
                                                            </div>
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
                </div>
                <div className="text-center p-5">
                    <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-overview"><h2 className="text-center">About GASTAR</h2></NavLink>
                </div>
            </div>

        )
    }
}

export default LiquidGas