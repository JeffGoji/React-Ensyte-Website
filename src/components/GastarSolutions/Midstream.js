import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

// import image1 from '../../assets/img/rig5.jpg'


const Midstream = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row blue-bg">
                <h1 className="text-center mt-3 mb-3 text-white">GASTAR For Midstream</h1>
            </div>
            <div className="row justify-content-center imgBg28">
                <div className="col-lg-8 col-md-12 col-sm-12 text-center">
                    <p className="mt-6 text-white">ENSYTE supports major oil and natural gas Midstreams in their upstream processes with our comprehensive GASTAR management software. From search and discovery to estimations and extractions, our user-focused software solution aims to provide natural gas Midstreams with functional tools and management resources to streamline their upstream processes saving time and money.
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
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Features For Natural Gas Gathering, Treatment, and Processing</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-wrap">
                            <div className="row justify-content-center mb-5">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="card border-0">
                                        <div className="card-body row justify-content-center">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="p-2">
                                                    <h4 className="blue-text text-center mb-4">GASTAR for Natural Gas Midstreams</h4>
                                                    <p>GASTAR supports the business process of midstream companies engaged in gathering, treating, processing, and storing natural gas.</p>

                                                    <p>The Gathering Pipeline section of GASTAR connects the intrastate or interstate pipeline with producing well supply sources and related compressor and processing facilities to deliver the wellhead/meter tap gas to both the distribution network and city gate stations for potential sale off-system or on-system to other marketers. GASTAR’s Gathering/Pipeline functionality models the entire system of wells, pipelines, meters and measurement, contracts, and settlement. The solution offers a comprehensive allocation network for gathering pipelines and processing plants to track mineral rights and support marketing activity by allocating revenue, cost, energy, and volume from the multiple sales points to the supply points. Natural gas is allocated from the measurement point, which assigns a specific structure to each well based on actual measurements from SCADA, chart, and other metering devices.</p>

                                                    <p>GASTAR’s Plant Allocation & Accounting functionality leverages graphical displays of intraday measurement and transaction data, as opposed to tabular data reports that fail to provide an adequate operational view of the transaction patterns in the physical and contract data. The User Interface (UI) provides a rich user experience by presenting a single interface from which all GASTAR measurement and allocation business functions are launched. The interface depicts the virtual gas-flow network, which includes physical gas flow and the Contract Delivery Point (CDP) node, for linking the network with Contract terms (quality and quantity) within a single graphic representation. The data for each display box can be selected to include Volumes, MOL%, Component Volumes, Heating Value and Energy; and pop-up charts are accessible for node and stream volumes and energy; providing a readily available view of key data for managing plants and other assets.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body row justify-content-center m-1 bg-lighter-grey rounded">
                                            <div className="col-sm-12 col-md-12 col-lg-6">
                                                <div className="mt-3 mb-5">
                                                    <div>
                                                        <ul className="list-padding"><h4>Midstream Features:</h4>
                                                            <li>Supply Sales</li>
                                                            <li>Transportation Contracts</li>
                                                            <li>Plant Measurement</li>
                                                            <li>Metering Interface</li>
                                                            <li>Scheduling / Nominations</li>
                                                            <li>Pipeline Allocation Network</li>
                                                            <li>Pipeline Rate Management</li>
                                                            <li>Virtual Gas Flow Display</li>
                                                            <li>Gas Supply Allocations</li>
                                                            <li>Pricing Module</li>
                                                            <li>Plant Allocation & Accounting</li>
                                                            <li>Settlement</li>
                                                            <li>Prior Period Adjustments</li>
                                                            <li>Forecastingl</li>
                                                        </ul>
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
        </div >

    )
}

export default Midstream;