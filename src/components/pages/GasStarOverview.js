import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import productImg from '../../assets/img/productImage.jpg'
import devTeam from '../../assets/img/customer-support-02.jpg'
// import gastarLogo from '../../assets/img/gastar-logo-1.png'

const GasSupply = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="container-fluid bg-white pb-4">
            <div className="row blue-bg">
                <h1 className="text-center text-white mt-3 mb-3">GASTAR Overview</h1>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 col-sm-12 text-center">
                    <img src={productImg} alt="Product" className='mt-5 mb-5 img-fluid' />
                </div>
                <div className="col-lg-5 col-sm-12 text-justify mt-5">
                    <h2 className='mb-4 text-center'>What is GASTAR?</h2>
                    <p>GASTAR™ is the most flexible, user-driven software solution for managing natural gas business transactions from wellhead to burner tip – giving our clients the power to leverage data from across an organization into one streamlined business process. GASTAR™ manages information from all points of the natural gas life cycle as one integrated system, from the wellhead/meter to any pipeline system (intrastate/ interstate/ gathering), through gas processing and other midstream functions, to the local distribution company (LDC) and retail marketers for final sale. The solution is structured with functionality for each of these business segments along the natural gas supply chain (Producer, Marketer, Pipeline, etc.) using a common database, in essence creating a seamless flow of information.
                        <br />
                        <br />
                        GASTAR™ is designed for users by users, which means less screen clicks, less spreadsheets to manage, less systems to learn, less errors, and ultimately more efficiency. The ENSYTE Team has a unique understanding of the daily challenges ‘front line’ operations personnel face, most importantly the ability to make quick decisions under pressure with ever-changing variables. In addition, our users must be able to report information to output systems in compliance with corporate and regulatory requirements. GASTAR™ offers a system that users can actually learn and adopt, as well as a data migration strategy that automates the information coming out of legacy systems so that users are not spending valuable time trying to clean and sort old data. GASTAR’s user-focused approach means that gas supply, transportation, and marketing teams are able to focus on optimizing revenue streams and delivering value to customers.</p>
                </div>
            </div>

            {/* <div className='row mt-5 mb-5 blue-bg'> */}
            {/* <div className='row justify-content-center mt-4 bg-lighter-grey'>
                <div className='col-lg-5 col-md-12 col-sm-12 align-self-center'>
                    <div className="card border-0 mb-3 mt-4 bg-lighter-grey" style={{ maxwidth: "340px" }}>
                        <div className="row g-0">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <img src={gastarLogo} alt="Product" className="img-fluid rounded-start" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="card-body">
                                    <h5 className="card-title">GASTAR Features</h5>
                                    <ul>
                                        <li>Business Associates</li>
                                        <li>Contract Management</li>
                                        <li>Pipeline, Points, and Rates</li>
                                        <li>Gas Purchases and Sales</li>
                                        <li>Gas Nominations and Scheduling</li>
                                        <li>Electronic Bulletin Board (Web Portal)</li>
                                        <li>Capacity Release</li >
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* </div> */}


            <div className="row mt-5 blue-bg text-white">
                <div className="col-lg-6 col-sm-12 text-center">
                    <img src={devTeam} alt="Dev Support" className='mt-5 mb-5 rounded img-fluid imgShadow' style={{ maxHeight: "300px" }} />
                </div>
                <div className="col-lg-5 col-sm-12 text-justify mt-5 mb-4">
                    <h2 className='text-center mb-4'>GASTAR Technology</h2>
                    <p>
                        Another differentiator for ENSYTE is the company’s longstanding emphasis on technology, as opposed to generating billable hours, which translates into a significant focus on investing time and resources back into GASTAR™. The product has evolved through the Microsoft technology environment since inception and most recently was converted to the latest workstation and database technology utilizing the Visual Studio DOT.NET and WPF development tools. This technical base offers a long deployment life with minimal annual resource allocations for upgrades. Full adherence to the Microsoft software development and deployment tool sets assures the GASTAR™ client of long-term deployment and return on investment.</p>
                </div>
            </div>


            <div className="text-center mt-5">
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-value"><h2 className="text-center">GASTAR Value and Benefit</h2></NavLink>
            </div>

        </div>

    )
}

export default GasSupply;