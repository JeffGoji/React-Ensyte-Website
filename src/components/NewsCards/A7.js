import img6 from '../../assets/img/customized-solutions-01.jpg'


const A7 = () => {
    return (
        <div>

            <div className="col h-100">
                <div className="card mb-5 h-100" >
                    <div className="card-header blue-bg text-white">FEATURED / <i className="fa fa-hacker-news" aria-hidden="true"></i> RELEASE</div>
                    <div className="card-body">
                        <img src={img6} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Enhances Producer Services Solution</h4>
                        <h6 className='text-center mt-3'>March 1st 2022</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal6">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal6" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Enhances Producer Services Solution</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img6} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                            </div>
                            <p> ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:</p>
                            <ul>
                                <li>Better Logic for Capturing Natural Gas Sales Netback Quantity and Value;</li>
                                <li>Better Identification of Imbalances at Interconnect Points between Pipelines and Gathering Systems;</li>
                                <li>Full Accounting for Buy/Sell, Transportation and Storage Transactions</li>
                                <li>Improved Reporting of Intra-Month Positions and Post Accounting Month Transaction Summary Data</li>
                                <li>Setup of Central Delivery Point (CDP) Forecast and daily updates automatically updating sales pools</li>
                            </ul>
                            <p>The goal of the enhancements is to provide a Producer Sales Module, along with an integrated Gathering Netback Module, that has the capability for netting back quantity (MMBTU) and value ($/MMBTU) and processing wellhead data to generate Owner Netback, as well as gas severance taxes per Operator total production.</p>

                            <p>The solution also includes automated Prior Period Adjustment (PPA) calculations with application PPA to current month statements.  ENSYTE has significant experience in this area with over 30 years of development work for oil and gas production companies and gathering systems.  A recent implementation of the software manages approximately 6,000 natural gas wells and approximately 400 producers. </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default A7;