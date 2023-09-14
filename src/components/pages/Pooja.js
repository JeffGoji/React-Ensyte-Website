import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import image1 from "../../assets/img/Pooja-1.png"

const Pooja = () => {

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

                                <img src={image1} alt="Pooja Demerris" className="img-fluid imgShadow rounded"
                                    style={{ maxWidth: '500px' }} />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                                <h2>Pooja </h2>
                                <h3>Vice President</h3>
                                <p className="text-start">Pooja Agarwal has been with ENSYTE for over 10 years and has been instrumental in the implementation of the solution for large natural gas utilities and other energy assets. She is an outstanding asset to ENSYTE and has helped build processes and procedures across the board to create growth, organization, and consistency both within the company and with clients.
                                </p>
                                <p className="text-start">Pooja earned her Bachelor of Science in Computer / Information Technology Administration & Management from Kurukshetra University and then went on to earn her Masters of Computer Applications and Computer Science from India. She also earned her Master’s in Business Administration (MBA) from the University of Houston, where she studied Energy Trading Systems, Energy Value Chain, Business Modeling & Decision Making, and Supply Chain Management

                                </p>
                                <p className="text-start">Pooja was a Senior Software Engineer for HCL Technologies and then became a Business Analyst for Jones Apparel Group, where she worked with an offshore development team to build the company’s internal software solutions. She also worked as a Data Analyst for The Lab Consulting. She joined ENSYTE through the company’s internship program and became a Project Coordinator, Product Manager, and then Director of the GASTAR Product, a software solution that manages natural gas transactions across the energy value chain. She has become a Subject Matter Expert (SME) on the product, as well as an energetic and motivated leader for both the project and development teams. She has built an extensive understanding of the downstream natural gas business and all its associated business processes, building solutions for some of the most complex business processes in the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to="/about" className="link-white"><h2 className="text-center">Back To Excutives</h2></NavLink>
            </div>
        </div >

    )
}

export default Pooja