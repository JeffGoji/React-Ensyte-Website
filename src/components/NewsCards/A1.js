import img13 from '../../assets/img/rig1.jpg'

const A1 = () => {
    return (
        <>
            <div className="col" >
                <div className="card mb-5 h-100">
                    <div className="card-header text-center blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img13} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Enhances Producer Services Solution</h4>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal19">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal19" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Enhances Producer Services Solution</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img13} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "35rem" }} />

                            </div>
                            <p>ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:</p>
                            <ul>
                                <li>Better Logic for Capturing Natural Gas Sales Netback Quantity and Value;</li>
                                <li>Better Identification of Imbalances at Interconnect Points between Pipelines and Gathering Systems;</li>
                                <li>Full Accounting for Buy / Sell, Transportation and Storage Transactions;</li>
                                <li>Improved Reporting of Intra- Month Positions and Post Accounting Month Transaction Summary Data;</li>
                                <li>Setup of Central Delivery Point(CDP) Forecast and daily updates automatically updating sales pools.</li>
                            </ul>
                            <p>
                                The goal of the enhancements is to provide a Producer Sales Module, along with an integrated Gathering Netback Module, that has the capability for netting back quantity(MMBTU) and value($ / MMBTU) and processing wellhead data to generate Owner Netback, as well as gas severance taxes per Operator total production.

                                <br />
                                <br />
                                The solution also includes automated Prior Period Adjustment(PPA) calculations with application PPA to current month statements.ENSYTE has significant experience in this area with over 30 years of development work for oil and gas production companies and gathering systems.A recent implementation of the software manages approximately 6, 000 natural gas wells and approximately 400 producers.
                                <br />
                                <br />
                                GASTAR Producer Services Solution Features:
                                <br />
                                <br />
                            </p>
                            <ul className='fs-6'>

                                <li>Wellhead Purchase Contracts</li>
                                <li>Metering, Volume Tracking</li>
                                <li>Production Allocation</li>
                                <li>Well Participating Interest</li>
                                <li>Gas Imbalance Tracking & Reporting</li >
                                <li>Nomination & Scheduling for Gathering</li >
                                <li>Net - Back Calculations</li >
                                <li>WH Purchase settlements Reporting</li >
                                <li>Producer Communication Web Portal</li >
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default A1;