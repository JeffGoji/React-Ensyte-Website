import React from 'react';

export default class Slide8 extends React.Component {

    render() {

        return (
            <div className='justify-content-center bg-white mt-2'>
                <div className="card text-black lightGradient imgBg7" style={{ minHeight: "600px" }}>
                    <div className='row justify-content-center'>
                        <div className='card bg-white bg-opacity-85 border-0 rounded mt-5' style={{ maxWidth: "65rem" }}>
                            <h3 className="card-title blue-text p-2 bg-opacity-75 blue-text">ENSYTE Adds GASTAR-LQ, a Liquids Storage Module for
                                NGL & LNG Product Management
                            </h3>
                            <p className="card-text">ENSYTE has recently enhanced GASTAR’s natural gas software solution with a new module to manage Natural Gas Liquids (NGL) and Liquified Natural Gas (LNG).</p>
                            <div className="mt-3 mb-3 text-center fs-5">
                                <h5 className='mt-2'>NGL / LNG Module Features:</h5>
                                <div className='fs-6'>
                                    <ul className='no-bullets list-padding'>
                                        <li>Daily Update of total Liquefaction, Vaporization and Gauged Ending Inventory with daily Boil-Off calculated.</li>
                                        <li>Contract Storage Inventory is balanced daily and reconciled against the total.</li>
                                        <li>Sales to 3rd Parties</li>
                                        <li>LNG Transfers</li>
                                        <li>Liquid for Natural Gas Exchanges</li>
                                        <li>A Truck Terminal Module</li>
                                        <li>Inventory Reporting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal2">Click Here to Learn More</button> */}
                    </div>

                </div >
            </div>

        )
    }
}