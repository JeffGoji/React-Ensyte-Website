import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

// import image1 from '../../assets/img/pipes1.jpg'

function RetailChoice() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row blue-bg">
                <h1 className="text-center mt-3 mb-3 text-white">GASTAR For Pipeline Transportation</h1>
            </div>
            <div className="row justify-content-center imgBg11 ">
                <div className="col-lg-7 col-md-12 col-sm-12 text-center">
                    <p className="mt-6 text-center text-white">GASTAR provides an integrated pipeline transportation solution to support all transaction-related aspects of Shipper/Transporter business practices in compliance with NAESB standards. The solution includes a Customer Relationship Management (CRM) Module, which houses all customer information and works in tandem with a Contracts Management Module to manage all city gate suppliers, marketers, pooling tariff structures, LDC transportation customers, and any other business parties.
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
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Features for NatGas Pipeline Transportation Solutions</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-wrap">
                            <div className="row justify-content-center mb-5 mt-5">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="card border-0 mb-5">
                                        <div className="p-2">
                                            <h4 className="blue-text text-center">Customer Relationship Management & Contracts Management</h4>
                                            <p>Optimize your midstream process by using GASTAR for Customer Relationship Management and Contracts Management. Our software provides an integrated pipeline transportation solution to support all transaction-related aspects of Shipper/Transporter business practices in compliance with NAESB standards. The solution includes a Customer Relationship Management (CRM) Module, which houses all customer information and works in tandem with a Contracts Management Module to manage all city gate suppliers, marketers, pooling tariff structures, LDC transportation customers, and any other business parties.</p>
                                            <h4 className="blue-text text-center mt-5">Pipelines & Points</h4>
                                            <p>GASTAR also features a comprehensive Pipeline & Points repository with the capability of handling the most complicated allocations network and usage among meters with different tariff gas. The system ties into a range of SCADA and measurement devices to allocate natural gas from designated</p>
                                            <h4 className="blue-text text-center mt-5">Electronic Bulletin Board (Web Portal)</h4>
                                            <p>The GASTAR Electronic Bulletin Board (EBB) supports nominations, scheduling, shipper notices, shipper measurement information, imbalance reporting, and invoice summary data. The EBB contains a Public Informational Postings (IP) component, compliant with NAESB data models and transaction standards, where customers can pull transactional reporting. The EBB interfaces to a parallel workstation Nominations and Scheduling Module for internal management, which contains added features for managing transactions (separate from the EBB client-oriented features) and permits retroactive data changes; whereas, the EBB prohibits transactions for any past date. The data entered in the workstation populates seamlessly into the EBB and vice versa.</p>
                                            <h4 className="blue-text text-center mt-5">Capacity Release Management</h4>
                                            <p>Another important feature for our pipeline customers is the GASTAR’s Capacity Release Management, which handles daily, monthly, yearly, and permanent activity with the ability to display Capacity Release by requester. Marketers can post capacity to the EBB in compliance with NAESB standards.</p>

                                        </div>
                                        <div className="row justify-content-center mt-5 mb-5 m-1 bg-lighter-grey rounded">
                                            {/* <div className="col-lg-6 col-sm-12 text-center">
                                <img src={image1} alt="Product" className=' img-fluid' />
                            </div> */}
                                            <div className="col-lg-12 col-md-12 col-sm-12 text-justify mt-3 mb-3">
                                                <h2 className="text-center">GASTAR Pipeline Features Include:</h2>
                                                <ul className="check">
                                                    <li>Customer Relationship Manager (CRM)</li>
                                                    <li>Security</li>
                                                    <li>NAESB Compliant</li>
                                                    <li>Pipeline / Points Network</li>
                                                    <li>SCADA / Measurement Interface</li>
                                                    <li>Nominations & Scheduling</li>
                                                    <li>Electronic Bulletin Board (EBB)</li>
                                                    <li>Energy EDI</li>
                                                    <li>Capacity Release</li>
                                                    <li>Storage Tracking</li>
                                                    <li>Pipeline System Balancing</li>
                                                    <li>Purchase Pathing</li>
                                                    <li>Gas Accounting</li>
                                                    <li>Reporting & Dashboards</li>
                                                </ul>
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

export default RetailChoice;