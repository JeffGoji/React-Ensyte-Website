// Import SVG files:
import Tapemeasure from '../../assets/img/icons/Tape-measure.svg'
import Badge from '../../assets/img/icons/Badge.svg'
import Calender from '../../assets/img/icons/Calendar.svg'
import Computer from '../../assets/img/icons/Computer.svg'
import flagleft from '../../assets/img/icons/flag-left.svg'
import flagright from '../../assets/img/icons/flag-right.svg'
import Graph from '../../assets/img/icons/Graph.svg'
import PaperPencil from '../../assets/img/icons/Paperpencil.svg'
import logo1 from '../../assets/img/gastar-logo-1.png'


const Map = () => {
    return (
        <div className="container-fluid bg-white">
            <div className="row align-items-center" style={{ marginTop: "5.3rem" }}>

                {/* <!-- Begin Left Column --> */}
                <div className="col-lg-4 col-sm-12 mb-2">
                    <span>
                        {/* <!-- Begin Icon 1 --> */}
                        <button className="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#leftBtn1" aria-expanded="false" aria-controls="leftBtn1">
                            Pipeline Assets, Locations, Measurements & Composition
                            <img src={Tapemeasure} className="bg-white rounded-2" alt="Tape Measure Icon" style={{ marginLeft: "15px" }} />
                        </button>

                        <div>
                            <div className="collapse collapse-horizontal" id="leftBtn1">
                                <div className="card card-body mb-4" style={{ width: "auto;" }}>
                                    <p>
                                        Natural Gas and Liquids (LNG), as well as Propane Pipeline &
                                        Storage Assets, are modeled to mirror company & counter party
                                        transportation and inventory transactions. Measurement and
                                        composition data are associated with unique and virtual
                                        locations to support contract transactions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </span>
                    {/* <!-- End Icon 1 -->

                    <!-- Begin Icon 2 --> */}

                    <button
                        type="button"
                        className="btn btn-primary icon2 mt-2"
                        data-bs-toggle="modal"
                        data-bs-target="#Modal2"
                    >
                        Counter Parties, Security, Notifications & Alert
                        <img src={Badge} className="bg-white rounded-2" alt='Badge Icon' style={{ marginLeft: "15px" }} />
                    </button>
                    <div
                        className="modal fade"
                        id="Modal2"
                        tabIndex="-1"
                        aria-labelledby="Modal2"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="Modal2">
                                        Pipeline Assets, Locations, Measurements & Composition
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        Manage the Company and Business Counter Parties and Contacts including related security privileges for separating business functions. A comprehensive Notification and Alerts Module includes auto-generated emails and optional text messages.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of Icon 2 -->

                    <!-- Start Icon 3 --> */}

                    <button
                        type="button"
                        className="btn btn-primary icon3 mt-2"
                        data-bs-toggle="modal"
                        data-bs-target="#Modal3"
                    >
                        Counter Parties, Security, Notifications & Alert
                        <img src={Computer} className="bg-white rounded-2" alt='Computer Icon' style={{ marginLeft: "15px" }} />
                    </button>
                    <div
                        className="modal fade"
                        id="Modal3"
                        tabIndex="-1"
                        aria-labelledby="Modal3"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="Modal3">
                                        Back Office, Workstation, Web Portal, Hosting Option
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        ENSYTE offers flexible hosting options for the GASTAR Solution, including the Database, Application Programs, Batch Processing Utilities and Notification/Alert programs. ENSYTE offers hosting through our partnership with Airdesk Solutions, as well as Cloud or Infrastructure as a Service (Iaas), and AWS or other subscription-based hosting.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- End of Icon 3 --> */}


                </div>


                {/* <!-- Center Star Icon --> */}
                <div className="d-none d-sm-block  col-lg-4 col-sm-12 mt-5 mb-5">
                    <h1 className="text-center mt-2">Gas Supply Chain
                        GASTAR™ NatGas Software</h1>
                    <img src={logo1} className="rounded mx-auto d-block" alt='logo' />
                    <p className="fs-5 mb-2">ENSYTE provides flexible, comprehensive, and feature-rich risk mitigation software solutions for managing the natural gas supply chain—from the producer/marketer to the end user/customer.</p>

                </div>

                {/* <!-- End of Center Star Icon --> */}

                {/* <!-- Begin Right Column --> */}

                <div className="col-lg-4 col-sm-12">

                    {/* <!-- Begin right Icon 1 --> */}
                    <button
                        type="button"
                        className="btn btn-primary icon1"
                        data-bs-toggle="modal"
                        data-bs-target="#Modal4"
                    ><img src={PaperPencil} className="bg-white rounded-2" alt='Paper Pencil Icon' style={{ marginRight: "15px" }} />
                        Contracts, Tariffs, Price Indices, Document Upload

                    </button>
                    <div
                        className="modal fade"
                        id="Modal4"
                        tabIndex="-1"
                        aria-labelledby="Modal4"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="Modal4">
                                        Contracts, Tariffs, Price Indices, Document Upload
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <p>GASTAR is Contract-based to capture all business transactions, such as: Transportation, Storage, Natural Gas Buy/Sell, Asset Management, Liquids, Retail Pooling and others. Related modules are the Rate/Tariff and Price Indices business functions. A flexible document upload and view capability is included.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End right Icon 1 -->
                <!-- Begin right Icon 2 --> */}

                    <button className="btn btn-primary mt-2 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        <img src={Graph} className="bg-white rounded-2" alt='Graph Icon' style={{ marginRight: "15px" }} />
                        NG Purchases & Sales Deals, AM Purchase & OSS
                    </button>

                    <div>
                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                            <div className="card card-body mb-4" style={{ width: "auto" }} >
                                Supported by a NAESB Master Contract, the Physical Gas Trading Module supports Natural Gas purchases, sales, and unique purchase and off-system sales transactions. For example, storage asset management purchases and OSS margin analysis & reporting. Combined with transportation linking and routing, a WACOG calculation is made at transaction points and at the delivery locations.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Map;