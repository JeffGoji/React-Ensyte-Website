import React from 'react';

import logo from '../../assets/img/logo.png'

export default class Slide1 extends React.Component {
    render() {

        return (
            <div className='row justify-content-center imgBg30 mt-2' style={{ minHeight: "600px" }}>

                <div className="text-center" style={{ maxWidth: "50rem" }}>

                    <img src={logo} className=" rounded mx-auto d-block" alt="Company Logo" style={{ maxWidth: "50rem" }} />

                    <div style={{ maxWidth: "50rem" }}>
                        <h1 className='text-white blue-shadow-2'>ENSYTE Energy Software Int’l, Inc.</h1>
                        <h4 className="text-white blue-shadow-2">
                            Comprehensive Software Solutions for the Natural Gas Supply
                            Chain
                        </h4>
                        {/* <button className="btn btn-lg btn-primary" href="#">Learn More</button> */}

                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-2 fs-6 lightGradient2">
                    <div className="col">
                        <div className="card h-100 bg-transparent border-0">

                            <div className="card-body">
                                <h4 className="card-title">Our Mission</h4>
                                <p className="card-text">To create and successfully implement software solutions that optimize performance, provide visibility, and minimize risk.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent border-0">

                            <div className="card-body">
                                <h4 className="card-title">About ENSYTE</h4>
                                <p className="card-text">ENSYTE is a Texas-based company with great values and business ethics. We are a leading provider of natural gas management software (GMS) solutions, combining over 35 years of industry knowledge with the latest technology and a user-friendly, customer-focused approach.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-transparent border-0">
                            <div className="card-body">
                                <h4 className="card-title">Our Vision</h4>
                                <p className="card-text">To provide World-Class Software and Services for the Natural Gas Value Chain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}