import img23 from '../../assets/img/pgw-1.jpg'
const A16 = (props) => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img23} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Wins Major Philadelphia Utility</h4>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal15">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal15" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Wins Major Philadelphia Utility</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img23} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                            </div>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">ENSYTE Wins Major Philadelphia Utility</h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p>January 12, 2016 (Houston, TX) – ENSYTE has won a contract with a Houston-based company to implement a Producer Gas Marketing and Well Meter Netback Solution, offered as a hosted software package to capitalize on the business advantages of an online subscription service, as opposed to a traditional in-house implementation.</p>

                                            <ul className="list-padding">
                                                <li><strong>Producer Gas Supply</strong> – A connected gathering system network of producer supply and central delivery point (CDP) meters to delivery pre-month supply forecasts, daily CDP measurement updates and end of month settlement data. For actual measurement, the solution will accept EFM interfaces, CSV/text files, and manual screen input. The CDP measurement is updated daily with field estimates, uploaded from the IHS Production Explorer software, which is used to update the supply pool on the pipeline.</li>


                                                <li><strong>Producer Gas Sales and Transportation Modules</strong> transition from the gathering network to an Intra/Interstate pipeline pooling point for supporting natural gas marketing and sales. The sales modules automatically link the transportation path back to the pool in order to maintain intra-day pool balances and to manage imbalance positions. This integrated process provides a daily estimate of gas available for sale, sales made from the pool and a margin based on the imputed price index for the supply. Pool Balance carry forward combines with current day transactions’ to aid in keeping the imbalance within contract tolerances.</li>

                                                <li><strong>Netback Settlement to Working Interest Owners</strong> is performed utilizing a transaction price, such as a 1st of Month Index, and the costs incurred in moving the gas from the wellhead to the sales point. The PRISM solution has a flexible formulae based price/cost module that permits setting up settlement groups containing separate formulae sets. For example, a production stream facing 2 sets of compression will be in a separate group from a single compression cost.</li>



                                                <li><strong>Electronic Bulletin Board</strong> – An Online internet portal is used to manage communication with producers. A key feature is publishing invoice backup data onto the EBB for producers to view, document upload and download with notices; and, Input feature for producer forecast data and ability to update that data should producing conditions change.</li>

                                                <li><strong>Reporting</strong> – Month end close report listing each supply meter and its netback revenue calculation. With WI Owner ‘Take in Kind”, the system has the ability to apply an ownership factor to split the proceeds to each owner. The project is planned as a multi-utility implementation with a second utility to be addressed next year. A key feature of GASTAR is the ability to seamlessly handle multiple utilities within the same application and database software, further streamlining and simplifying the workflow for managing multiple utilities where consolidation of certain business practices is important. This feature applies to both the off and on-system business practices for the gas utility.</li>


                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default A16;