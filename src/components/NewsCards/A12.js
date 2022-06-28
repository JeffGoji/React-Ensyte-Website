import data from '../../data';
const A12 = (props) => {
    return (
        <div>
            <div className="card border-0 mt-5 ">
                <h2 className="text-center">{data[11].title}</h2>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p>ENSYTE has been working hard on a new feature to support Gas Day planning and tracking of scheduled and measured gas at the City Gate. It is delivered through a graphical program that displays the City Gate configuration, weather and gas plan summary, and scheduled gas delivered to the City Gate. The feature is being implemented for one of our current clients and will be offered to all clients soon.</p>

                            <p>The module includes:</p>
                            <ul>
                                <li>Import of weather data from the LDC’s vendor in multiple occurrences during the day.</li>
                                <li>Direct entry or import of the Gas Day demand based on weather.</li>
                                <li>Import SCADA data from the LDC’s SCADA system to provide an immediate next day update of measured verses schedule gas at the city gate. Update can be secured via download or direct entry for pipeline data to support an end of month reconciliation.</li>
                                <li>Import third party scheduled and actual data for transportation customers to provide a full picture of the gas balances at the city gate. ENSYTE offers an integrated module that can be added at any time to provide this service.</li>
                                <li>This is a unique module designed to provide executives, managers and users with a quick snapshot view of the daily gas plan, supply and demand, as well as the ability to look back to prior days to observe the actual conditions.</li>
                                <li>The module includes the ability to quickly view Purchases, Scheduled Gas, WACOG Data, and the Gas Plan Summary.</li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>)
}

export default A12;