import { NavLink } from 'react-router-dom'
// import Auth from '../../utils/auth';
import '../../index.css'

//Import picture:
import logo1 from "../../assets/img/logo.png"

export const Nav = () => {
    // const loggedIn = Auth.loggedIn();

    // const logout = event => {
    //     event.preventDefault();
    //     Auth.logout();
    // };




    return (

        <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">

                <NavLink className="navbar-brand" to="/">
                    <img src={logo1}
                        alt="Company Logo"

                        style={{ width: '40%' }}
                    /></NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-nav">
                        <li className="nav-item ms-lg-3">
                            <NavLink className={"nav-link active"} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown ms-lg-3">
                            <div
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">

                                About ENSYTE
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" href="#">
                                <li><NavLink className="dropdown-item" to="/about">About Us</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/executive-team">Our Team</NavLink></li>
                            </ul>
                        </li>
                        <li className={"nav-item dropdown ms-lg-3"}>
                            <div
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                About GASTAR
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" href="#">
                                {/* <li><h4 className={"dropdown-header"}>GASTAR Features</h4></li> */}

                                <li><NavLink className="dropdown-item" to="gastar-overview">GASTAR Overview</NavLink></li>

                                <li><NavLink className="dropdown-item" to="gastar-value">GASTAR Value</NavLink></li>
                                <li>
                                    <NavLink className="dropdown-item" to="gastar-risk">Enterprise Risk Management</NavLink>
                                </li>
                                <li><NavLink className="dropdown-item" to="gastar-hosting">Hosting Options</NavLink></li>
                                <li><NavLink className="dropdown-item" to="gastar-security">Data Security</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown ms-lg-3">
                            <div
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink2"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                GASTAR Solutions
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                <li><NavLink className="dropdown-item" to="gastar-solutions-gas-supply">Gas Supply</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/gastar-retail-choice">Retail Choice</NavLink></li>
                                <li className='dropdown-item disabled'>Electronic Bulletin Board
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/gastar-natural-gas">Natural Gas Utility</NavLink>
                                </li>
                                <li><NavLink className="dropdown-item" to="/gastar-pipeline">Pipeline</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/gastar-retail-gas">Retail Gas Marketer</NavLink></li>
                                <li>
                                    <NavLink className="dropdown-item" to="/gastar-producer">Producer/Operator</NavLink>
                                </li>
                                <li><NavLink className="dropdown-item" to="/gastar-midstream">Midstream</NavLink></li>
                                <li>
                                    <NavLink className="dropdown-item" to="/gastar-natgas-producer">Producer Marketing</NavLink>
                                </li>
                                <li className="dropdown-item disabled" >Liquids Storage Inventory Mgmt</li>
                                <li className="dropdown-item disabled" >Gas Accounting
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <div
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                ENSYTE Services
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <NavLink className="dropdown-item" to="/gastar-custom-solutions">Customized Solutions</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/gastar-consulting">Consulting Services</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/gastar-customer-support">Customer Support</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className={"nav-item ms-lg-3"}>
                            <NavLink className={"nav-link"} to="newsstand">Latest News</NavLink>
                        </li>
                        <li className={"nav-item ms-lg-3"}>
                            <NavLink className={"nav-link"} to='contact'>Contact Us</NavLink>
                        </li>
                        <NavLink className={"nav-link"} to='contact'><button type="button" className="btn btn-warning ms-lg-3">
                            Request a Demo
                        </button></NavLink>
                    </div>
                </div>
            </div>
        </div >



    )
}


export default Nav;