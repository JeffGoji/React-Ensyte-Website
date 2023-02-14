import img18 from '../../assets/img/UGI-20-Years-1.jpg'
const A10 = () => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img18} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Celebrates 20 Years with UGI</h4>
                        <h6 className='text-center mt-3'>August 1st 2015</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal10">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal10" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Celebrates 20 Years with UGI</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img18} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                            </div>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">ENSYTE Celebrates 20 Years with UGI</h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p>ENSYTE’s longest tenure client, UGI Utilities, held a 20th Anniversary Celebration to celebrate 20 years of working with the GASTAR product. We are blessed to have such wonderful relationships with our clients and looking forward to many more!</p>

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

export default A10;