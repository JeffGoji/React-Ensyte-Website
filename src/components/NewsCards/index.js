import image1 from '../../assets/img/newsPic.jpg';
import data from '../../data';


function NewsCards(props) {

    return (

        <div className="container-fluid mb-5 bg-white">
            <div
                className="text-center blue-text justify-content-center"
            >
                <h1 className="mt-5">ENSYTE News</h1>

                <img src={image1} className='img-fluid' alt='Ensyte News Releases' />


                {/* <!-- Card 1 --> */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-2 p-4">
                    {/* <Cards /> */}

                    <div className="col" >
                        <div className="card mb-5 h-100 ">
                            <div className="card text-center h-100">
                                <div className="card-header">FEATURED / NEWS RELEASE</div>
                                <div className="card-body">
                                    <img src={data[5].image} alt='News Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                    <h4 className="card-title">{data[5].title}</h4>
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">Read More</button>
                                </div>
                                <div className="card-footer text-muted">Posted {data[6].date}</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}

                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card text-center h-100">
                                <div className="card-header">FEATURED / NEWS RELEASE</div>
                                <div className="card-body">
                                    <img src={data[1].image} alt='News Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                    <h4 className="card-title">{data[1].title}</h4>
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal2">Read More</button>
                                </div>
                                <div className="card-footer text-muted">Posted  {data[1].date}</div>
                            </div>


                        </div>
                    </div>

                    {/* Card 3 */}

                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card text-center h-100">
                                <div className="card-header">FEATURED / NEWS RELEASE</div>
                                <div className="card-body">
                                    <img src={data[2].image} alt='News Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                    <h4 className="card-title text-center">{data[5].title}</h4>
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal3">Read More</button>
                                </div>
                                <div className="card-footer text-muted">Posted  {data[0].date}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MODAL SECTION FOR ALL ARTICLES */}

                {/* Modal 1*/}
                <div className="modal fade" id="modal1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header blue-bg">
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[5].title}</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                <div className="text-center mb-4 modal-title">
                                    <img src={data[5].image} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "30rem" }} />
                                </div>
                                <div>
                                    {data[5].article}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* MODAL 2 ******* */}

                <div className="modal fade" id="modal2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header blue-bg">
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[1].title}</h3>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                <div className="text-center mb-4">
                                    <img src={data[1].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                </div>
                                <div>{data[1].article}</div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* MODAL 3 */}

                <div className="modal fade" id="modal3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header text-center blue-bg text-center">
                                <h3 className="modal-title center text-white" id="staticBackdropLabel">{data[2].title}</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6">
                                <div className="text-center mb-4">
                                    <img src={data[2].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                </div>
                                <div>
                                    {data[2].article}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {data.map((News) => ( */}

            {/* ))} */}
        </div>


    )
}



export default NewsCards;