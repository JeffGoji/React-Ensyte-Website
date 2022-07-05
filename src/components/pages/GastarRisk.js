import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import risk2 from '../../assets/img/risk-management.png'
import risk from '../../assets/img/erm-image.png'


const GastarRisk = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-white pb-4">
            <div className="row">
                <h1 className="text-center mt-5">Enterprise Risk Management</h1>
            </div>
            <div className="row justify-content-center mt-3 blue-bg">
                <div className="col-lg-6 col-sm-12 text-center">
                    <img src={risk} alt="Product" className='mt-0 mb-0 img-fluid' style={{ height: "25rem" }} />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-justify mt-5 text-white">

                    <p>GASTAR falls into the Enterprise Risk Management (ERM) classification of business systems with components of the software falling into all areas of risk management for an organization, from Operations Monitoring to Reporting, Compliance, and Communication. GASTAR gives full control, as well as transparency, of the company’s natural gas position at any time to enable better decision making and optimize the company’s business practices.</p>
                </div>
            </div>

            <div className='row justify-content-center mt-0 bg-lighter-blue'>
                <div className='col-lg-6 col-sm-12 '>
                    <div className="card border-0 mb-3 mt-4 bg-lighter-blue" style={{ maxwidth: "800px" }}>
                        <div className="row">
                            <div className="col-lg-7 col-md-12 col-sm-12">
                                <div className="card-body">
                                    <h5 className="card-title">GASTAR Enterprise Risk Management Activities:</h5>
                                    <ul className='p-2'>
                                        <li>Process Automation</li>
                                        <li>Streamlined Workflow</li>
                                        <li>Business Process Integrity</li>
                                        <li>Data Integrity</li>
                                        <li>Cyber Security / Data Security</li>
                                        <li>Full Visibility into Operations</li>
                                        <li>Daily View of Natural Gas Position</li >
                                        <li>Gas Supply Optimization & Forecasting</li>
                                        <li>Control of All Contract Terms with Suppliers / Marketers</li>
                                        <li>Nomination & Confirmation Process</li>
                                        <li>Daily Reconciliation</li>
                                        <li>Weather Forecasting & Target Generation</li>
                                        <li>Minimization of Weather-Related Impact</li>
                                        <li>Monthly Settlement Process</li>
                                        <li>Accurate & Auditable Financial Reporting</li>
                                        <li>Accounting Integrity</li>
                                        <li>User Logging and Auditing</li>
                                        <li>Reduction of Errors caused by Manual Entry</li>
                                        <li>Minimization of Credit Risk</li>
                                        <li>Minimization of Product Life Cycle Risk</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-4 col-sm-12">
                                <img src={risk2} alt="Product" className="img-fluid rounded-end p-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-value"><h2 className="text-center">GASTAR Value and benefit</h2></NavLink>
                <NavLink className="btn btn-lg text-center btn-primary" to="../gastar-hosting"><h2 className="text-center">GASTAR Hosting Options</h2></NavLink>
            </div>

        </div>
    )
}

export default GastarRisk;