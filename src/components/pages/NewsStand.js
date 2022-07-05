import image1 from '../../assets/img/newsPic.jpg';
//import data from '../../data';
import data from '../../data'

import A2 from '../NewsCards/A2';
import A3 from '../NewsCards/A3';
import A4 from '../NewsCards/A4';
import A6 from '../NewsCards/A6';

function NewsStand(props) {

    return (

        <div className="container-fluid mb-3 bg-white">
            <div
                className="text-center text-black justify-content-center pb-5"
            >
                <h1 className="mt-5">ENSYTE Latest NEWS</h1>

                <img src={image1} className='img-fluid' alt='Ensyte data Releases' />

                {/* <Cards /> */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3 g-0=4 mt-2">
                    {/* <!-- Card 1 --> */}
                    <A6 />

                    {/* Card 2 */}

                    <A2 />

                    {/* Card 3 */}
                    <A3 />

                </div>
                {/* ROW 2 */}
                {/* Card 1 */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    <A4 />

                    {/* Card 2 */}

                    <div className="col">
                        <div className="card mb-5 h-100" >
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
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
                            <div className="card-header blue-bg text-white">FEATURED / <i className="fa fa-hacker-news" aria-hidden="true"></i> RELEASE</div>
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
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
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
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[8].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[8].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal8">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* CARD 3 */}
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[9].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[9].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal9">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/************************* ROW 4 ************************* */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* CARD 1 */}
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[10].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[10].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal10">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* CARD 2 */}
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[11].image} alt='data Article' className='img-fluid mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[11].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal11">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* {/* CARD 3 */}
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[12].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[12].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal12">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/************************* ROW 5 ************************* */}
                <div className="row row-sm-cols-1 row-cols-md-1 row-cols-lg-3  g-0=4 mt-4">
                    {/* CARD 1 */}
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[13].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[13].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal13">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* CARD 2 */}
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[14].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[14].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal14">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* CARD 3 */}
                    <div className="col" >
                        <div className="card mb-5 h-100">
                            <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                            <div className="card-body">
                                <img src={data[15].image} alt='data Article' className='rounded img-fluid imgShadow mb-2' style={{ maxHeight: "15rem" }} />
                                <h3 className="card-title">{data[15].title}</h3>
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal15">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MODAL SECTION FOR ALL ARTICLES */}



                {/* MODAL 2 ******* */}



                {/* MODAL 3 */}


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
                {/* ******MODAL 9 ********/}
                <div className="modal fade" id="modal9" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">

                        <div className="modal-content text-center">
                            <div className="modal-header text-center blue-bg">
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[9].title}</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                <div className="text-center mb-4">
                                    <img src={data[9].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                </div>
                                {data[9].article}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ******MODAL 10 ********/}
                <div className="modal fade" id="modal10" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">

                        <div className="modal-content text-center">
                            <div className="modal-header text-center blue-bg">
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[10].title}</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                <div className="text-center mb-4">
                                    <img src={data[10].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                </div>
                                {data[10].article}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ******MODAL 11 ********/}
                <div className="modal fade" id="modal11" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">

                        <div className="modal-content text-center">
                            <div className="modal-header text-center blue-bg">
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[11].title}</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                <div className="text-center mb-4">
                                    <img src={data[11].image} alt="Services Solutions" className='img-fluid' />
                                </div>
                                {data[11].article}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ******MODAL 12 ********/}
                <div className="modal fade" id="modal12" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">

                        <div className="modal-content text-center">
                            <div className="modal-header text-center blue-bg">
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[12].title}</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                <div className="text-center mb-4">
                                    <img src={data[12].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                </div>
                                {data[12].article}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ******MODAL 12 ********/}
                <div className="modal fade" id="modal13" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">

                        <div className="modal-content text-center">
                            <div className="modal-header text-center blue-bg">
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[13].title}</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                <div className="text-center mb-4">
                                    <img src={data[13].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                </div>
                                {data[13].article}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ******MODAL 13 ********/}
                <div className="modal fade" id="modal14" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">

                        <div className="modal-content text-center">
                            <div className="modal-header text-center blue-bg">
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[14].title}</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                <div className="text-center mb-4">
                                    <img src={data[14].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                </div>
                                {data[14].article}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ******MODAL 14 ********/}
                <div className="modal fade" id="modal15" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">

                        <div className="modal-content text-center">
                            <div className="modal-header text-center blue-bg">
                                <h3 className="modal-title text-white center" id="staticBackdropLabel">{data[15].title}</h3>
                                <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-6 text-wrap">
                                <div className="text-center mb-4">
                                    <img src={data[15].image} alt="Services Solutions" className='imgShadow img-fluid rounded' />
                                </div>
                                {data[15].article}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>




    )
}



export default NewsStand;