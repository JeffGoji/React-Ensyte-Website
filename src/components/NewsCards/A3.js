import img12 from '../../assets/img/customized-solutions-02.jpg'
const A3 = () => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img12} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Enriches GASTAR User Interface and Dashboards</h4>
                        <h6 className='text-center mt-3'>December 1st 2022</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal3">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Enriches GASTAR User Interface and Dashboards</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6">
                            <div className="text-center mb-4">
                                <img src={img12} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                            </div>
                            <p>ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:
                                Better Logic for Capturing Natural Gas Sales Netback Quantity and Value;
                                Better Identification of Imbalances at Interconnect Points between Pipelines and Gathering Systems;
                                Full Accounting for Buy / Sell, Transportation and Storage Transactions;
                                Improved Reporting of Intra- Month Positions and Post Accounting Month Transaction Summary Data;
                                Setup of Central Delivery Point(CDP) Forecast and daily updates automatically updating sales pools.
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

        </div>)
}

export default A3;