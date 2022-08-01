import img13 from '../../assets/img/rig1.jpg'

const Article1 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row text-center blue-bg">
                    <h3 className="modal-title text-white center mt-3" id="staticBackdropLabel">ENSYTE Enhances Producer Services Solution</h3>
                </div>
                <div className='row justify-content-center'>
                    <div className="col-lg-8 col-md-12 col-sm-12 fs-6 text-wrap">
                        <div className="text-center mb-4">
                            <img src={img13} alt="Services Solutions" className='imgShadow img-fluid rounded mt-3' style={{ maxHeight: "35rem" }} />
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
                </div>
            </div>
        </>

    )
}

export default Article1;