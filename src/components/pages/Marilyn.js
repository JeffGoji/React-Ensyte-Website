import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import image1 from "../../assets/img/marilyn.png"

const Marilyn = () => {

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

                                <img src={image1} alt="Marilyn Smith" className="img-fluid imgShadow rounded"
                                    style={{ maxWidth: "30rem" }} />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                                <h2>Marilyn Smith</h2>
                                <h3>CFO</h3>
                                <p className="text-start">Marilyn Smith has been a part of the ENSYTE Executive Team for over 20 years. Marilyn manages all aspects of Finance, Administration, and Human Resources for ENSYTE including cash flow operations, payroll and accounting systems, vendor and bank relationships, financial controls and reporting, year-end audit coordination, insurance administration, and company policy implementation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to="/about" className="link-white"><h2 className="text-center">Back To Excutives</h2></NavLink>
            </div>
        </div >

    )
}

export default Marilyn