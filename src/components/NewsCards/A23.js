
import img from '../../assets/img/HG-01.jpeg'

const A22 = () => {
    return (
        <div>
            <div className="col h-100">
                <div className="card mb-5 h-100" >
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Wins Natural Gas Utility / Midstream Client</h4>
                        <h6 className='text-center mt-3'>April 1st 2023</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal23">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal23" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Wins Natural Gas Utility / Midstream Client</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxWidth: '350px' }} />

                            </div>
                            <p>ENSYTE was selected by a natural gas company in West Virginia to implement the GASTAR product to manage the company’s natural gas utility and associated midstream / gathering assets.</p>
                            <p>
                                The implemented solution underscores GASTAR’s ability to handle the full range of business processes across the energy value chain – from wellhead to burner tip.
                            </p>
                            <p>The following modules will be delivered as part of the integrated software solution:
                            </p>

                            <ul>
                                <li><u>Deals</u> – Physical Natural Gas Purchases, Sales, Confirmations, Asset Management</li>
                                <li><u>Hedging</u> – Price Indices, Price Volatility Hedging-Futures, Swaps & Call Options</li>
                                <li><u>Off System Nominations & Scheduling</u> – Capacity Release and Storage</li>
                                <li><u>On System Nominations & Scheduling</u> – Gathering Shippers and Large Customers or Agents</li>
                                <li><u>Large Customers & Measurement Data Capture</u> – Interface to Company Systems, Hourly, Daily and Monthly Time Steps, Capture PPA Changes, Measurement Error Detection on Import</li>
                                <li><u>DCQ Customer Settlement</u> – Large Customer Imbalance Calculations and Settlement with Invoice Determinants</li>
                                <li><u>On System Pipeline & Gathering</u></li>
                                <li><u>Wellhead Purchase</u></li>
                                <ul>
                                    <li>Well Meter Purchases, Meter Maintenance, Meter Linking for Potential Allocation Networks, Volume and Energy (BTU Factors), Owner Split of Revenue and Expenses </li>
                                    <li>Well Meter Purchase and Gathering Invoice Determinants with PPA Processing for Measurement, Rates & Other Attributes</li>
                                </ul>
                                <li><u>Accounting</u></li>
                                <ul>
                                    <li>Accounting Sub-Ledger: Shadow Accounts for all Revenue and Expense Account Levels</li>
                                    <li>AR & AP Processing for Charge Validation and Reporting</li>
                                    <li>Interfaces for Invoicing & Other Data</li>

                                </ul>
                            </ul>
                            <p>
                                The project is scheduled for completion by the end of this year with other assets to be added subsequently.
                            </p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default A22;