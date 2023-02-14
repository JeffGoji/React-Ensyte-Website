import img16 from '../../assets/img/Boston.jpg'
const A9 = () => {
    return (
        <div>
            <div className="col h-100" >
                <div className="card mb-5 h-100">
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img16} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Signs New Client</h4>
                        <h6 className='text-center mt-3'>February 1st 2017</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal8">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal8" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content text-center">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Signs New Client</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img16} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                            </div>
                            <div className="card border-0 mt-5 ">
                                <h2 className="text-center">ENSYTE Signs New Client</h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <p>ENSYTE is pleased to announce the addition of one of New England’s largest energy delivery companies to our client base.</p>
                                            <p>ENSYTE’s flagship natural gas software solution, GASTAR, was evaluated along with other top competing software packages during an extensive Request for Proposal process. GASTAR was selected as the best solution for managing the client’s Retail Choice business practices due to the comprehensive set of features offered ‘out of the box’, as well as ENSYTE’s extensive knowledge of the natural gas business. The client also appreciated ENSYTE’s flexibility to tailor the system to the needs of the company, rather than trying to fit their business processes into a restricted configuration.</p>
                                            <p>GASTAR will support the Retail Choice business practices for two utilities under the parent company and is delivered with future options for licensing the GASTAR Gas Supply Acquisition, LNG and City Gate Supply Balancing Modules. The client elected to implement the enterprise version of the GASTAR solution, which will be installed in their computer center utilizing a Microsoft SQL Server database. The software is expected to become fully operational in the Summer of 2017.</p>
                                            <p>The successful competition strengthens ENSYTE’s position as the premier supplier of software to natural gas companies throughout the United States, particularly in the Northeast where GASTAR supports several large multi-utility clients who have implemented the fully integrated Gas Supply / Retail Choice / LNG Suite of Programs or one of the options, such as Retail Choice.</p>
                                            <p>Click HERE to view GASTAR’s Retail Choice Features.</p>
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

export default A9;