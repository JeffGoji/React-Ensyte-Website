import React from 'react';

export default class Slide7 extends React.Component {

    render() {

        return (
            <div className='justify-content-center bg-white mt-2'>
                <div className="card text-black lightGradient imgBg6 mt-0" style={{ minHeight: "600px" }}>
                    <h2 className="card-title mt-5 blue-text">Summer Updates for GASTAR-LDC for Natural Gas Utilities!</h2>
                    <p className="card-text fs-4 mt-4"> The ENSYTE Team has made significant enhancements to the GASTAR-LDC Solution, the industry’s most comprehensive natural gas software for natural gas utilities, including:</p>
                    <div className='text-center fs-5 mt-3'>
                        <ul className='no-bullets'>
                            <li>Security Module - Enhanced Flexibility to handle SQL Server, Windows, and Active Directory Authentication</li>
                            <li>Measurement Module - Enhanced Capability to Manage Hourly Read, Daily Read, and Cycle Read Data</li>
                            <li>Prior Period Adjustments (PPA) – Comprehensive Features & Flexibility in Handling Prior Period Adjustments</li>
                            <li>Auditing Functionality – User Views and Logs of all Changes & Associated Exemptions throughout the System</li>
                            <li>Data Interfaces – Wide Variety of Interfacing to Accounting, SAP, Weather, Measurement Pricing Systems & More!</li>
                            <li>Reporting – Reports Added for Nominations vs. Confirmations, Aggregate Consumption, City Gate Management, & More   </li>
                        </ul>


                    </div>

                </div>
            </div >

        )
    }
}