
import img from '../../assets/img/Allen.jpeg'

const A24 = () => {
    return (
        <div>
            <div className="col h-100">
                <div className="card mb-5 h-100" >
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE’s New Chief Information Officer</h4>
                        <h6 className='text-center mt-3'>July 1st 2023</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal24">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal24" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE’s New Chief Information Officer</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxWidth: '350px' }} />

                            </div>
                            <p>ENSYTE is excited to announce that Allen Williams has joined our leadership team as Chief Information Officer (CIO).  Allen is a highly experienced professional in the field of information technology with more than 20 years of experience managing IT professionals and projects.  He possesses a diverse range of practical IT skills, including project management, IT security, compliance, problem resolution, cloud services and IT infrastructure management.  </p>
                            <p>
                                Allen obtained one of his many technical certifications in 1994 (CompTIA A+) which solidified his commitment to a career in IT.  In a short eight years and numerous certifications later, he held the role of VP of Information Technology at Citigroup.  During his nearly five years at Citigroup, Allen would hone his IT leadership skills with a keen sense of expense management.  From Citigroup, he continued to build on his IT leadership and technical abilities serving as a Director, VP or CIO at multiple companies.
                            </p>
                            <p>Over his many years in the IT field, Allen has demonstrated hands-on leadership in integrating, transforming and optimizing technology.  Throughout his career, he has consistently surpassed expectations by recruiting and developing high-performing teams of IT professionals, improving IT operational efficiencies, fortifying security measures and reducing expenses.  A strong proponent of continuously learning, Allen evolves and adapts to the dynamic IT landscape to maintain a competitive edge.
                            </p>

                            <p>
                                Allen will be assisting ENSYTE to continue to adopt and integrate the latest technology in all areas of the business, as well as contributing to the company’s product strategy to offer a full spectrum of SaaS solutions to the energy value chain.
                            </p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default A24;