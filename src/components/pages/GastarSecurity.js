import React from 'react'
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

// import img1 from '../../assets/img/Diamond-mask-2.png'
import dataCenter from '../../assets/img/web-security-2.jpeg'
import database from '../../assets/img/icons2/database.svg'
import shield from '../../assets/img/icons2/shield.svg'
import lock from '../../assets/img/icons2/lock.svg'
import connection from '../../assets/img/icons2/connection.svg'
import lock2 from '../../assets/img/icons2/lock2.svg'

function GastarSecurity() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-white pb-4">
            <div className="row blue-bg">
                <h1 className="text-center text-white mt-3 mb-3">GASTAR Data Security</h1>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-lg-4 col-md-12 col-sm-12 text-center">
                    <img src={dataCenter} alt="Product" className='img-fluid rounded imgShadow mt-2' style={{ maxHeight: "20rem" }} />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 text-center mt-2">

                    <p>ENSYTE’s hosting business processes are structured to preserve and protect information handled on the customer’s behalf. ENSYTE’s Hosting Partners, CyberLink Solutions, uses respected enterprise partners for network and infrastructure services who have certified their services with compliancy agencies, such as AICPA/SOC, SAS 70 Type II, SSAE 16, PCI, SOX, HIPPA, and GLBA compliance.
                        <br />
                        <br />

                        CyberLink’s business processes are structured to preserve and protect information handled on the customer’s behalf. CyberLink uses respected enterprise partners for network and infrastructure services who have certified their services with compliancy agencies. Our partners have AICPA/SOC, SAS 70 Type II, SSAE 16, PCI, SOX, HIPPA, and GLBA compliance. Malicious activity, whether it comes in the office environment or online, can cost an enterprise countless hours, clients, and resources. CyberLink and its infrastructure partner’s deliver multiple overlapping tiers of protection. The CyberLink customer environment is surrounded with layers of defenses, both hardware and software, to avoid, repel, and withstand threats. Through best-in-class operational procedures and partnerships with industry-leading security technology providers, CyberLink delivers a portfolio of security provisions and options that maximize uptime, protect private information, and significantly mitigate business risk.</p>
                </div>
            </div>

            {/* Safegaurding data layer card */}

            <div className="container-fluid border rounded-4 mt-6 mb-5 bg-lighter-grey cardshadow">
                <div className='row justify-content-center mt-4'><h2 className='text-center mb-5'>Safeguarding Data, Layer By Layer</h2>
                    <div className='col-md-6 col-sm-12'>
                        <div className="card mb-3">
                            <div className="row justify-content-center g-0">
                                <div className="col-md-2 col-sm-12 text-center">
                                    <img src={database} className="img-fluid rounded-start mt-4 mb-2" alt="..."></img>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Overlapping Layers of Protection</h5>
                                        <p className="card-text">Cyberlink ASP systems monitor many facets of infrastructure and operations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center g-0 mt-5">
                                <div className="col-md-2 col-sm-12 text-center">
                                    <img src={connection} className="img-fluid rounded-start mt-4 mb-2" alt="..."></img>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Wide Selection of Upgrade Options</h5>
                                        <p className="card-text">Individual protection profiles can be tailored to meet unique needs through a variety of hardware and software security options.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center g-0 mt-5 mb-5">
                                <div className="col-md-2 col-sm-12 text-center">
                                    <img src={lock2} className="img-fluid rounded-start mt-4 mb-2" alt="..."></img>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Unique, Highly Secure Network Design</h5>
                                        <p className="card-text">A Network-Within-a-Network topology provides out-of-band management for remote access with reduced exposure to external threats.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className="card mb-3">
                            <div className="row justify-content-center g-0 ">
                                <div className="col-md-2 col-sm-12 text-center">
                                    <img src={shield} className="img-fluid rounded-start mt-4 mb-2" alt="..."></img>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Exceptional Standard Security Offering</h5>
                                        <p className="card-text">CyberLink services come standard with one of the industry’s most comprehensive sets of security features.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center g-0 mt-3">
                                <div className="col-md-2 col-sm-12 text-center">
                                    <img src={lock} className="img-fluid rounded-start mt-4 mb-2" alt="..."></img>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Latest Security Technologies</h5>
                                        <p className="card-text">Data is protected by industry-leading systems offering comprehensive defenses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            <div className='row justify-content-center mt-6'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <h3 className='text-center blue-bg rounded-2 text-white p-1'>Physical Operations</h3>
                    <p className="mt-4">If an infrastructure is not physically secure, neither is the enterprise. Physical and operational security is the foundation of the Cyberlink ASP infrastructure. No other measures matter without it. Every Cyberlink ASP data center is fully audited based on SSAE 16 reporting on controls to meet industry-recognized requirements for security—no exceptions.</p>

                    <h4 className='mt-4'>Data Center and Server Room Measures</h4>

                    <ul>
                        <li>Data centers have controlled access and 24-hour security</li>
                        <li>No server room doors are public-facing</li>
                        <li>Server rooms are staffed 24/7</li>
                        <li>Un-marked entry and exit doors</li>
                        <li>Digital security video surveillance</li>
                        <li>Biometric security systems</li>
                        <li>Server room access strictly limited to data center employees and escorted contractors or visitors</li>
                        <li>Barcode-only identification on hardware; no customer markings of any type on the servers themselves</li>
                    </ul>
                </div>

                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <h3 className='text-center blue-bg rounded-2 text-white p-1'>Network Security</h3>
                    <h4 className='mt-4'>The Network-Within-a-Network</h4>

                    <ul>
                        <li>Public Network handles public traffic to hosted websites or online resources</li>
                        <li>Private Network allows for out-of-band management through a distinct stand-alone third carrier over SSL, PPTP, or IPSEC VPN gateways</li>
                        <li>Data Center to Data Center Network provides secure connectivity between servers housed in separate facilities</li>
                    </ul>
                </div>
                <div className='row justify-content-center blue-bg text-white mt-6'>
                    <div className='col-lg-10 col-md-12 col-sm-12 text-center'>
                        <h3 className='text-center mt-3 blue-bg rounded-2 text-white p-2'>System, Application & Data Security</h3>
                        <p>Beneath the layers of physical and network protection, individual computing systems, applications, and data are further safeguarded by several tiers of comprehensive, standard security features. A dynamic range of security options ensure an enterprise’s security profile.</p>
                        <h4 className='mt-4'>Standard Services</h4>

                        <p className='mb-4'><b>Private Network Windows and Red Hat Update Servers</b>
                            <br />
                            Servers within the Private Network receive the latest operating system security patches and upgrades, allowing initiation and installation of patches and updates on-demand.</p>
                        <p className='mb-4'>
                            <b>Virus Scan and Host Intrusion Servers</b>
                            <br />
                            These systems combine antivirus, anti-spyware, firewall, and intrusion prevention technologies to stop and remove malicious software from the infrastructure.
                        </p>
                        <p className='mb-4'>
                            <b>Network IDS/IPS Protection</b>
                            <br />
                            Through partnerships with leading hardware and software vendors, a complete array of intrusion protection and assessment options are offered at both the network and host level.
                        </p>
                        <p className='mb-4'>
                            <b>Vulnerability Assessment and Reporting</b>
                            <br />
                            Providing active scanners, featuring high speed discovery, configuration auditing, asset profiling, sensitive data discovery, and vulnerability analysis of security posture.
                        </p>
                        <p className='mb-4'>
                            <b>Virus Scan and Host Intrusion Servers</b>
                            <br />
                            Delivers always-on, real-time anti-virus protection of core Linux and Windows environments to monitor systems for potential attacks.
                        </p>
                        <p>
                            <b>SSL Certificates</b>
                            <br />
                            The SSL certificates are backed by respected providers. Every SSL Certificate is signed with a reliable and ubiquitous root so customers don’t have to worry.
                        </p>
                    </div>

                </div>
            </div>
            <div className="text-center mt-5" >
                <NavLink className="btn btn-lg text-center btn-primary m-2" to="../gastar-hosting"><h2 className="text-center">GASTAR Hosting</h2></NavLink></div>
            {/* <NavLink className="btn btn-lg text-center btn-primary" to="../gastar-hosting"><h2 className="text-center">Gastar Hosting Options</h2></NavLink> */}
        </div>
    )
}



export default GastarSecurity