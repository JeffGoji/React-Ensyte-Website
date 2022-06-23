import React from 'react';

export default class Slide9 extends React.Component {

    render() {

        return (
            <div className='justify-content-center'>
                <div className="card text-white lightGradient imgBg8 p-5" style={{ minHeight: "800px" }}>
                    <h1 className="card-title mt-5 lightblue-text">GASTAR-PS Solution for Producer Services
                    </h1>
                    <p className="card-text fs-3">ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:</p>
                    <div className="mt-3 mb-5 text-start fs-4">
                        <div className='text-start fs-4 mb-5'>
                            <ul>
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