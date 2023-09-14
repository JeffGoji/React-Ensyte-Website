import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import image1 from "../../assets/img/Allen.jpeg"

const Allen = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid imgBg18">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mt-5 d-flex justify-content-center">
                    <div className="card bg-white text-black mt-5 mb-5" style={{ maxWidth: "1200px" }}>
                        <div className="row p-2 text-center">
                            <div className="col-sm-12 col-md-12 col-lg-6">

                                <img src={image1} alt="Allen Williams" className="img-fluid imgShadow rounded mb-3"
                                    style={{ maxWidth: '400px' }} />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                                <h2>Allen Williams</h2>
                                <h3>Chief Information Officer</h3>
                                <p className='text-start'>Allen Williams is a highly experienced professional in the field of information technology with more than 20 years of experience managing IT professionals and projects.  He possesses a diverse range of practical IT skills, including project management, IT security, compliance, problem resolution, cloud services and IT infrastructure management.  </p>
                                <p className='text-start'>
                                    Allen obtained one of his many technical certifications in 1994 (CompTIA A+) which solidified his commitment to a career in IT.  In a short eight years and numerous certifications later, he held the role of VP of Information Technology at Citigroup.  During his nearly five years at Citigroup, Allen would hone his IT leadership skills with a keen sense of expense management.  From Citigroup, he continued to build on his IT leadership and technical abilities serving as a Director, VP or CIO at multiple companies.
                                </p>
                                <p className='text-start'>Over his many years in the IT field, Allen has demonstrated hands-on leadership in integrating, transforming and optimizing technology.  Throughout his career, he has consistently surpassed expectations by recruiting and developing high-performing teams of IT professionals, improving IT operational efficiencies, fortifying security measures and reducing expenses.  A strong proponent of continuously learning, Allen evolves and adapts to the dynamic IT landscape to maintain a competitive edge.
                                </p>

                                <p className='text-start'>
                                    Allen will be assisting ENSYTE to continue to adopt and integrate the latest technology in all areas of the business, as well as contributing to the company’s product strategy to offer a full spectrum of SaaS solutions to the energy value chain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to="/about" className="link-white"><h2 className="text-center">Back To Excutives</h2></NavLink>
            </div>
        </div>

    )
}

export default Allen