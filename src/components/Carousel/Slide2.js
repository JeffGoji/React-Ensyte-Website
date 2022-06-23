import React from 'react';

import { NavLink } from 'react-router-dom';

import logo2 from "../../assets/img/gastar-logo-1.png"

export default class Slide2 extends React.Component {
    render() {

        return (
            <div className='row justify-content-center mt-2'>

                <div className="card border-0" style={{ maxWidth: "100rem" }}>
                    <div className="text-black">
                        <img src={logo2} className="img-fluid rounded mx-auto d-block mt-5" alt="Enterprise Risk Management Logo" />
                        <h1 className='blue-text'>GASTAR™ NatGas Software</h1>
                        <p className="fs-5">
                            ENSYTE provides flexible, comprehensive, and feature-rich risk
                            mitigation software solutions for managing the natural gas
                            supply chain—from the producer/marketer to the end
                            user/customer.
                        </p>
                        <p><NavLink className="btn btn-lg btn-primary" to="gastar-overview">Learn more</NavLink></p>
                    </div>
                </div>

            </div>
        )
    }
}