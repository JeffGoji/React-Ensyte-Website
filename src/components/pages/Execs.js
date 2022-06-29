import image1 from '../../assets/img/michael.png'
import image2 from '../../assets/img/marilyn.png'
import image3 from '../../assets/img/tania-md.jpg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'


const Execs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container-fluid mt-5 text-white imgBg18'>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-8 mt-5 mb-5">
                    <h1 className="text-center mt-5">
                        Meet Our Executive Team
                    </h1>
                    <div className="card bg-white text-black">
                        <div className="row justify-content-center row-cols-1 row-cols-md-3 g-2 mt-5 fs-5 text-center">
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <div className="card h-100 bg-transparent border-0">
                                    <div className="card-body">
                                        <img src={image3} alt="Tania Demeris" className="img-fluid imgShadow rounded" style={{ maxHeight: "264px" }} />
                                        <h3 className="card-title mt-2">Tania Demeris</h3>
                                        <p className="card-text">President & CEO</p>
                                        <NavLink to="/tania-demeris" className="link">Learn more about Ms. Demeris</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <div className="card h-100 bg-transparent border-0">

                                    <div className="card-body">
                                        <img src={image1} alt="Michael Smith" className="img-fluid imgShadow rounded" style={{ maxHeight: "264px" }} />
                                        <h3 className="card-title mt-2">Michael Smith</h3>
                                        <p className="card-text">Director / Visionary</p>
                                        <NavLink to="/michael-smith" className="link">Learn more about Mr. Smith</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <div className="card h-100 bg-transparent border-0">

                                    <div className="card-body">
                                        <img src={image2} alt="Marilyn Smith" className="img-fluid imgShadow rounded" style={{ maxHeight: "264px" }} />
                                        <h3 className="card-title mt-2">Marilyn Smith</h3>
                                        <p>CFO</p>
                                        <NavLink to="/marilyn-smith" className="link">Learn more about Mrs. Smith</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default Execs;