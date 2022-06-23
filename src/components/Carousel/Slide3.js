import React from 'react';

import { NavLink } from 'react-router-dom';

import erm1 from "../../assets/img/erm-image.png"


export default class Slide3 extends React.Component {
    render() {

        return (
            <div className='row justify-content-center'>

                <div className="card border-0" style={{ maxWidth: "80rem" }}>
                    <div className="text-black">
                        <img src={erm1} className="img-fluid rounded mx-auto d-block mt-3" alt="Enterprise Risk Management Logo" style={{ maxWidth: "30rem" }} />
                        <h1>Enterprise Risk Management</h1>
                        <p className="fs-5">
                            ENSYTE’s software solutions address ERM - Enterprise Risk
                            Management - for companies in the Natural Gas Supply Chain.
                            Epitomized with the COSO Framework. The COSO framework cube
                            brings together in a single vision the interdependencies of C
                            Level Strategies, Operational Excellence, and Financial
                            Results with Audit and Regulatory Compliance. ENSYTE’s vision
                            and mission are wrapped into the ERM cube with GASTAR, the
                            flagship product, supporting Client initiatives for applicable
                            Business Entities.
                        </p>
                        <p>
                            <NavLink className="btn btn-lg btn-primary" to="gastar-risk">Learn More</NavLink>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}