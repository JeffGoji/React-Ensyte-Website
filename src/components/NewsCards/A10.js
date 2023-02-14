import img17 from '../../assets/img/gs-online.jpg'

const A10 = () => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img17} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">Introducing GASTAR Online</h4>
                        <h6 className='text-center mt-3'>November 1st 2019</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal9">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal9" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">Introducing GASTAR Online</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img17} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                            </div>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">Introducing GASTAR Online</h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p>ENSYTE announces the launch of GASTAR Online, a full suite of software applications for natural gas business processes. Mix and match software features from a fully integrated data and application model platform.</p>
                                            <ul>
                                                <li>Full Range of Automated Natural Gas Business Processes from Well to Customer Meters</li>
                                                <li>Quick and Easy Implementation of the Base Packages with Customization Available</li>
                                                <li>Secure, Reliable Infrastructure with An Established Hosting Partner</li>
                                                <li>Client Specific Implementation Assurance Plan for Maximum Benefit</li>
                                                <li>Computing Resources, Software Features and Dedicated Customer Support Included</li>
                                                <li>Low, Introductory Monthly Usage Fees with no Upfront License Fees</li>
                                            </ul>
                                            <p>GASTAR Online for Gas Supply and Gas Acquisition</p>
                                            <ul>
                                                <li>Counter Parties and Contracts</li>
                                                <li>NAESB Compliant Gas Purchases / Sales with WACOG Cost Tracking & Platt’s Interface</li>
                                                <li>Storage with WACOG Injection Cost, Full Value Withdrawal, and Typical Pool Attributes</li>
                                                <li>Nominations & Scheduling and Capacity Release Processes to Shadow the Pipeline Transactions</li>
                                                <li>Asset Management for Both Storage and Transportation Contracts</li>
                                                <li>City Gate Balancing Including SCADA and Weather Interface with Daily Gas Plan Tracking</li>
                                                <li>LNG & Propane Peaking Module with Purchases, Sales, and Storage Features</li>
                                                <li>Gas Accounting to Include Shadow G/L Accounts, Accrual, Invoicing and Expense Reconciliation</li>
                                                <li>Flexible MS Excel Exports for Ad Hoc Reporting and a Suite of KPI Reports</li>
                                            </ul>
                                            <p>GASTAR Online for Customer Retail Choice and End User Transportation</p>
                                            <ul>
                                                <li>Utilizes Standard GASTAR Contracts, Counter Party Modules from the Gas Acquisition System</li>
                                                <li>Shadow BA-CIS Module to Parallel Customer Attributes in the Client CIS System</li>
                                                <li>Import Cycle Read & Daily Read Measurement from Client Sources</li>
                                                <li>Setup Third Party Marketers as Agents or Pool Managers with EBB Web Portal Support</li>
                                                <li>Manage Flowing Gas Nominations via the EBB with Daily Validation of CG Pool Receipts</li>
                                                <li>Calculate Demand Statistics such as Baseload, Heat Load/HDD, Design Day, Capacity, Etc.</li>
                                                <li>Weather Import and Customer & Pool Gas Day Forecast for Cycle Read Business Processes</li>
                                                <li>Imbalance Settlement of Daily Read and Cycle Read Pools with Formulae Based Calculations</li>
                                                <li>Imbalance Trading on the EBB with full trading partner offers and trade confirmations</li>
                                                <li>Interruption Management Logic for Interruptible Transportation Customers</li>
                                                <li>Invoice Generation for Pool Mangers Either Issued Directly or Passed to the CIS System</li>
                                            </ul>
                                            <p>GASTAR Online for Producer Marketing Services</p>
                                            <ul>
                                                <li>Two Integrated Modules for Sales Business Processes and Net Back Revenue to Owner Interest</li>
                                                <li>Gas Sales Modules includes Features Available in the Gas Acquisition Suite</li>
                                                <li>Netback Revenue to Interest Owners Includes Gross Revenue, Deducts, and Net Revenue</li>
                                                <li>Gathering System Setup and Maintenance Including Laterals, Meters, and Facilities</li>
                                                <li>Pro-Rata and Directed Allocations of CDP Measurement to Well Meters over a Network</li>
                                                <li>EBB-Web Portal Support for Owner / Operators and WI/RI Owners as Participation Factors</li>
                                                <li>Measurement Data Capture via Interface to the Company Measurement Sources: Field Direct, EFM, Chart Reading Files, Etc.</li>
                                                <li>Pooling and Transportation Services for Third Party Shippers on Gathering Systems</li>
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

export default A10;