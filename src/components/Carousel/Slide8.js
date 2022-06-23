import React from 'react';

export default class Slide8 extends React.Component {

    render() {

        return (
            <div className='justify-content-center bg-white'>
                <div className="card text-black lightGradient imgBg7" style={{ minHeight: "600px" }}>
                    <h2 className="card-title mt-3 blue-text">ENSYTE Adds GASTAR-LQ, a Liquids Storage Module for
                        NGL & LNG Product Management
                    </h2>
                    <p className="card-text fs-4">ENSYTE has recently enhanced GASTAR’s natural gas software solution with a new module to manage Natural Gas Liquids (NGL) and Liquified Natural Gas (LNG).</p>
                    <div className="mt-4 mb-3 text-center fs-4">
                        <h3>NGL / LNG Module Features:</h3>
                        <div className='fs-4'>
                            <ul className='no-bullets p-2'>
                                <li>Daily Update of total Liquefaction, Vaporization and Gauged Ending Inventory with daily Boil-Off calculated.</li>
                                <li>Contract Storage Inventory is balanced daily and reconciled against the total.</li>
                                <li>Sales to 3rd Parties</li>
                                <li>LNG Transfers</li>
                                <li>Liquid for Natural Gas Exchanges</li>
                                <li>A Truck Terminal Module</li>
                                <li>Inventory Reporting</li>

                            </ul>
                        </div>
                        {/* <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal2">Click Here to Learn More</button> */}
                    </div>
                </div >
            </div>

        )
    }
}