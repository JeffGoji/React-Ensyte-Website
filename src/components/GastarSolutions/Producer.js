import { useEffect } from "react";
import { NavLink } from 'react-router-dom'



const Producer = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-white">
            <div className="row">
                <h1 className="text-center mt-3 mb-3 ">GASTAR for Upstream Production</h1>
            </div>
            <div className="row justify-content-center imgBg15">
                {/* <div className="col-lg-6 col-sm-12 text-center">
                    <img src={image1} alt="Product" className=' img-fluid' />
                </div> */}
                <div className="col-lg-8 col-md-12 col-sm-12 text-justify text-white mt-3 fs-5">

                    <p>ENSYTE supports major oil and natural gas producers in their upstream processes with our comprehensive GASTAR management software. From search and discovery to estimations and extractions, our user-focused software solution aims to provide natural gas producers with functional tools and management resources to streamline their upstream processes saving time and money.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="mt-3 mb-3">
                        <div className="text-center"><h2>Oil & Gas Downstream Marketing</h2></div>
                        <div className="fs-6 p-2">
                            <h2 className="text-center">Producer / Operator features include:</h2>
                            <ul>
                                <li>Supply Forecasting</li>
                                <li>Wellhead Purchase Contracts</li>
                                <li>Lease Management</li>
                                <li>Metering, Volume Tracking</li>
                                <li>Production Allocation</li>
                                <li>Division of Interest</li>
                                <li>Gas Balancing</li>
                                <li>Scheduling to Gathering</li>
                                <li>Net-Back Calculations</li>
                                <li>Joint Interest Billing</li>
                                <li>Settlements</li>
                                <li>Reporting</li>
                                <li>1099 Distributions</li>
                                <li>Producer Communication Portal</li>
                            </ul>
                            <p>…and much more!</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="mt-3 mb-3">
                        <div className="text-center"><h2>Oil & Gas Downstream Marketing</h2></div>
                        <div className="fs-6 p-2">
                            <h3 className="blue-text text-start mt-4">GASTAR for Natural Gas Producers</h3>
                            <p>GASTAR supports the business processes of upstream production by tracking the movement of gas from the field to the gathering system, marketing and nominations to the pipeline, and final settlement between Joint Interest (JI) partners and royalty partners. GASTAR’s Web Portal (EBB) permits Producer/Operators to maintain well division of interest, monitor production and gas quality, and perform other tasks in support of the revenue distribution function.

                                GASTAR also offers a comprehensive allocation network for producers to track mineral rights and support marketing activity by allocating revenue, cost, energy, and volume from the multiple sales points to the supply points. Natural gas is allocated from the measurement point, which assigns a specific structure to each well based on actual measurements pulled from SCADA, charts, and other metering devices. Various allocation methods are supported.</p>

                        </div>
                    </div>
                </div>



            </div>
            <div className="row justify-content-center imgBg13">
                {/* <div className="col-lg-6 col-sm-12 text-center">
                    <img src={image1} alt="Product" className=' img-fluid' />
                </div> */}
                <div className="col-lg-4 col-md-12 col-sm-12 text-justify text-white mt-3">


                </div>
            </div>


            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="/gastar-midstream"><h2 className="text-center">GASTAR for Midstream</h2></NavLink>
            </div>

        </div>

    )
}

export default Producer;