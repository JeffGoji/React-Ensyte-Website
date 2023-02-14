
import img1 from '../../assets/img/1114Release-1.png'
import img2 from '../../assets/img/1114Release-2.png'
import img3 from '../../assets/img/1114Release-3.png'
import img4 from '../../assets/img/1114Release-4.png'
import img5 from '../../assets/img/1114Release-5.png'


const A20 = () => {
    return (
        <>
            <div className="col" >
                <div className="card mb-5 h-100">
                    <div className="card-header text-center blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img1} alt='data Article' className='rounded img-fluid imgShadow mb-5' style={{ maxHeight: "60rem" }} />
                        <h4 className="card-title">New Electronic Bulletin Board</h4>
                        <h6 className='text-center'>January 1st 2023</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal20">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal20" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">
                                New Electronic Bulletin Board</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap text-center">
                            <p>ENSYTE is excited to announce a new, redesigned Electronic Bulletin Board (EBB) for GASTAR, the most comprehensive software solution for managing natural gas transactions.</p>
                            <p>The EBB enables natural gas companies to manage their third party customers, marketers, and / or suppliers in one central location with the following functionality:
                            </p>
                            <ul className='no-bullets'>
                                <li>Nomination and Confirmation Activity</li>
                                Informational Postings and Notifications
                                <li>Marketer Pool Management</li>
                                <li>Customer Meter Setup / Customer Target Volumes</li>
                                <li>Transportation Customer Contracts</li>
                                <li>Pool Balancing - Residential / Commercial / Industrial</li>
                                <li>Imbalance Trading</li>
                                <li>Critical Period / Interruptions</li>
                                <li>Data Views & Reports</li>
                                <li>Invoicing / Accounting</li>
                            </ul>
                            <div className="text-center mb-5">
                                <img src={img1} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                            </div>

                            <h3 className="blue-text">Nominations Screen</h3>
                            <p>GASTAR provides easy access for Marketers and Suppliers to Add and Update Nominations.</p>
                            <div className="text-center mb-5">
                                <img src={img4} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                            </div>

                            <h3 className="blue-text">Supplier / Marketer Management</h3>
                            <p>The GASTAR EBB enables Suppliers and Marketers to independently manage contacts and EBB access.</p>
                            <div className="text-center mb-5">
                                <img src={img5} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                            </div>

                            <h3 className="blue-text">Daily Pool Reporting & Invoicing</h3>
                            <p>Suppliers and Marketers have easy access to daily / monthly cashout reports and invoices.</p>
                            <div className="text-center mb-5">
                                <img src={img2} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                            </div>

                            <h3 className="blue-text">Daily Imbalance Tolerance UI</h3>
                            <p>Suppliers and Marketers can view settlement reports for both interruptible pools and non-interruptible (displayed below) pools.</p>

                            <div className="text-center mb-5">
                                <img src={img3} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </>)
}

export default A20;