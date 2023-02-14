
import img19 from '../../assets/img/vista3-1.jpg'
const A12 = (props) => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img19} alt='data Article' className='img-fluid mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">New Gas Supply / City Gate Planning Feature</h4>
                        <h6 className='text-center mt-3'>October 1st 2019</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal11">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal11" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">New Gas Supply / City Gate Planning Feature</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img19} alt="Services Solutions" className='img-fluid' />
                            </div>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">New Gas Supply / City Gate Planning Feature</h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p>ENSYTE has been working hard on a new feature to support Gas Day planning and tracking of scheduled and measured gas at the City Gate. It is delivered through a graphical program that displays the City Gate configuration, weather and gas plan summary, and scheduled gas delivered to the City Gate. The feature is being implemented for one of our current clients and will be offered to all clients soon.</p>

                                            <p>The module includes:</p>
                                            <ul className="list-padding">
                                                <li>Import of weather data from the LDC’s vendor in multiple occurrences during the day.</li>
                                                <li>Direct entry or import of the Gas Day demand based on weather.</li>
                                                <li>Import SCADA data from the LDC’s SCADA system to provide an immediate next day update of measured verses schedule gas at the city gate. Update can be secured via download or direct entry for pipeline data to support an end of month reconciliation.</li>
                                                <li>Import third party scheduled and actual data for transportation customers to provide a full picture of the gas balances at the city gate. ENSYTE offers an integrated module that can be added at any time to provide this service.</li>
                                                <li>This is a unique module designed to provide executives, managers and users with a quick snapshot view of the daily gas plan, supply and demand, as well as the ability to look back to prior days to observe the actual conditions.</li>
                                                <li>The module includes the ability to quickly view Purchases, Scheduled Gas, WACOG Data, and the Gas Plan Summary.</li>
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

export default A12;