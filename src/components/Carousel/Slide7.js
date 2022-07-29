import React from 'react';

import { NavLink } from 'react-router-dom'

export default class Slide7 extends React.Component {

    render() {

        return (
            <div className='justify-content-center bg-white mt-2'>
                <div className="card text-black text-center imgBg6 mt-0" style={{ minHeight: "600px" }}>
                    <div className='row justify-content-center'>
                        <div className='card bg-light bg-opacity-85 mt-6' style={{ maxWidth: "65rem" }}>
                            <h3 className="card-title blue-text">Summer Updates for GASTAR-LDC for Natural Gas Utilities!</h3>
                            <h4 className="card-text mt-4"> The ENSYTE Team has made significant enhancements to the GASTAR-LDC Solution, the industry’s most comprehensive natural gas software for natural gas utilities, including:</h4>
                            <div className='text-center fs-6 mt-3'>
                                <ul className='no-bullets list-padding'>
                                    <li><b>Security Module</b> - Enhanced Flexibility to handle SQL Server, Windows, and Active Directory Authentication</li>
                                    <li><b>Measurement Module</b> - Enhanced Capability to Manage Hourly Read, Daily Read, and Cycle Read Data</li>
                                    <li><b>Prior Period Adjustments</b> (PPA) – Comprehensive Features & Flexibility in Handling Prior Period Adjustments</li>
                                    <li><b>Auditing Functionality</b> – User Views and Logs of all Changes & Associated Exemptions throughout the System</li>
                                    <li><b>Data Interfaces</b> – Wide Variety of Interfacing to Accounting, SAP, Weather, Measurement Pricing Systems & More!</li>
                                    <li><b>Reporting</b> – Reports Added for Nominations vs. Confirmations, Aggregate Consumption, City Gate Management, & More   </li>
                                </ul>
                            </div>
                        </div>
                        <div className='text-center'>
                            <NavLink to="/gastar-natural-gas">
                                <button className='btn btn-primary btn-small mt-3 mb-2'>Click Here to Learn More</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}