import React from 'react';

import { NavLink } from 'react-router-dom';

export default class Slide9 extends React.Component {

    render() {

        return (
            <div className='justify-content-center mt-2'>
                <div className="card lightGradient imgBg8" style={{ minHeight: "600px" }}>
                    <div className='row justify-content-center'>
                        <div className='card bg-white bg-opacity-85 mt-7 border-0 rounded' style={{ maxWidth: "65rem" }}>
                            <h3 className="card-title blue-text">GASTAR-PS Solution for Producer Services
                            </h3>
                            <h5>ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:</h5>
                            <div className="mt-3 text-start fs-6">
                                <div className='text-center fs-6'>
                                    <ul className='no-bullets list-padding'>
                                        <li>Better Logic for Capturing Natural Gas Sales Netback Quantity and Value.</li>
                                        <li>Better Identification of Imbalances at Interconnect Points between Pipelines and Gathering Systems.</li>
                                        <li>Full Accounting for Buy/Sell, Transportation and Storage Transactions</li>
                                        <li>Improved Reporting of Intra-Month Positions and Post Accounting Month Transaction Summary Data</li>
                                        <li>Setup of Central Delivery Point (CDP) Forecast and daily updates automatically updating sales pools</li>
                                    </ul>
                                </div>
                                <p className='text-center p-3'>The goal of the enhancements is to provide a Producer Sales Module, along with an integrated Gathering Netback Module, that has the capability for netting back quantity (MMBTU) and value ($/MMBTU) and processing wellhead data to generate Owner Netback, as well as gas severance taxes per Operator total production.</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <NavLink to="/gastar-natgas-producer">
                                <button className='btn btn-primary btn-small mt-3 mb-2'>Click Here to Learn More</button>
                            </NavLink>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}