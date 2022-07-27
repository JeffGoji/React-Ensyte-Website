import React from 'react';

export default class Slide9 extends React.Component {

    render() {

        return (
            <div className='justify-content-center mt-2'>
                <div className="card text-white lightGradient imgBg8" style={{ minHeight: "600px" }}>
                    <div className='row justify-content-center'>
                        <div className='card bg-black bg-opacity-50 m-2 w-75 border-0 rounded'>
                            <h3 className="card-title mt-5 lightblue-text">GASTAR-PS Solution for Producer Services
                            </h3>
                            <h4>ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:</h4>
                            <div className="mt-3 mb-5 text-start fs-6">
                                <div className='text-center fs-6 mb-5'>
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
                    </div>
                </div >
            </div >
        )
    }
}