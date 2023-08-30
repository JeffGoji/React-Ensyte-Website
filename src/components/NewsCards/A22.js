
import img from '../../assets/img/Pooja-1.png'

const A22 = () => {
    return (
        <div>
            <div className="col h-100">
                <div className="card mb-5 h-100" >
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">Vice President, GASTAR Product</h4>
                        <h6 className='text-center mt-3'>March 1st 2023</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal22">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal22" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">Vice President, GASTAR Product</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxWidth: '350px' }} />

                            </div>
                            <p>ENSYTE is excited to announce our new Vice President of the GASTAR Product, Pooja Agarwal.  Pooja has been with ENSYTE for over 10 years and has been instrumental in the implementation of the solution for large natural gas utilities and other energy assets.  She is an outstanding asset to ENSYTE and has helped build processes and procedures across the board to create growth, organization, and consistency both within the company and with clients.  </p>
                            <p>
                                Pooja earned her Bachelor of Science in Computer / Information Technology Administration & Management from Kurukshetra University and then went on to earn her Masters of Computer Applications and Computer Science from India.  She also earned her Master’s in Business Administration (MBA) from the University of Houston, where she studied Energy Trading Systems, Energy Value Chain, Business Modeling & Decision Making, and Supply Chain Management
                            </p>
                            <p>Pooja was a Senior Software Engineer for HCL Technologies and then became a Business Analyst for Jones Apparel Group, where she worked with an offshore development team to build the company’s internal software solutions.  She also worked as a Data Analyst for The Lab Consulting.  She joined ENSYTE through the company’s internship program and became a Project Coordinator, Product Manager, and then Director of the GASTAR Product, a software solution that manages natural gas transactions across the energy value chain.  She has become a Subject Matter Expert (SME) on the product, as well as an energetic and motivated leader for both the project and development teams.  She has built an extensive understanding of the downstream natural gas business and all its associated business processes, building solutions for some of the most complex business processes in the industry.
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

export default A22;