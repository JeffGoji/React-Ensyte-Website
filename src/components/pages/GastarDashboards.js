import React from 'react';

import dashboard1 from '../../assets/img/visual-proto.jpg'
import dashboard2 from '../../assets/img/node-proto.png'

function GastarDashboards() {

    return (
        <div className='container-fluid'>
            <div className="row blue-bg justify-content-center align-self-center">
                <h1 className='text-center mb-3 mt-3 text-white'>GASTAR Dashboard</h1>
            </div>
            <div className='row justify-content-center mt-5'>

                <div className='col-lg-5 col-md-5 col-sm-12'>
                    <img src={dashboard1} alt='New Gastar Dashboard' className='img-fluid rounded imgShadow mt-5' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 p-3'>
                    <h2 className='text-center'>New GASTAR Dashboard</h2>
                    <p>
                        ENSYTE is excited to announce a new dashboard to its GASTAR solution, the most comprehensive natural gas management solution on the market today.
                        <br />
                        <br />
                        The GASTAR Dashboard is designed for managers and executives to view high level summary data, as well as visual displays of facilities and other assets.
                    </p>
                </div>

            </div>
            <div className='row mt-5 blue-bg text-white p-3 justify-content-center mb-6'>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <h2 className='text-center mb-4'>Interactive Visual Display</h2>
                    <p>
                        The Dashboard includes an Interactive Visual Gas and Fluid Flow Network, which provides clients with the ability to build interactive network nodes and links and setup intelligence for each part of the network.  The network manages Facilities, Wells, Composition Samples, Meters, Compressors, Liquid Sales Batteries, Gas Sales Meters, and more.

                    </p>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12'>
                    <img src={dashboard2} alt='New Gastar Node Creator' className='img-fluid rounded mt-5' />
                </div>

            </div>

        </div>
    )

}

export default GastarDashboards