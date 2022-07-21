import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

// import image1 from '../../assets/img/oilfield-1.jpeg'

function Natgas() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row blue-bg">
                <h1 className="text-center text-white mt-3 mb-3">GASTAR For Marketing for Natural Gas Producers</h1>
            </div>
            <div className="row justify-content-center imgBg20">
                <div className="col-lg-8 col-md-12 col-sm-12 text-justify mt-5 text-center">
                    <p className="mt-5 text-center text-white">GASTAR provides an integrated approach to computing producer netback settlements to well working interest owners, complete with a Sales Module. The complete system handles natural gas, oil, and Natural Gas Liquids (NGLs).</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-2 col-sm-8 text-center mb-2">
                        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal11">Features</button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-center mb-2" data-bs-toggle="modal" data-bs-target="#modal169"><button className="btn btn-warning btn-lg">Schedule a Demo</button>
                    </div>
                </div>
            </div>
            {/* Modal Begin */}
            <div className="modal fade" id="modal11" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Features For Producer Marketing functionality includes:</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-wrap">
                            <div className="row justify-content-center mb-5">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="card border-0">
                                        <div className="fs-6 p-3">
                                            <h3 className="blue-text text-center">Producer Gas Supply Module</h3>
                                            <p>A connected gathering system network of producer supply and Central Delivery Point (CDP) meters to delivery pre-month supply forecasts, daily CDP measurement updates and end of month settlement data. For actual measurement, the solution will accept Electronic Flow Measurement (EFM) interfaces, CSV/text files, and manual screen input. The Central Delivery Point measurement can be updated daily with field estimates, uploaded from production software, which can be used to update the supply pool on the pipeline.</p>

                                            <h3 className="blue-text text-center mt-5">Producer Gas Sales and Transportation Modules</h3>
                                            <p>A transition from the gathering network to an Intra/Interstate pipeline pooling point for supporting natural gas marketing and sales. The sales modules automatically link the transportation path back to the pool in order to maintain intra-day pool balances and to manage imbalance positions. This integrated process provides a daily estimate of gas available for sale, sales made from the pool, and a margin based on the imputed price index for the supply. Pool Balance carry forward combines with current day transactions to aid in keeping the imbalance within contract tolerances.</p>

                                            <h3 className="blue-text text-center mt-5 ">Netback Settlement to Working Interest Owners</h3>
                                            <p>Netback Settlement is performed utilizing a transaction price, such as a First of Month Index, and the costs incurred in moving the gas from the wellhead to the sales point. The solution has a flexible formulae based price/cost module that permits setting up settlement groups containing separate formulae sets. For example, a production stream facing 2 sets of compression will be in a separate group from a single compression cost.</p>

                                            <h3 className="blue-text text-center mt-5">Electronic Bulletin Board (EBB)</h3>
                                            <p>An online internet portal is used to manage communication with producers. A key feature is publishing invoice backup data onto the EBB for producers to view, document upload and download with notices, and an input feature for producer forecast data and ability to update that data should producing conditions change.</p>

                                            <h3 className="blue-text text-center mt-4">Reporting</h3>
                                            <p>Month end close report listing each supply meter and its netback revenue calculation. With Working Interest Owner ‘Take in Kind”, the system has the ability to apply an ownership factor to split the proceeds to each owner.</p>

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
            </div>
            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-overview"><h2 className="text-center">About GASTAR</h2></NavLink>
            </div>
        </div>



    )
}

export default Natgas;