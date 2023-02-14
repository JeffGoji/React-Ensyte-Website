
import img from '../../assets/img/GasMeterSnow.jpeg'

const A21 = () => {
    return (
        <div>
            <div className="col h-100">
                <div className="card mb-5 h-100" >
                    <div className="card-header blue-bg text-white">FEATURED / NEWS RELEASE</div>
                    <div className="card-body">
                        <img src={img} alt='data Article' className='rounded img-fluid imgShadow mb-4' style={{ maxHeight: "14rem" }} />
                        <h4 className="card-title">GASTAR Features for Winter Peak Season</h4>
                        <h6 className='text-center mt-3'>February 1st 2023</h6>
                    </div>
                    <div className='card-footer'><button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal21">Read More</button></div>
                </div>
            </div>
            <div className="modal fade" id="modal21" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content">
                        <div className="modal-header text-center blue-bg">
                            <h3 className="modal-title text-white center" id="staticBackdropLabel">GASTAR Features for Winter Peak Season</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-6 text-wrap">
                            <div className="text-center mb-4">
                                <img src={img} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxWidth: '800px' }} />

                            </div>
                            <p>One of the big values GASTAR provides to our clients is the ability to handle the Peak Winter Season and have confidence that the system will be able to handle the increased amount of activity and load natural gas utilities manage during the Winter months.</p>
                            <p>
                                We have received great feedback from our clients on these features, and we take pride in providing our customers with a mission critical solution to manage the business through all the seasons of demand.
                            </p>
                            <p>
                                <b>Prior Period Adjustments</b>
                            </p>
                            <p>
                                GASTAR Users can view both original and revised daily volumes as part of the daily cash out view for the prior impacted period. Users can drill down on the cash out daily line item to see the customer level details, which includes the revised customer level usages.
                            </p>
                            <p>
                                GASTAR contains an approval process for approving revised volumes if required for the prior settled/lock down period. Revised volumes have an approval/rejection status associated with the revised volume to be further considered for a revised cash out.
                            </p>
                            <p>
                                The approved revised usage can be viewed by the invoicing/accounting team, so as to consider the revised dollar amount for any manual PPA adjustment in the current invoice for any prior period adjustment.
                            </p>
                            <p>
                                The system provides the ability of the billing/accounting team to approve/reject revised volume/amounts approved by the settlement team for the prior period, to be considered/included as a PPA adjustment in the current invoice.
                                GASTAR maintains both the revised volume approval status and the approval/rejection status of the billing/invoicing team for future reference.

                            </p>
                            <p>
                                <b>Critical Period</b>
                            </p>
                            <p>
                                GASTAR provides features to support critical periods during extreme cold weather.
                                Client can define the scheduled start and end times for the critical periods and broadcast notifications can be set up to notify all suppliers / marketers of the critical periods, as well as scheduled emails that can be triggered per the scheduled dates.
                            </p>
                            <p>
                                Users can also define the upper and lower tier percentages, which can apply to both interruptible and firm customers.  The default values for threshold percentages can be maintained in the system and can be changed in case of any future tariff changes.
                            </p>
                            <p>
                                <b>Interruptions</b>
                            </p>
                            <p>
                                GASTAR provides features to support interruption periods during extreme cold weather.
                            </p>
                            <p>
                                Clients can set periods of gas supply interruption, during which supply is restricted on interruptible supply pools due to very cold days.  Clients can identify when firm supply pools get the priority or if large customers are setup as exempt from interruptible, as well as setup interruptions on the days(s) applicable at the rate category level.</p>
                            <p>
                                It is very easy to setup interruptions in GASTAR on one or more than one rate category at the same time.  The solution allows users to see a list of customers that are exempted from interruptions for any reason. Suppliers have access to interruption volitation reports to see the therms flowed on the meters that were under the interruptible rate category, in which case suppliers are penalized.  The GASTAR Electronic Bulletin Board (EBB) displays the cashout report that displays if any interruption was applied and associated penalties to be calculated.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default A21;