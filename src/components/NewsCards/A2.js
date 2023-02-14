import img13 from '../../assets/img/lngTanker.jpg'

const A2 = () => {
    return (
        <>
            <div className="col" >
                <div className="card mb-5 h-100">
                    <div className="card-header text-center blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img13} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">ENSYTE Adds a Liquids Storage Module to GASTAR for NGL & LNG Product Management</h4>
                        <h6 className='text-center mt-3'>July 1st 2022</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal2">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">ENSYTE Adds a Liquids Storage Module to GASTAR for NGL & LNG Product Management</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img13} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "35rem" }} />

                            </div>
                            <p>ENSYTE has recently enhanced GASTAR’s natural gas software solution with a new module to manage Natural Gas Liquids (NGL) and Liquified Natural Gas (LNG), called GASTAR-LQ. The enhancement was implemented to support a client who had a business requirement to offer a portion of their physical storage facility to suppliers under an Asset Management Agreement (AMA), now retitled an LNG Pool Management Agreement, and to setup a physical gas exchange program.
                                <br /><br />
                                GASTAR-LQ handles the clients management of LNG storage contracts with third parties that required daily tracking of storage inventory, in energy (DTH), volume (MCF) or gallons (GAL); thus, the solution manages two distinct data elements client: (1) Physical operating volumes and energy in two LNG facilities; and, (2) the Ownership slices of the various contract storage parties. In this business relationship, the host client serves as administrator of the asset and sets up the contract allocation per the third party contract terms for allocated capacity and the Maximum Daily Quantity (MDQ), if any.
                                <br /><br />
                                The GASTAR-LQ solution includes the following features:
                                <br /><br />
                            </p>
                            <ul>

                                <li>Daily Updates: Total Liquefaction, Vaporization and Gauged Ending Inventory with Daily Boil-Off Calculated. Also, Contract storage inventory is balanced daily and reconciled against the total.</li>
                                <li>Sales to Third Parties: The operating business entity may sell LNG to Buyers and deliver through a truck terminal, via weight differential or metered volume, and issue an Invoice for Accounting.</li>
                                <li>LNG Transfers: LNG transfers can be tracked among any party with storage inventory updated as appropriate.</li>
                                <li>Liquid for Natural Gas Exchanges: Allow the operating company to setup a specialty transfer with a capacity holder, with financial considerations, to conduct a physical swap with a counter party of LNG liquid for natural gas on a connecting pipeline.</li>
                                <li>A Truck Terminal Module: Supports receipt and delivery of LNG for third party contract holders and for Operator sales transactions. Fee variable may be applied per contract terms to secure a revenue position in each transfer.</li>
                                <li>Inventory Reporting: Daily update to the physical (total) LNG inventory, along with the virtual inventory held by the Operator and each contract party.</li>
                                <li>Reporting includesDaily and Month to Date Beginning Inventory</li>
                                <li> Injections to Storage Withdrawals</li>
                                <li>Gauged Inventory with Boil-Off Calculated as the difference between Beginning Inventory and the Measured Net Inventory Changes</li>
                            </ul>
                            <p>
                                For Third Party and Operator transactions, contract transactions are reconciled daily for quantity and monthly for settlement and processing in the Accounting Module. All contract transactions are cross linked to GASTAR shadow account numbers for settlement at the client’s LNG Facility Business unit.
                                <br /><br />
                                The GASTAR-LQ Module can be implemented as a stand-alone solution for any company managing NGL, by product, or LNG, or the module can be integrated into a fully functional natural gas management solution dealing with flowing natural gas and the liquid components.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </>)
}

export default A2;