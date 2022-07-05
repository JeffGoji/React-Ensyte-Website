import { useEffect } from "react";
import { NavLink } from 'react-router-dom'



function RetailChoice() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-white">
            <div className="row blue-bg">
                <h1 className="text-center mt-3 mb-3 text-white">GASTAR for Pipeline Transportation</h1>
            </div>
            <div className="row justify-content-center imgBg11">
                {/* <div className="col-lg-6 col-sm-12 text-center">
                    <img src={image1} alt="Product" className=' img-fluid' />
                </div> */}
                <div className="col-lg-10 col-md-12 col-sm-12 text-center text-white mt-5">
                    <p className="mt-3 fs-4">GASTAR provides an integrated pipeline transportation solution to support all transaction-related aspects of Shipper/Transporter business practices in compliance with NAESB standards. The solution includes a Customer Relationship Management (CRM) Module, which houses all customer information and works in tandem with a Contracts Management Module to manage all city gate suppliers, marketers, pooling tariff structures, LDC transportation customers, and any other business parties.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="card mt-3 mb-3 cardshadow">
                        <div className="card-header text-center blue-bg text-white"><h2>NatGas Pipeline Transportation Solutions</h2></div>
                        <div className="fs-6 p-2">
                            <h3 className="blue-text text-center mt-4">Customer Relationship Management & Contracts Management</h3>
                            <p>Optimize your midstream process by using GASTAR for Customer Relationship Management and Contracts Management. Our software provides an integrated pipeline transportation solution to support all transaction-related aspects of Shipper/Transporter business practices in compliance with NAESB standards. The solution includes a Customer Relationship Management (CRM) Module, which houses all customer information and works in tandem with a Contracts Management Module to manage all city gate suppliers, marketers, pooling tariff structures, LDC transportation customers, and any other business parties.</p>
                            <h3 className="blue-text text-center mt-4">Pipelines & Points</h3>
                            <p>GASTAR also features a comprehensive Pipeline & Points repository with the capability of handling the most complicated allocations network and usage among meters with different tariff gas. The system ties into a range of SCADA and measurement devices to allocate natural gas from designated</p>
                            <h3 className="blue-text text-center mt-4">Electronic Bulletin Board (Web Portal)</h3>
                            <p>The GASTAR Electronic Bulletin Board (EBB) supports nominations, scheduling, shipper notices, shipper measurement information, imbalance reporting, and invoice summary data. The EBB contains a Public Informational Postings (IP) component, compliant with NAESB data models and transaction standards, where customers can pull transactional reporting. The EBB interfaces to a parallel workstation Nominations and Scheduling Module for internal management, which contains added features for managing transactions (separate from the EBB client-oriented features) and permits retroactive data changes; whereas, the EBB prohibits transactions for any past date. The data entered in the workstation populates seamlessly into the EBB and vice versa.</p>
                            <h3 className="blue-text text-center mt-4">Capacity Release Management</h3>
                            <p>Another important feature for our pipeline customers is the GASTAR’s Capacity Release Management, which handles daily, monthly, yearly, and permanent activity with the ability to display Capacity Release by requester. Marketers can post capacity to the EBB in compliance with NAESB standards.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center imgBg11">
                {/* <div className="col-lg-6 col-sm-12 text-center">
                    <img src={image1} alt="Product" className=' img-fluid' />
                </div> */}
                <div className="col-lg-4 col-md-12 col-sm-12 text-justify text-white mt-3 fs-5">

                    <h2 className="text-center">GASTAR Pipeline features include:</h2>
                    <ul>
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


            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="/gastar-retail-gas"><h2 className="text-center">GASTAR for Retail Gas Marketing</h2></NavLink>
            </div>

        </div>

    )
}

export default RetailChoice;