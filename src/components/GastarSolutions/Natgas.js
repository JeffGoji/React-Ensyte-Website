import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

import image1 from '../../assets/img/oilfield-1.jpeg'

function Natgas() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-white">
            <div className="row blue-bg">
                <h1 className="text-center text-white mt-5 mb-5">Marketing for Natural Gas Producers</h1>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-lg-4 col-md-12 col-sm-12 text-center">
                    <img src={image1} alt="Product" className=' img-fluid mt-2 mb-3 rounded imgShadow' />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-justify mt-5 text-center">
                    <p>GASTAR provides an integrated approach to computing producer netback settlements to well working interest owners, complete with a Sales Module. The complete system handles natural gas, oil, and Natural Gas Liquids (NGLs).</p>
                </div>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="card mt-5 mb-5 cardshadow">
                        <div className="card-header text-center blue-bg text-white"><h2>GASTAR for Producer Marketing functionality includes:</h2></div>
                        <div className="fs-6 p-3">
                            <h3 className="blue-text text-center mt-5">Producer Gas Supply Module</h3>
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
            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="/gastar-retail-gas"><h2 className="text-center">GASTAR for Retail Gas Marketing</h2></NavLink>
            </div>

        </div>

    )
}

export default Natgas;