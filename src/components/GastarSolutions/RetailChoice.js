
import { useEffect } from "react";
import { NavLink } from 'react-router-dom'

// import img1 from '../../assets/img/retail-choice.jpg'
// import img1 from '../../assets/img/retail-marketing.jpg'


function RetailChoice() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row blue-bg">
                <h1 className="text-center mt-3 mb-3 text-white">GASTAR For Retail Choice & End User Transportation</h1>
            </div>
            {/* <div className="row justify-content-center bg-lighter-grey mt-5 mb-5"> */}
            <div className="row justify-content-center imgBg25 text-white">

                {/* <div className="col-lg-2 col-md-12 col-sm-12 text-justify mt-2">
                    <img src={img1} alt="Retail choice" className="img-fluid rounded imgShadow mb-5 mt-5" />
                </div> */}
                <div className="col-lg-7 col-md-12 col-sm-12 text-center">
                    <p className="p-2 mt-5">The Retail Choice System supports transportation customers in the acquisition of gas supply from third-party marketers. There are two components to this program: (1) customers that are aggregated into a marketer choice pool and (2) customers that are large enough to acquire gas supply directly or engage an agent/marketer to provide the supply. GASTAR’s ‘on-system’ functionality supports daily read and cycle read data for meter points and includes procedures for rolling up the data to determine imbalance positions. The solution calculates the allocation of capacity for each customer to the marketer pool, as well as imbalance and settlement information for transfer to the Accounting and Invoicing Modules.
                        <br />
                        <br />
                        GASTAR’s on-system modules handle interface to SCADA or other EFM devices, transportation customer contracts, residential pool balancing, industrial & commercial pool balances, and a nominations and scheduling module for workstations and EBB for internal and external communication.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-2 col-sm-8 text-center mb-2">
                        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal11">Features</button>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-center mb-2" data-bs-toggle="modal" data-bs-target="#modal169"><button className="btn btn-warning btn-lg">Schedule a Demo</button>
                    </div>
                </div>
            </div>

            {/* Modal Begin */}
            <div className="modal fade" id="modal11" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Features for Retail Choice</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-wrap">
                            <ul className="blue-dots check">
                                <li>BA-CIS Sub-Module</li>
                                This Retail Choice business practices sub-module is to centralize the information for transportation customers and to formalize the links between GASTAR and the Client’s CIS system.The BA-CIS module is dedicated to managing transportation customers with any of the recognized Customer Roles, such as Direct Read, Cycle Read,Hourly Read, Fossil Generators, etc. For Retail Choice, the solution isolates business functions and directs the User to the proper set of features and functions while operating out of a dedicated and integrated database. On-System shippers and marketers are managed in GASTAR with a transaction interface setup to update the SAP CRM as necessary.

                                <li>EDI Shipper Nominations</li>
                                An EDI package is offered to manage nominations with the various pipelines that clients may use. The EDI system is NAESB compliant and can manage all nomination and scheduling transactions on the interstate pipelines. All interstate nomination business practices are NAESB compliant.

                                <li>LDC Premise & Meter List</li>
                                The transportation customer ‘Service Location’, the operator’s ‘Well Location,’ and ‘Attributes’ are setup directly from the LDC Premise & Meter List sub-module. In addition, the BTU Management and Weather Data features have been added to access that data from this sub-module. It provides access to the Premise and Meter data. Screen also provides a convenient location for assessing the Premises for a Marketer or pool.

                                <li>Customer List Sub-Module</li>
                                For each Marketer, Customer List provides a listing of the customers in the Marketer’s pools. The column content in the Grid is customized for each client and generally includes the Rate, Cycle #, Monthly CCF and THM, and in some cases the Demand Statistics, such as Baseload and Heat Load. Customer List is available on EBB for Marketers.

                                <li>Nominations & Confirmations </li>
                                In addition to a Pathed Nomination Module, GASTAR also has a non-pathed module to allow Marketers/Agents to make multiple downstream nominations from a single quantity at the delivery point gate station. This addition greatly simplifies the gas control procedures for marketers and agents who need to nominate to multiple downstream parties. A gas control confirmation screen notifies marketers that the nomination has been confirmed and scheduled, and the system has the capability to send out system-generated notifications to notify marketers.

                                <li>Interruptible Transportation (IT) Pool – Also Known as Daily Contract Quantity (DCQ) – and Firm Transportation (FT) Pool Management – Also Known as Aggregate Daily Contract Quantity (ADCQ)</li>
                                The IT Pool features and functions apply to all IT customers, including single large Industrial/Commercial (I&C), pipeline direct measured and pooled daily read customers and hourly read customers.  Formula driven invoicing and feature to preview invoice data prior to committing the data to the Accounting Module for invoice generation, including Prior Period Adjustments (PPA’s), is available on both IT and FT Pool. This functionality is useful for managing I&C Customers, Agents, and Direct Customers.

                                <li>The Firm Transportation (FT) Pool Target</li>
                                FT Pool Targets are calculated as a rollup from the Customer Targets calculated in the proprietary GASTAR algorithm. This algorithm utilizes daily weather data against daily Baseload and Heat load calculations to generate a forecast. The customer Baseload is the consumption/usage at a “0” HDD and the Heat Load is a calculation of CCF and TH per HDD. This calculation has the highest time resolution for cycle read data and the most accurate estimate of Customer Usage per HDD. GASTAR has the option to automate the target generation process and likely achieve greater accuracy. This feature could be used to automate this process, along with managing the FT/P1 customers in the Marketer pools.
                            </ul>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* Modal End */}


            {/* Original below */}
            {/* <div className="row justify-content-center mt-5 mb-5">
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="card mt-5 mb-5 cardshadow">
                        <div className="card-header text-center blue-bg text-white"><h2>GASTAR Features for Retail Choice</h2></div>
                        <div className="card-body fs-5">
                            <ul className="blue-dots check">
                                <li>BA-CIS Sub-Module</li>
                                This Retail Choice business practices sub-module is to centralize the information for transportation customers and to formalize the links between GASTAR and the Client’s CIS system.The BA-CIS module is dedicated to managing transportation customers with any of the recognized Customer Roles, such as Direct Read, Cycle Read,Hourly Read, Fossil Generators, etc. For Retail Choice, the solution isolates business functions and directs the User to the proper set of features and functions while operating out of a dedicated and integrated database. On-System shippers and marketers are managed in GASTAR with a transaction interface setup to update the SAP CRM as necessary.

                                <li>EDI Shipper Nominations</li>
                                An EDI package is offered to manage nominations with the various pipelines that clients may use. The EDI system is NAESB compliant and can manage all nomination and scheduling transactions on the interstate pipelines. All interstate nomination business practices are NAESB compliant.

                                <li>LDC Premise & Meter List</li>
                                The transportation customer ‘Service Location’, the operator’s ‘Well Location,’ and ‘Attributes’ are setup directly from the LDC Premise & Meter List sub-module. In addition, the BTU Management and Weather Data features have been added to access that data from this sub-module. It provides access to the Premise and Meter data. Screen also provides a convenient location for assessing the Premises for a Marketer or pool.

                                <li>Customer List Sub-Module</li>
                                For each Marketer, Customer List provides a listing of the customers in the Marketer’s pools. The column content in the Grid is customized for each client and generally includes the Rate, Cycle #, Monthly CCF and THM, and in some cases the Demand Statistics, such as Baseload and Heat Load. Customer List is available on EBB for Marketers.

                                <li>Nominations & Confirmations </li>
                                In addition to a Pathed Nomination Module, GASTAR also has a non-pathed module to allow Marketers/Agents to make multiple downstream nominations from a single quantity at the delivery point gate station. This addition greatly simplifies the gas control procedures for marketers and agents who need to nominate to multiple downstream parties. A gas control confirmation screen notifies marketers that the nomination has been confirmed and scheduled, and the system has the capability to send out system-generated notifications to notify marketers.

                                <li>Interruptible Transportation (IT) Pool – Also Known as Daily Contract Quantity (DCQ) – and Firm Transportation (FT) Pool Management – Also Known as Aggregate Daily Contract Quantity (ADCQ)</li>
                                The IT Pool features and functions apply to all IT customers, including single large Industrial/Commercial (I&C), pipeline direct measured and pooled daily read customers and hourly read customers.  Formula driven invoicing and feature to preview invoice data prior to committing the data to the Accounting Module for invoice generation, including Prior Period Adjustments (PPA’s), is available on both IT and FT Pool. This functionality is useful for managing I&C Customers, Agents, and Direct Customers.

                                <li>The Firm Transportation (FT) Pool Target</li>
                                FT Pool Targets are calculated as a rollup from the Customer Targets calculated in the proprietary GASTAR algorithm. This algorithm utilizes daily weather data against daily Baseload and Heat load calculations to generate a forecast. The customer Baseload is the consumption/usage at a “0” HDD and the Heat Load is a calculation of CCF and TH per HDD. This calculation has the highest time resolution for cycle read data and the most accurate estimate of Customer Usage per HDD. GASTAR has the option to automate the target generation process and likely achieve greater accuracy. This feature could be used to automate this process, along with managing the FT/P1 customers in the Marketer pools.
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="text-center p-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-overview"><h2 className="text-center">About GASTAR</h2></NavLink>
            </div>

        </div>

    )
}

export default RetailChoice;