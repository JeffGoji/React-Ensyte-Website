import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import image1 from "../../assets/img/michael.png"

const Michael = () => {

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

                                <img src={image1} alt="Michael Smith" className="img-fluid imgShadow rounded mb-3"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                                <h2>Michael Smith</h2>
                                <h3>Founder / Visionary</h3>
                                <p className="text-start">Michael Smith has over 35 years of experience providing consulting services and software products to the international energy industry. Michael formed ENSYTE Energy Software, initially incorporated as Michael Smith & Associates, to offer consulting and technical software development services to the international oil and gas industry.
                                </p>
                                <p className="text-start">
                                    His early project work included exploration statistical trend analysis, major reserve availability analysis, and software development projects internationally, which led to the development of related major international consulting projects and custom software solutions for production operations and natural gas management systems. Michael is credited as one of the founders of Energy Trading Risk Management (ETRM) software systems for the GASTAR product by CTRM Center (formerly Commodity Point), a leading research house focused on commodities trading. He is currently ENSYTE’s Chief Software Architect and Lead Business Consultant.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to="/about" className="link-white"><h2 className="text-center">Back To Excutives</h2></NavLink>
            </div>
        </div >

    )
}

export default Michael