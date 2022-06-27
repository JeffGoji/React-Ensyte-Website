import image1 from '../../assets/img/newsPic.jpg';
//import data from '../../data';
import data from '../../data'

function NewsStand(props) {

    return (

        <div className="container-fluid mb-3 bg-white">
            <div
                className="text-center text-black justify-content-center pb-5"
            >
                <h1 className="mt-5">ENSYTE Latest NEWS</h1>

                <img src={image1} className='img-fluid' alt='Ensyte data Releases' />

                {/* <!-- Card 1 --> */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2">
                    {/* <Cards /> */}

                    <div className="col">

                        <div className="card text-center h-100" >
                            <div className="card-header">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[5].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[5].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">Read More</button>
                            </div>
                        </div>



                    </div>

                    {/* Card 2 */}

                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header text-center">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[1].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[1].title}</h3>

                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal2">Read More</button>
                            </div>

                        </div>
                    </div>

                    {/* Card 3 */}

                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[2].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[2].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal3">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ROW 2 */}
                {/* Card 1 */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[3].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[3].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal4">Read More</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}

                    <div className="col">
                        <div className="card mb-5 h-100" >
                            <div className="card-header">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[4].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[4].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal5">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col">
                        <div className="card mb-5 h-100" >
                            <div className="card-header">FEATURED / <i className="fa fa-hacker-news" aria-hidden="true"></i> RELEASE</div>
                            <div className="card-body">
                                <img src={data[6].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[6].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal6">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/************************* ROW 3 ************************* */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* CARD 1 */}
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[7].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[7].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal7">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* CARD 2 */}
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[8].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[8].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal7">Read More</button>
                            </div>
                        </div>
                    </div>

                    {/* MODAL SECTION FOR ALL ARTICLES */}

                    {/* Modal 1*/}
                    <div className="modal fade" id="modal1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">

                            <div className="modal-content">
                                <div className="modal-header text-center blue-bg">

                                    <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[5].title}</h3>

                                    <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body fs-6 text-wrap">
                                    <div className="text-center mb-4">
                                        <img src={data[5].image} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "30rem" }} />

                                    </div>
                                    {data[5].article}
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
                                <div className="modal-header text-center blue-bg">
                                    <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[1].title}</h3>
                                    <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body fs-6 text-wrap">
                                    <div className="text-center mb-4">
                                        <img src={data[1].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />

                                    </div>
                                    {data[1].article}
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
                                <div className="modal-header blue-bg">
                                    <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[2].title}</h3>
                                    <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body fs-6">
                                    <div className="text-center mb-4">
                                        <img src={data[2].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                    </div>
                                    {data[2].article}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/************** ROW 2 ****************/}
                    {/* MODAL 4 */}

                    <div className="modal fade" id="modal4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">

                            <div className="modal-content">
                                <div className="modal-header text-center blue-bg">
                                    <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[3].title}</h3>
                                    <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body fs-5">
                                    <div className="text-center mb-4">
                                        <div className="text-center mb-4">
                                            <img src={data[3].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />

                                        </div>
                                    </div>
                                    {data[3].article}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MODAL 5 ******* */}

                    <div className="modal fade" id="modal5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">

                            <div className="modal-content">
                                <div className="modal-header text-center blue-bg">
                                    <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[4].title}</h3>
                                    <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body fs-6 text-wrap">
                                    <div className="text-center mb-4">
                                        <img src={data[4].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />

                                    </div>
                                    {data[4].article}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MODAL 6 ******* */}

                    <div className="modal fade" id="modal6" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">

                            <div className="modal-content text-center">
                                <div className="modal-header text-center blue-bg">
                                    <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[6].title}</h3>
                                    <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body fs-6 text-wrap">
                                    <div className="text-center mb-4">
                                        <img src={data[6].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                    </div>
                                    {data[6].article}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End of Row */}

                    {/* ROW 4 */}
                    {/* MODAL 7 ******* */}

                    <div className="modal fade" id="modal7" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">

                            <div className="modal-content text-center">
                                <div className="modal-header text-center blue-bg">
                                    <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[7].title}</h3>
                                    <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body fs-6 text-wrap">
                                    <div className="text-center mb-4">
                                        <img src={data[7].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                    </div>
                                    {data[7].article}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ******MODAL 8 ********/}
                    <div className="modal fade" id="modal8" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">

                            <div className="modal-content text-center">
                                <div className="modal-header text-center blue-bg">
                                    <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[8].title}</h3>
                                    <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body fs-6 text-wrap">
                                    <div className="text-center mb-4">
                                        <img src={data[8].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                    </div>
                                    {data[8].article}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >


    )
}



export default NewsStand;