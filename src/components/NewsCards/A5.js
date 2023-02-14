
import img5 from '../../assets/img/consulting-services-01.jpg'
const A5 = () => {
    return (
        <div>
            <div className="col h-100">
                <div className="card mb-5 h-100" >
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img5} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Wins Project with a Large Natural Gas Utility</h4>
                        <h6 className='text-center mt-3'>January 1st 2021</h6>

                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal5">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Wins Project with a Large Natural Gas Utility</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img5} alt="Services Solutions" className='imgShadow img-fluid rounded' />

                            </div>
                            <p> ENSYTE is excited to announce the selection of GASTAR as an integrated gas management system for a large utility with over 1.8 million natural gas customers.The selection was made based on the maturity of the GASTAR product as a fully - built solution to handle natural gas utility business processes, as well as the reputation of the product and longevity of client relationships, some upwards of 20 and 25 years.
                            </p>
                            <p>
                                The implemented solution will provide the client with an efficient and highly competent software solution to manage their Retail Choice natural gas business, specifically the end user transportation customers, inclusive of firm delivery, interruptible delivery, and power generating or large industrial clients where natural gas is supplied by third party brokers/marketers. GASTAR will fully replace the current legacy systems, including all functions currently performed, plus additional business requirements per current and future tariff terms. The software will include interfaces for measurement, weather, SCADA, BTU, Platt’s Gas Daily, and customer information through SAP, to provide and support an integrated approach to management’s oversight.
                            </p>
                            <p>
                                The system will provide the following functionality:
                            </p>
                            <ul>
                                <li>Provide Supplier Pool Forecast from 100,000+ Firm Customers</li>
                                <li>Support Non-Firm (DCQ) Daily Pools with Tiered Imbalances, Interrupts and Critical Day</li>
                                <li>Support COGEN Facilities with Hourly Measurement Import and Nominations</li>
                                <li>Support City Gate Balancing and Daily Planning for Weather Impact</li>
                                <li>Import SAP Transportation Customers and Export Billing Determinants</li>
                                <li>Nominations & Scheduling Web Portal for 3rd Party Suppliers</li>
                            </ul>
                            <p>The project will be completed in Summer 2021 and has been delivered on schedule, using Scrum Methodology.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default A5;