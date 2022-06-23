import React from 'react';

export default class Slide4 extends React.Component {

    render() {

        return (
            <div className='mt-3 justify-content-center'>
                <div className="card text-white darkGradient imgBg1 p-5" style={{ minHeight: "600px" }}>
                    <h1 className="card-title mt-5">ENSYTE Adds a Liquids Storage Module to GASTAR for
                        NGL & LNG Product Management</h1>
                    <p className="card-text fs-4">ENSYTE has recently enhanced GASTAR’s natural gas software solution with a new module to manage Natural Gas Liquids (NGL) and Liquified Natural Gas (LNG).  </p>
                    <h2 className="mt-5">NGL / LNG Module Features:</h2>
                    <div className="mt-3 mb-5 text-start fs-4">
                        <ul>
                            <li>Daily Update of total Liquefaction, Vaporization and Gauged Ending Inventory with daily Boil-Off calculated.</li>
                            <li>Contract Storage Inventory is balanced daily and reconciled against the total.</li>
                            <li>Sales to 3rd Parties</li>
                            <li>LNG Transfers</li>
                            <li>Liquid for Natural Gas Exchanges</li>
                            <li>Truck Terminal Module</li>
                            <li>Inventory Reporting</li>
                        </ul>


                    </div>

                </div>
            </div >
        )
    }
}