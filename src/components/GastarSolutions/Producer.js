import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

// import image1 from '../../assets/img/upstream.jpg'

const Producer = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row blue-bg text-white">
                <h1 className="text-center mt-3 mb-3">GASTAR For Upstream Production</h1>
            </div>
            <div className="row justify-content-center imgBg27">
                <div className="col-lg-7 col-md-12 col-sm-12 text-center mt-5">
                    <p className="mt-5 text-white">ENSYTE supports major oil and natural gas producers in their upstream processes with our comprehensive GASTAR management software. From search and discovery to estimations and extractions, our user-focused software solution aims to provide natural gas producers with functional tools and management resources to streamline their upstream processes saving time and money.
                    </p>
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
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Features for Oil & Gas Downstream Marketing</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-wrap">
                            <div className="row justify-content-center mb-5">
                                <div className="col-lg-12 col-md-12 col-sm-12 text-justify mt-3">
                                    <div className="card border-0">
                                        <div className="row justify-content-center">
                                            <div className="card-body">
                                                <div className="row justify-content-center">
                                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                                        <div className="mt-3 mb-3">
                                                            <div className="fs-6 p-2">
                                                                <h3 className="blue-text text-center mb-4">GASTAR for Natural Gas Producers</h3>
                                                                <p>GASTAR supports the business processes of upstream production by tracking the movement of gas from the field to the gathering system, marketing and nominations to the pipeline, and final settlement between Joint Interest (JI) partners and royalty partners. GASTAR’s Web Portal (EBB) permits Producer/Operators to maintain well division of interest, monitor production and gas quality, and perform other tasks in support of the revenue distribution function.

                                                                    GASTAR also offers a comprehensive allocation network for producers to track mineral rights and support marketing activity by allocating revenue, cost, energy, and volume from the multiple sales points to the supply points. Natural gas is allocated from the measurement point, which assigns a specific structure to each well based on actual measurements pulled from SCADA, charts, and other metering devices. Various allocation methods are supported.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center mt-5 mb-5 m-1 bg-lighter-grey rounded">
                                                    <div className="col-sm-12 col-md-12 col-lg-5">
                                                        <div className="mt-3 mb-3">
                                                            <div className="p-2">
                                                                <h4 className="no-wrap">Producer / Operator features include:</h4>
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
                </div>
            </div>
            {/* <div className="row justify-content-center imgBg13">
                 <div className="col-lg-6 col-sm-12 text-center">
                    <img src={image1} alt="Product" className=' img-fluid' />
                </div> 
                <div className="col-lg-4 col-md-12 col-sm-12 text-justify text-white mt-3">


                </div>
            </div> */}
            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-overview"><h2 className="text-center">About GASTAR</h2></NavLink>
            </div>

        </div>

    )
}

export default Producer;