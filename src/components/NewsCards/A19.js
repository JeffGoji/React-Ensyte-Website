import dashboard1 from '../../assets/img/visual-proto.jpg'
import dashboard2 from '../../assets/img/node-proto.png'

const A19 = () => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={dashboard1} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">GASTAR Dashboards</h4>
                        <h6 className='text-center mt-3'>December 1st 2022</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal19">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal19" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE GASTAR Dashboard</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="card border-0 mt-3">
                                <h2 className="text-center">GASTAR Dashboard</h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p className='mb-1'>ENSYTE is excited to announce a new dashboard for our GASTAR product, the most comprehensive natural gas management solution on the market today.
                                            </p>
                                            <p>
                                                The GASTAR Dashboard is designed for managers and executives to view high level summary data, as well as visual displays of facilities and other assets.
                                            </p>
                                            <div className="text-center mb-4 mt-3">
                                                <img src={dashboard1} alt="Accounting Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "25rem" }} />
                                            </div>
                                            <p className='mt-5'>
                                                The Dashboard includes an Interactive Visual Gas and Fluid Flow Network, which provides clients with the ability to build interactive network nodes and links and setup intelligence for each part of the network.  The network manages Facilities, Gate Stations, Wells, Composition Samples, Meters, Compressors, Liquid Sales Batteries, Gas Sales Meters, and more.
                                            </p>
                                            <img src={dashboard2} alt='Node Network Builder' className='imgShadow img-fluid rounded mt-3' style={{ maxHeight: '25rem' }} />
                                            <div className='text-center'>
                                                <button type="button" className="btn btn-warning ms-lg-3 mt-3" data-bs-toggle="modal" data-bs-target="#modal169">
                                                    Click HERE to see a demo of the new Dashboard & Visual Graphic Display!
                                                </button>
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

        </div>)
}

export default A19;