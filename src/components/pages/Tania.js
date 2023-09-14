import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import image1 from "../../assets/img/Image-from-iOS-768x1024.jpg"

const Tania = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid imgBg18">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mt-5 d-flex justify-content-center">
                    <div className="card bg-white text-black mt-5 mb-5" style={{ maxWidth: "1000px" }}>
                        <div className="row p-2 text-center">
                            <div className="col-sm-12 col-md-12 col-lg-6">

                                <img src={image1} alt="Tania Demerris" className="img-fluid imgShadow rounded"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                                <h2>Tania Demeris</h2>
                                <h3>President & CEO</h3>
                                <p className="text-start">Tania Demeris has over 20 years of experience managing effective marketing and business development strategies.
                                    <br />
                                    She graduated from Loyola Marymount University with a Bachelor’s Degree emphasizing International Business. Tania started her career at Energy Maintenance Services (EMS), a North American company providing a full range of operations and maintenance services to the energy industry.
                                </p>
                                <p className="text-start">
                                    Tania joined ENSYTE in 2010 and implemented a strategic marketing plan to launch the upgraded GASTAR product to the natural gas market. Tania manages the day-to-day operations of ENSYTE and oversees all Project Management activities with clients, as well as software development and internal operations.
                                </p>
                                <p className="text-start">
                                    Tania works with all of ENSYTE’s prospects to manage the sales process and provide support to both current and potential clients as they build their case for implementing updated systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to="/about" className="link-white"><h2 className="text-center">Back To Excutives</h2></NavLink>
            </div>
        </div >

    )
}

export default Tania