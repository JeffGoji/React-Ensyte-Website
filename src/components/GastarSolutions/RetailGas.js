import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

// import image1 from '../../assets/img/CustomerRetailChoice.jpg';
import image2 from '../../assets/img/pipelines.jpg'

const RetailGas = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row blue-bg">
                <h1 className="text-center mt-3 mb-3 text-white">GASTAR For Retail Gas Marketing</h1>
            </div>
            <div className="row justify-content-center imgBg24">
                <div className="col-lg-7 col-md-12 col-sm-12 text-center mt-5">
                    <p className="mt-5 text-white">GASTAR provides an integrated pipeline transportation solution to support all transaction-related aspects of Shipper/Transporter business practices in compliance with NAESB standards. The solution includes a Customer Relationship Management (CRM) Module, which houses all customer information and works in tandem with a Contracts Management Module to manage all city gate suppliers, marketers, pooling tariff structures, LDC transportation customers, and any other business parties.
                    </p>
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
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Features for Oil & Gas Downstream Marketing</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-wrap">
                            <div className="row justify-content-center mb-5">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="card border-0">

                                        <div className="p-2">
                                            <h3 className="blue-text text-center mb-4">Contracts & Accounting Management</h3>
                                            <p>GASTAR supports the marketing of natural gas through an integrated set of modules, focused on six core areas:</p>
                                            <ul>
                                                <li>Customer Acquisition</li>
                                                <li>Demand and Sales Forecasting</li>
                                                <li>Gas Supply and Financial Positions</li>
                                                <li>LDC Interface</li>
                                                <li>Invoicing and Collections</li>
                                                <li>Financial Reports.</li>
                                            </ul>

                                            <p>For the Retail Marketer, GASTAR manages the attraction and retention of customers through an interactive website (Electronic Bulletin Board), which automates the customer sign up process and ongoing communication. Customers have easy access to daily burn information and other reports without having to rely on staff support. A robust Contracts Module provides the flexibility to manage all business relationships including Suppliers, Pooling Tariff Structures, and Transportation Customers.</p>

                                            <p>GASTAR provides a seamless interface to local distribution systems through which marketers can manage physical scheduling, real time demand positioning, management of allocations, and deliveries for accurate imbalance positions (daily and monthly). The solution also manages wholesale supply deals and financial transactions / hedges. Accurate forecasting is essential for the gas marketer, and GASTAR supports this requirement through the integration of load forecasting and weather data into growth forecasts, as well as the calculation of mass-market volumetric positions using standard retail risk factors. The system then aggregates both wholesale and retail physical / financial positions.</p>


                                            <p>GASTAR’s Accounting Module has the ability to process and distribute thousands of retail invoices, including cycle billing, one bill, and sales bills. Billing information is sent to Accounts Receivable for collections and General Ledger (G/L) reporting. GASTAR tracks imbalance trading and invoicing, and performs final settlement for physical, financial, and other transactions.</p>



                                            {/* <div className="col-lg-6 col-sm-12 text-center">
                    <img src={image1} alt="Product" className=' img-fluid' />
                </div> */}
                                            <div className="row mt-5 mb-5 justify-content-center m-1 bg-lighter-grey rounded">


                                                <div className="col-lg-6">
                                                    <h3 className="mb-3 blue-text">GASTAR Marketer Features:</h3>
                                                    <ul>
                                                        <li>Customer Relationship Manager (CRM)</li>
                                                        <li>Contracts Management</li>
                                                        <li>Demand/Sales Forecasting</li>
                                                        <li>Supply Deals</li>
                                                        <li>Financial Positioning</li>
                                                        <li>LDC Interface</li>
                                                        <li>Physical Scheduling</li>
                                                        <li>Real Time Demand Positioning</li>
                                                        <li>Allocations & Imbalance Positions</li>
                                                        <li>Aggregation of Positions</li>
                                                        <li>Monthly Demand Profiles</li>
                                                        <li>Daily Measurement</li>
                                                        <li>Monthly Cycle Measurement</li>
                                                        <li>Margin Analysis</li>
                                                        <li>Settlement</li>
                                                        <li>Invoicing</li>
                                                        <li>G/L Reporting</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-5">
                                                    <img src={image2} alt="Marketer Features" className="img-fluid rounded imgShadow mt-5" />
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

            {/* Modal End */}

            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-overview"><h2 className="text-center">About GASTAR</h2></NavLink>
            </div>

        </div>

    )
}

export default RetailGas;