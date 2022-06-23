import React from 'react';

export default class Slide9 extends React.Component {

    render() {

        return (
            <div className='justify-content-center'>
                <div className="card text-white lightGradient imgBg8" style={{ minHeight: "700px" }}>
                    <h2 className="card-title mt-3 lightblue-text">GASTAR-PS Solution for Producer Services
                    </h2>
                    <p className="card-text fs-4">ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:</p>
                    <div className="mt-2 mb-5 text-start fs-5">
                        <div className='text-center fs-5 mb-2'>
                            <ul className='no-bullets'>
                                <li>Better Logic for Capturing Natural Gas Sales Netback Quantity and Value.</li>
                                <li>Better Identification of Imbalances at Interconnect Points between Pipelines and Gathering Systems.</li>
                                <li>Full Accounting for Buy/Sell, Transportation and Storage Transactions</li>
                                <li>Improved Reporting of Intra-Month Positions and Post Accounting Month Transaction Summary Data</li>
                                <li>Setup of Central Delivery Point (CDP) Forecast and daily updates automatically updating sales pools</li>

                            </ul>
                        </div>
                        <p className='text-center'>The goal of the enhancements is to provide a Producer Sales Module, along with an integrated Gathering Netback Module, that has the capability for netting back quantity (MMBTU) and value ($/MMBTU) and processing wellhead data to generate Owner Netback, as well as gas severance taxes per Operator total production.</p>

                    </div>
                </div >
            </div >
        )
    }
}