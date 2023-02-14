
import image from '../../assets/img/DataIntegration.jpg'

const A6 = () => {
    return (
        <div>
            <div className="col h-100">
                <div className="card text-center h-100" >
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body justify-content-center">
                        <img src={image} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">GASTAR Sets New Standard in Data Integrity & Management</h4>
                        <h6 className='text-center mt-3'>May 1st 2022</h6>

                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal1">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">

                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Sets New Standard in Data Integrity & Management</h3>


                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={image} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "30rem" }} />

                            </div>
                            <p> ENSYTE understands the enormous challenge our clients have with not only managing data across multiple software systems and data sources, but also transforming this data into useful information that can leveraged for decision making.The GASTAR Data Interfaces provide a fully streamlined and automated process between all related customer systems, giving management and users a central point for decision making.The ENSYTE Team has experience providing integration with a wide variety of systems, including Customer Information Systems(CIS), Measurement, Weather, SCADA, Platt’s pricing, SAP, ORACLE C2M, GL Financial Accounting, Invoicing, and more.
                                < br />
                                <br />

                                We recently completed a project to integrate the GASTAR Product with Oracle’s Customer to Meter(C2M) system.The project involved building both an in -bound interface to bring key data points into GASTAR from C2M, as well as an outbound interface to export financial data back to C2M for invoicing and accounting.The in -bound interface automatically imports all relevant data pertaining to Retail Choice Customers, Cycle Read Usage, Daily Read Usage, Weather and SCADA, into GASTAR.The outbound interface automatically exports all invoice data out of GASTAR to the C2M System, which involved database and access screen changes to update the software to GASTAR’s latest standards.
                                < br />
                                <br />

                                We also recently completed a data migration and integration project for another client, which involved creating new interface processing to schedule batch jobs.The solution included system generated notifications to users for any issues with the interface processing, which is critical and time sensitive for the business.The system generated notifications contain detailed information about any failures, as well as exceptions, so that the user can troubleshoot as needed.Front end functionality was created for users to manage the interface, inclusive of running them manually if needed.Only designated users with specified roles and permissions are able to run the processes, providing additional layers of security to the system.The combination of the automated interface processes with the option to manage them manually provides significant flexibility and control for GASTAR users.
                                < br />
                                <br />
                                The GASTAR product sets a new standard in data integrity and management, as well as security, for these mission critical processes for our clients, giving management and users a central point for decision making, reducing time for data entry and reconciliation, and eliminating the risk of human error or other exposures caused by manual processes.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default A6;