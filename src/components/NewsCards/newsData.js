// src/data/newsData.js
import React from "react";
import { Link } from "react-router-dom";

//Images
//import logo from '../../assets/img/logo.png'
import rig1 from '../../assets/img/rig1.jpg'
import lngTanker from '../../assets/img/lngTanker.jpg'
import customizedSolutions02 from '../../assets/img/customized-solutions-02.jpg'
import img4 from '../../assets/img/computers.jpg'
import img5 from '../../assets/img/consulting-services-01.jpg'
import image from '../../assets/img/DataIntegration.jpg'
import img15 from '../../assets/img/linkedinholiday.jpg'
import img16 from '../../assets/img/Boston.jpg'
import img17 from '../../assets/img/gs-online.jpg'
import img18 from '../../assets/img/UGI-20-Years-1.jpg'
import img19 from '../../assets/img/vista3-1.jpg'
import img20 from '../../assets/img/computers.jpg'
import img21 from '../../assets/img/dataCenter.jpg'
import img22 from '../../assets/img/Producer-Services-Long.jpg'
import img23 from '../../assets/img/pgw-1.jpg'
import img25 from '../../assets/img/Accounting.jpg'
import dashboard1 from '../../assets/img/visual-proto.jpg'
import dashboard2 from '../../assets/img/node-proto.png'
import img1R from '../../assets/img/1114Release-1.png'
import img2R from '../../assets/img/1114Release-2.png'
import img3R from '../../assets/img/1114Release-3.png'
import img4R from '../../assets/img/1114Release-4.png'
import img5R from '../../assets/img/1114Release-5.png'
import img2123 from '../../assets/img/GasMeterSnow.jpeg'
import pimage from '../../assets/img/Pooja-1.png'
import imgHg1 from '../../assets/img/HG-01.jpeg'
import Philly2024 from '../../assets/img/2024Philadelphia.jpeg'
import Upgrade2024 from '../../assets/img/2024Upgrade.jpeg'



const newsData = [
    {
        index: 0,
        title: "ENSYTE Enhances Producer Services Solution",
        description: "December 1st 2022",
        image: rig1,
        modalContent: (
            <>
                <p>
                    ENSYTE is rolling out enhancements to its GASTAR Producer Services
                    Solution to include:
                </p>
                <ul>
                    <li>
                        Better Logic for Capturing Natural Gas Sales Netback Quantity and
                        Value;
                    </li>
                    <li>
                        Better Identification of Imbalances at Interconnect Points between
                        Pipelines and Gathering Systems;
                    </li>
                    <li>
                        Full Accounting for Buy / Sell, Transportation and Storage
                        Transactions;
                    </li>
                    <li>
                        Improved Reporting of Intra-Month Positions and Post Accounting
                        Month Transaction Summary Data;
                    </li>
                    <li>
                        Setup of Central Delivery Point (CDP) Forecast and daily updates
                        automatically updating sales pools.
                    </li>
                </ul>
                <p>
                    The goal of the enhancements is to provide a Producer Sales Module,
                    along with an integrated Gathering Netback Module, that has the
                    capability for netting back quantity (MMBTU) and value ($ / MMBTU) and
                    processing wellhead data to generate Owner Netback, as well as gas
                    severance taxes per Operator total production.
                </p>
                <p>
                    The solution also includes automated Prior Period Adjustment (PPA)
                    calculations with application PPA to current month statements. ENSYTE
                    has significant experience in this area with over 30 years of
                    development work for oil and gas production companies and gathering
                    systems. A recent implementation of the software manages approximately
                    6,000 natural gas wells and approximately 400 producers.
                </p>
                <p>GASTAR Producer Services Solution Features:</p>
                <ul className="fs-6">
                    <li>Wellhead Purchase Contracts</li>
                    <li>Metering, Volume Tracking</li>
                    <li>Production Allocation</li>
                    <li>Well Participating Interest</li>
                    <li>Gas Imbalance Tracking & Reporting</li>
                    <li>Nomination & Scheduling for Gathering</li>
                    <li>Net-Back Calculations</li>
                    <li>WH Purchase Settlements Reporting</li>
                    <li>Producer Communication Web Portal</li>
                </ul>
            </>
        ),
    },
    // Add other news items as needed
    {
        index: 1,
        title: "ENSYTE Adds a Liquids Storage Module to GASTAR for NGL & LNG Product Management",
        description: "July 1st 2022",
        image: lngTanker,
        modalContent: (
            <>
                <p>
                    ENSYTE has recently enhanced GASTAR’s natural gas software solution
                    with a new module to manage Natural Gas Liquids (NGL) and Liquified
                    Natural Gas (LNG), called GASTAR-LQ. The enhancement was implemented
                    to support a client who had a business requirement to offer a portion
                    of their physical storage facility to suppliers under an Asset
                    Management Agreement (AMA), now retitled an LNG Pool Management
                    Agreement, and to setup a physical gas exchange program.
                    <br />
                    <br />
                    GASTAR-LQ handles the clients management of LNG storage contracts with
                    third parties that required daily tracking of storage inventory, in
                    energy (DTH), volume (MCF) or gallons (GAL); thus, the solution
                    manages two distinct data elements client: (1) Physical operating
                    volumes and energy in two LNG facilities; and, (2) the Ownership
                    slices of the various contract storage parties. In this business
                    relationship, the host client serves as administrator of the asset and
                    sets up the contract allocation per the third party contract terms for
                    allocated capacity and the Maximum Daily Quantity (MDQ), if any.
                    <br />
                    <br />
                    The GASTAR-LQ solution includes the following features:
                    <br />
                    <br />
                </p>
                <ul>
                    <li>
                        Daily Updates: Total Liquefaction, Vaporization and Gauged Ending
                        Inventory with Daily Boil-Off Calculated. Also, Contract storage
                        inventory is balanced daily and reconciled against the total.
                    </li>
                    <li>
                        Sales to Third Parties: The operating business entity may sell LNG
                        to Buyers and deliver through a truck terminal, via weight
                        differential or metered volume, and issue an Invoice for Accounting.
                    </li>
                    <li>
                        LNG Transfers: LNG transfers can be tracked among any party with
                        storage inventory updated as appropriate.
                    </li>
                    <li>
                        Liquid for Natural Gas Exchanges: Allow the operating company to
                        setup a specialty transfer with a capacity holder, with financial
                        considerations, to conduct a physical swap with a counter party of
                        LNG liquid for natural gas on a connecting pipeline.
                    </li>
                    <li>
                        A Truck Terminal Module: Supports receipt and delivery of LNG for
                        third party contract holders and for Operator sales transactions.
                        Fee variable may be applied per contract terms to secure a revenue
                        position in each transfer.
                    </li>
                    <li>
                        Inventory Reporting: Daily update to the physical (total) LNG
                        inventory, along with the virtual inventory held by the Operator and
                        each contract party.
                    </li>
                    <li>Reporting includesDaily and Month to Date Beginning Inventory</li>
                    <li> Injections to Storage Withdrawals</li>
                    <li>
                        Gauged Inventory with Boil-Off Calculated as the difference between
                        Beginning Inventory and the Measured Net Inventory Changes
                    </li>
                </ul>
                <p>
                    For Third Party and Operator transactions, contract transactions are
                    reconciled daily for quantity and monthly for settlement and
                    processing in the Accounting Module. All contract transactions are
                    cross linked to GASTAR shadow account numbers for settlement at the
                    client’s LNG Facility Business unit.
                    <br />
                    <br />
                    The GASTAR-LQ Module can be implemented as a stand-alone solution for
                    any company managing NGL, by product, or LNG, or the module can be
                    integrated into a fully functional natural gas management solution
                    dealing with flowing natural gas and the liquid components.
                </p>
                ,
            </>
        ),
    },
    {
        index: 2,
        title: "ENSYTE Enriches GASTAR User Interface and Dashboards",
        description: "December 1st 2022",
        image: customizedSolutions02,
        modalContent: (
            <>
                <p>ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:
                    Better Logic for Capturing Natural Gas Sales Netback Quantity and Value;
                    Better Identification of Imbalances at Interconnect Points between Pipelines and Gathering Systems;
                    Full Accounting for Buy / Sell, Transportation and Storage Transactions;
                    Improved Reporting of Intra- Month Positions and Post Accounting Month Transaction Summary Data;
                    Setup of Central Delivery Point(CDP) Forecast and daily updates automatically updating sales pools.
                    The goal of the enhancements is to provide a Producer Sales Module, along with an integrated Gathering Netback Module, that has the capability for netting back quantity(MMBTU) and value($ / MMBTU) and processing wellhead data to generate Owner Netback, as well as gas severance taxes per Operator total production.
                    <br />
                    <br />
                    The solution also includes automated Prior Period Adjustment(PPA) calculations with application PPA to current month statements.ENSYTE has significant experience in this area with over 30 years of development work for oil and gas production companies and gathering systems.A recent implementation of the software manages approximately 6, 000 natural gas wells and approximately 400 producers.
                    <br />
                    <br />
                    GASTAR Producer Services Solution Features:
                    <br />
                    <br />
                </p>
                <ul className='fs-6'>

                    <li>Wellhead Purchase Contracts</li>
                    <li>Metering, Volume Tracking</li>
                    <li>Production Allocation</li>
                    <li>Well Participating Interest</li>
                    <li>Gas Imbalance Tracking & Reporting</li >
                    <li>Nomination & Scheduling for Gathering</li >
                    <li>Net - Back Calculations</li >
                    <li>WH Purchase settlements Reporting</li >
                    <li>Producer Communication Web Portal</li >
                </ul>
            </>
        ),
    },
    {
        index: 3,
        title: "ENSYTE Delivers GASTAR for Largest Natural Gas Utility in New Jersey",
        description: "May 1st 2022",
        image: img4,
        modalContent: (
            <>
                <p> ENSYTE has recently completed its implementation of GASTAR’s Retail Choice Suite of Modules for the largest gas and electric utility company in New Jersey, cementing GASTAR’s reputation as the industry’s most comprehensive integrated software solution for the natural gas supply chain.The addition of this Local Distribution Company(LDC) to GASTAR’s existing industry leading clients is a testament to the company’s breadth of knowledge of natural gas business processes, as well as the extensive functionality provided by the product for utility and related businesses.
                    < br /> <br />
                    The system went live in September 2021, in accordance with the original project schedule, replacing a legacy software system, as well as multiple spreadsheets with an integrated data model and application environment.The joint teams worked closely together over the period of the project to conduct an extensive Discovery phase, outline and agree to all the requirements, and deliver modules for testing on a milestone - based schedule that was managed using the Scrum / Agile project management methodology.The schedule included a parallel period, during which System Integration Testing(SIT) was validated and the legacy system was turned off.
                    < br /> <br />
                    On time and budget delivery of the GASTAR solution is a true testament to the collaboration and dedication of both the ENSYTE and Client implementation teams.The availability and engagement of the client teams for the projects is paramount and enabled the ENSYTE team to effectively translate business / workflow requirements into delivered software features.
                    < br /> <br />
                    Notable project deliverables include, among others:
                </p>
                <ul>
                    <li>Data integration with a SAP CIS system for managing 100,000+/- firm retail customers;</li>
                    <li>Web Portal for suppliers with extensive notification, nomination, imbalance trading and monthly settlement with invoice generation and interface back to SAP;</li>
                    <li>Support for COGEN facilities with hourly measurement capture and any-time nominations;</li>
                    <li>Support for LNG peaking services including maintaining inventory positions;</li>
                    <li>Support for City Gate balancing with multiple natural gas sources and distributions;</li>
                    <li>Support for Non-Firm (DCQ) Daily Pools with Tiered Imbalances, Interrupts and Critical Day.</li>
                </ul>
                <p>ENSYTE is excited to further broaden its client footprint, as well as adding to and improving GASTAR’s functionality for managing large / complex business processes for another top tier client.  The implementation took place on the client’s Amazon Web Services (AWS) cloud account, which broadens ENSYTE’s capacity to offer a variety of hosting options for clients.  ENSYTE also supports self-hosting as well as hosting for clients on it dedicated cloud platform, offered through CyberLink Solutions.
                    <br /><br />
                    ENSYTE is excited to announce the completion of its implementation of GASTAR as an integrated gas management system for the largest utility in New Jersey, with over 1.8 million natural gas customers.  The software went live on September 1, 2021, which was the original Go Live date in the project schedule.
                    <br /><br />
                    The project kicked off with a 2 month Discovery Phase, during which the teams met and outlined all the different areas of the system and any customizations needed.  The joint ENSYTE / client teams worked closely for the remainder of the project, utilizing the Scrum Methodology, to deliver the GASTAR modules on a milestone basis to address all requirements.
                    <br />
                    Can you possibly give a summary of the project here?
                    <br /><br />
                    The implemented solution includes interfaces for weather, SCADA, BTU, Platt’s Gas Daily, and customer information through SAP, to provide and support an integrated approach to management’s oversight.
                    <br /><br />
                    The implemented GASTAR product provides the following functionality:
                </p>
                <ul>
                    <li>Provide Supplier Pool Forecast from 100,000+ Firm Customers</li>
                    <li>Support Non-Firm (DCQ) Daily Pools with Tiered Imbalances, Interrupts and Critical Day</li>
                    <li>Support COGEN Facilities with Hourly Measurement Import and Nominations</li>
                    <li>Support City Gate Balancing and Daily Planning for Weather Impact</li>
                    <li>Import SAP Transportation Customers and Export Billing Determinants</li>
                    <li>Nominations & Scheduling Web Portal for 3rd Party Suppliers</li>
                </ul>
                <p>ENSYTE is excited to continue broadening its client footprint, as well as all the additional functionality that was added to the product over the course of the project.  The project also marks the first time the GASTAR Solution was delivered on Amazon Web Services (AWS), broadening ENSYTE’s capability for hosting options, which also include hosting through ENSYTE’s hosted solutions partner, Cyberlink, hosting on a client environment, or any other hosted environment.</p>
            </>
        ),
    },
    {
        index: 4,
        title: "ENSYTE Wins Project with a Large Natural Gas Utility",
        description: "January 1st 2021",
        image: img5,
        modalContent: (
            <>
                <p> ENSYTE is excited to announce the selection of GASTAR as an integrated gas management system for a large utility with over 1.8 million natural gas customers.The selection was made based on the maturity of the GASTAR product as a fully - built solution to handle natural gas utility business processes, as well as the reputation of the product and longevity of client relationships, some upwards of 20 and 25 years.
                </p>
                <p>
                    The implemented solution will provide the client with an efficient and highly competent software solution to manage their Retail Choice natural gas business, specifically the end user transportation customers, inclusive of firm delivery, interruptible delivery, and power generating or large industrial clients where natural gas is supplied by third party brokers/marketers. GASTAR will fully replace the current legacy systems, including all functions currently performed, plus additional business requirements per current and future tariff terms. The software will include interfaces for measurement, weather, SCADA, BTU, Platt’s Gas Daily, and customer information through SAP, to provide and support an integrated approach to management’s oversight.
                </p>
                <p>
                    The system will provide the following functionality:
                </p>
                <ul>
                    <li>Provide Supplier Pool Forecast from 100,000+ Firm Customers</li>
                    <li>Support Non-Firm (DCQ) Daily Pools with Tiered Imbalances, Interrupts and Critical Day</li>
                    <li>Support COGEN Facilities with Hourly Measurement Import and Nominations</li>
                    <li>Support City Gate Balancing and Daily Planning for Weather Impact</li>
                    <li>Import SAP Transportation Customers and Export Billing Determinants</li>
                    <li>Nominations & Scheduling Web Portal for 3rd Party Suppliers</li>
                </ul>
                <p>The project will be completed in Summer 2021 and has been delivered on schedule, using Scrum Methodology.</p>
            </>
        ),
    },
    {
        index: 5,
        title: "GASTAR Sets New Standard in Data Integrity & Management",
        description: "May 1st 2022",
        image: image,
        modalContent: (
            <>
                <p> ENSYTE understands the enormous challenge our clients have with not only managing data across multiple software systems and data sources, but also transforming this data into useful information that can leveraged for decision making.The GASTAR Data Interfaces provide a fully streamlined and automated process between all related customer systems, giving management and users a central point for decision making.The ENSYTE Team has experience providing integration with a wide variety of systems, including Customer Information Systems(CIS), Measurement, Weather, SCADA, Platt’s pricing, SAP, ORACLE C2M, GL Financial Accounting, Invoicing, and more.
                    < br />
                    <br />

                    We recently completed a project to integrate the GASTAR Product with Oracle’s Customer to Meter(C2M) system.The project involved building both an in -bound interface to bring key data points into GASTAR from C2M, as well as an outbound interface to export financial data back to C2M for invoicing and accounting.The in -bound interface automatically imports all relevant data pertaining to Retail Choice Customers, Cycle Read Usage, Daily Read Usage, Weather and SCADA, into GASTAR.The outbound interface automatically exports all invoice data out of GASTAR to the C2M System, which involved database and access screen changes to update the software to GASTAR’s latest standards.
                    < br />
                    <br />

                    We also recently completed a data migration and integration project for another client, which involved creating new interface processing to schedule batch jobs.The solution included system generated notifications to users for any issues with the interface processing, which is critical and time sensitive for the business.The system generated notifications contain detailed information about any failures, as well as exceptions, so that the user can troubleshoot as needed.Front end functionality was created for users to manage the interface, inclusive of running them manually if needed.Only designated users with specified roles and permissions are able to run the processes, providing additional layers of security to the system.The combination of the automated interface processes with the option to manage them manually provides significant flexibility and control for GASTAR users.
                    < br />
                    <br />
                    The GASTAR product sets a new standard in data integrity and management, as well as security, for these mission critical processes for our clients, giving management and users a central point for decision making, reducing time for data entry and reconciliation, and eliminating the risk of human error or other exposures caused by manual processes.
                </p>
            </>
        ),
    },
    {
        index: 6,
        title: "ENSYTE Enhances Producer Services Solution",
        description: "March 1st 2022",
        image: customizedSolutions02,
        modalContent: (
            <>
                <p> ENSYTE is rolling out enhancements to its GASTAR Producer Services Solution to include:</p>
                <ul>
                    <li>Better Logic for Capturing Natural Gas Sales Netback Quantity and Value;</li>
                    <li>Better Identification of Imbalances at Interconnect Points between Pipelines and Gathering Systems;</li>
                    <li>Full Accounting for Buy/Sell, Transportation and Storage Transactions</li>
                    <li>Improved Reporting of Intra-Month Positions and Post Accounting Month Transaction Summary Data</li>
                    <li>Setup of Central Delivery Point (CDP) Forecast and daily updates automatically updating sales pools</li>
                </ul>
                <p>The goal of the enhancements is to provide a Producer Sales Module, along with an integrated Gathering Netback Module, that has the capability for netting back quantity (MMBTU) and value ($/MMBTU) and processing wellhead data to generate Owner Netback, as well as gas severance taxes per Operator total production.</p>

                <p>The solution also includes automated Prior Period Adjustment (PPA) calculations with application PPA to current month statements.  ENSYTE has significant experience in this area with over 30 years of development work for oil and gas production companies and gathering systems.  A recent implementation of the software manages approximately 6,000 natural gas wells and approximately 400 producers. </p>

            </>
        ),
    },
    {
        index: 7,
        title: "Happy Holidays from ENSYTE!",
        description: "December 20th 2020",
        image: img15,
        modalContent: (
            <>
                <p>Happy Holidays to all our clients, partners, and friends!
                    <br />
                    <br />
                    We wish everyone a Wonderful Holiday Season and New Year.
                    <br />
                    <br />
                    ENSYTE is wrapping up the year with significant enhancements to the GASTAR Suite of Products, as well as continued growth of our client base.
                    <br />
                    <br />
                    We look forward to helping you streamline and automate your energy transactions in the new year.</p>
            </>
        ),
    },
    {
        index: 8,
        title: "ENSYTE Signs New Client",
        description: "February 1st 2017",
        image: img16,
        modalContent: (
            <>
                <p>ENSYTE is pleased to announce the addition of one of New England’s largest energy delivery companies to our client base.</p>
                <p>ENSYTE’s flagship natural gas software solution, GASTAR, was evaluated along with other top competing software packages during an extensive Request for Proposal process. GASTAR was selected as the best solution for managing the client’s Retail Choice business practices due to the comprehensive set of features offered ‘out of the box’, as well as ENSYTE’s extensive knowledge of the natural gas business. The client also appreciated ENSYTE’s flexibility to tailor the system to the needs of the company, rather than trying to fit their business processes into a restricted configuration.</p>
                <p>GASTAR will support the Retail Choice business practices for two utilities under the parent company and is delivered with future options for licensing the GASTAR Gas Supply Acquisition, LNG and City Gate Supply Balancing Modules. The client elected to implement the enterprise version of the GASTAR solution, which will be installed in their computer center utilizing a Microsoft SQL Server database. The software is expected to become fully operational in the Summer of 2017.</p>
                <p>The successful competition strengthens ENSYTE’s position as the premier supplier of software to natural gas companies throughout the United States, particularly in the Northeast where GASTAR supports several large multi-utility clients who have implemented the fully integrated Gas Supply / Retail Choice / LNG Suite of Programs or one of the options, such as Retail Choice.</p>
                <p>Click HERE to view GASTAR’s Retail Choice Features.</p>
            </>
        ),
    },
    {
        index: 9,
        title: "Introducing GASTAR Online",
        description: "November 1st 2019",
        image: img17,
        modalContent: (
            <>
                <p>ENSYTE announces the launch of GASTAR Online, a full suite of software applications for natural gas business processes. Mix and match software features from a fully integrated data and application model platform.</p>
                <ul>
                    <li>Full Range of Automated Natural Gas Business Processes from Well to Customer Meters</li>
                    <li>Quick and Easy Implementation of the Base Packages with Customization Available</li>
                    <li>Secure, Reliable Infrastructure with An Established Hosting Partner</li>
                    <li>Client Specific Implementation Assurance Plan for Maximum Benefit</li>
                    <li>Computing Resources, Software Features and Dedicated Customer Support Included</li>
                    <li>Low, Introductory Monthly Usage Fees with no Upfront License Fees</li>
                </ul>
                <p>GASTAR Online for Gas Supply and Gas Acquisition</p>
                <ul>
                    <li>Counter Parties and Contracts</li>
                    <li>NAESB Compliant Gas Purchases / Sales with WACOG Cost Tracking & Platt’s Interface</li>
                    <li>Storage with WACOG Injection Cost, Full Value Withdrawal, and Typical Pool Attributes</li>
                    <li>Nominations & Scheduling and Capacity Release Processes to Shadow the Pipeline Transactions</li>
                    <li>Asset Management for Both Storage and Transportation Contracts</li>
                    <li>City Gate Balancing Including SCADA and Weather Interface with Daily Gas Plan Tracking</li>
                    <li>LNG & Propane Peaking Module with Purchases, Sales, and Storage Features</li>
                    <li>Gas Accounting to Include Shadow G/L Accounts, Accrual, Invoicing and Expense Reconciliation</li>
                    <li>Flexible MS Excel Exports for Ad Hoc Reporting and a Suite of KPI Reports</li>
                </ul>
                <p>GASTAR Online for Customer Retail Choice and End User Transportation</p>
                <ul>
                    <li>Utilizes Standard GASTAR Contracts, Counter Party Modules from the Gas Acquisition System</li>
                    <li>Shadow BA-CIS Module to Parallel Customer Attributes in the Client CIS System</li>
                    <li>Import Cycle Read & Daily Read Measurement from Client Sources</li>
                    <li>Setup Third Party Marketers as Agents or Pool Managers with EBB Web Portal Support</li>
                    <li>Manage Flowing Gas Nominations via the EBB with Daily Validation of CG Pool Receipts</li>
                    <li>Calculate Demand Statistics such as Baseload, Heat Load/HDD, Design Day, Capacity, Etc.</li>
                    <li>Weather Import and Customer & Pool Gas Day Forecast for Cycle Read Business Processes</li>
                    <li>Imbalance Settlement of Daily Read and Cycle Read Pools with Formulae Based Calculations</li>
                    <li>Imbalance Trading on the EBB with full trading partner offers and trade confirmations</li>
                    <li>Interruption Management Logic for Interruptible Transportation Customers</li>
                    <li>Invoice Generation for Pool Mangers Either Issued Directly or Passed to the CIS System</li>
                </ul>
                <p>GASTAR Online for Producer Marketing Services</p>
                <ul>
                    <li>Two Integrated Modules for Sales Business Processes and Net Back Revenue to Owner Interest</li>
                    <li>Gas Sales Modules includes Features Available in the Gas Acquisition Suite</li>
                    <li>Netback Revenue to Interest Owners Includes Gross Revenue, Deducts, and Net Revenue</li>
                    <li>Gathering System Setup and Maintenance Including Laterals, Meters, and Facilities</li>
                    <li>Pro-Rata and Directed Allocations of CDP Measurement to Well Meters over a Network</li>
                    <li>EBB-Web Portal Support for Owner / Operators and WI/RI Owners as Participation Factors</li>
                    <li>Measurement Data Capture via Interface to the Company Measurement Sources: Field Direct, EFM, Chart Reading Files, Etc.</li>
                    <li>Pooling and Transportation Services for Third Party Shippers on Gathering Systems</li>
                </ul>
            </>
        ),
    },
    {
        index: 10,
        title: "ENSYTE Celebrates 20 Years with UGI",
        description: "August 1st 2015",
        image: img18,
        modalContent: (
            <>
                <p>ENSYTE’s longest tenure client, UGI Utilities, held a 20th Anniversary Celebration to celebrate 20 years of working with the GASTAR product. We are blessed to have such wonderful relationships with our clients and looking forward to many more!</p>
            </>
        ),
    },
    {
        index: 11,
        title: "New Gas Supply / City Gate Planning Feature",
        description: "October 1st 2019",
        image: img19,
        modalContent: (
            <>
                <p>ENSYTE has been working hard on a new feature to support Gas Day planning and tracking of scheduled and measured gas at the City Gate. It is delivered through a graphical program that displays the City Gate configuration, weather and gas plan summary, and scheduled gas delivered to the City Gate. The feature is being implemented for one of our current clients and will be offered to all clients soon.</p>

                <p>The module includes:</p>
                <ul className="list-padding">
                    <li>Import of weather data from the LDC’s vendor in multiple occurrences during the day.</li>
                    <li>Direct entry or import of the Gas Day demand based on weather.</li>
                    <li>Import SCADA data from the LDC’s SCADA system to provide an immediate next day update of measured verses schedule gas at the city gate. Update can be secured via download or direct entry for pipeline data to support an end of month reconciliation.</li>
                    <li>Import third party scheduled and actual data for transportation customers to provide a full picture of the gas balances at the city gate. ENSYTE offers an integrated module that can be added at any time to provide this service.</li>
                    <li>This is a unique module designed to provide executives, managers and users with a quick snapshot view of the daily gas plan, supply and demand, as well as the ability to look back to prior days to observe the actual conditions.</li>
                    <li>The module includes the ability to quickly view Purchases, Scheduled Gas, WACOG Data, and the Gas Plan Summary.</li>
                </ul>
            </>
        ),
    },
    {
        index: 12,
        title: "Why is GASTAR™ the Preferred Solution?",
        description: "February 1st 2019",
        image: img20,
        modalContent: (
            <>
                <p>GASTAR is the preferred natural gas management software for some of the largest natural gas utilities in the United States, and we have put together a list of some of the top value points of the GASTAR solution.</p>
                <p><strong>GASTAR VALUE POINTS:</strong></p>

                <ul>
                    <li>20+ years serving LDC clients in the United States</li>
                </ul>
                <p><strong>Benefit:</strong> Long term, successful product with an established LDC footprint</p>
                <ul>
                    <li>Built from the “ground up” as a LDC software solution – not as a pipeline solution with LDC business features “tacked on”</li>
                </ul>
                <p><strong>Benefit:</strong> Targeted features and processes driving financial and business efficiency</p>
                <ul>
                    <li>Thoroughly vetted by Internal Audit teams and Big 6 Accounting firms as a secure and SOX compliant software solution</li>
                </ul>
                <p><strong>Benefit:</strong> Credible internal controls and regulatory acceptance</p>
                <ul>
                    <li>Supports all LDC business functions: Gas Accounting, Contracts, Purchase and Sales, Nominations & Scheduling, Storage, Gas Supply Planning, City Gate Balancing, Retail Choice & Reporting</li>
                </ul>
                <p><strong>Benefit:</strong> Comprehensive functionality proven in a number of high profile LDC clients</p>
                <ul>
                    <li>Seamless, separate and secure transaction management for multiple LDCs within the same database structure, while supporting separate business processes. “No 2 LDC’s are alike.”</li>
                </ul>
                <p><strong>Benefit:</strong> A single solution for a set of common and dedicated features for each LDC</p>
                <ul>
                    <li>Built on current Microsoft technology with internal enhancement projects to stay up to date</li>
                </ul>
                <p><strong>Benefit:</strong> Obsolescence is not an issue nor is ongoing maintenance upgrades</p>
                <ul>
                    <li>Life cycle cost is anticipated to be substantially lower than those of ENSYTE’s primary competitors (Initial software license, implementation, and on-going support services)</li>
                </ul>
                <p><strong>Benefit:</strong> Lower overall cost of ownership for a superior LDC oriented software product.</p>
                <ul>
                    <li>Clients appreciate the dedicated support team and the personal approach to providing training and technical support.</li>
                </ul>

                <p><strong>Benefit:</strong> Personalized service promotes efficiency and full benefits from the investment
                    <br />
                    Click HERE to learn more about GASTAR LDC..</p>
            </>
        ),
    },
    {
        index: 13,
        title: "ENSYTE Signs First GASTAR Online Client",
        description: "November 1st 2019",
        image: img21,
        modalContent: (
            <>
                <p>We are excited to announce our first client for GASTAR Online, a hosted version of our GASTAR product, offered at a monthly subscription fee to smaller and mid-size companies. GASTAR Online provides smaller to mid-size companies a cost-effective alternative to traditional license-based pricing models, with flexible pricing structures so that the software can grow with your company.</p>
                <p>ENSYTE has partnered with Air Desk, a leading cloud technology provider for businesses world-wide, to offer the hosted software in a best-in-class operational environment with state of the art security defenses. The partnership offers the following benefits to GASTAR Online clients:</p>
                <p>Expertise</p>
                <ul>
                    <li>Foundational leaders in establishing cloud service technology</li>
                    <li>Advisors to the early adopters</li>
                    <li>Partners with primary software vendors</li>
                </ul>
                <p>Experience</p>
                <ul>
                    <li>Broad experience with a gamut of business applications and processes</li>
                    <li>Valued partner with certified independent consultants who advise on cloud technology</li>
                    <li>Access to cloud security teams at datacenters world-wide</li>
                </ul>
                <p>Systems</p>
                <ul>
                    <li>Leading edge proprietary technology tuned to the paperless office</li>
                    <li>State-of-the-art security defenses</li>
                    <li>Service delivery engines optimized for the fastest user experience</li>
                    <li>Fast anywhere anytime access to applications and data for mobile devices</li>
                </ul>
                <p>Click HERE to learn more about GASTAR Online..</p>
            </>
        ),
    },
    {
        index: 14,
        title: "ENSYTE Wins Producer Services Client",
        description: "January 12, 2016",
        image: img22,
        modalContent: (
            <>
                <p>January 12, 2016 (Houston, TX) – ENSYTE has won a contract with a Houston-based company to implement a Producer Gas Marketing and Well Meter Netback Solution, offered as a hosted software package to capitalize on the business advantages of an online subscription service, as opposed to a traditional in-house implementation.</p>

                <ul className="list-padding">
                    <li><strong>Producer Gas Supply</strong> – A connected gathering system network of producer supply and central delivery point (CDP) meters to delivery pre-month supply forecasts, daily CDP measurement updates and end of month settlement data. For actual measurement, the solution will accept EFM interfaces, CSV/text files, and manual screen input. The CDP measurement is updated daily with field estimates, uploaded from the IHS Production Explorer software, which is used to update the supply pool on the pipeline.</li>


                    <li><strong>Producer Gas Sales and Transportation Modules</strong> transition from the gathering network to an Intra/Interstate pipeline pooling point for supporting natural gas marketing and sales. The sales modules automatically link the transportation path back to the pool in order to maintain intra-day pool balances and to manage imbalance positions. This integrated process provides a daily estimate of gas available for sale, sales made from the pool and a margin based on the imputed price index for the supply. Pool Balance carry forward combines with current day transactions’ to aid in keeping the imbalance within contract tolerances.</li>

                    <li><strong>Netback Settlement to Working Interest Owners</strong> is performed utilizing a transaction price, such as a 1st of Month Index, and the costs incurred in moving the gas from the wellhead to the sales point. The PRISM solution has a flexible formulae based price/cost module that permits setting up settlement groups containing separate formulae sets. For example, a production stream facing 2 sets of compression will be in a separate group from a single compression cost.</li>



                    <li><strong>Electronic Bulletin Board</strong> – An Online internet portal is used to manage communication with producers. A key feature is publishing invoice backup data onto the EBB for producers to view, document upload and download with notices; and, Input feature for producer forecast data and ability to update that data should producing conditions change.</li>

                    <li><strong>Reporting</strong> – Month end close report listing each supply meter and its netback revenue calculation. With WI Owner ‘Take in Kind”, the system has the ability to apply an ownership factor to split the proceeds to each owner. The project is planned as a multi-utility implementation with a second utility to be addressed next year. A key feature of GASTAR is the ability to seamlessly handle multiple utilities within the same application and database software, further streamlining and simplifying the workflow for managing multiple utilities where consolidation of certain business practices is important. This feature applies to both the off and on-system business practices for the gas utility.</li>


                </ul>
            </>
        ),
    },
    {
        index: 15,
        title: "ENSYTE Wins Major Philadelphia Utility",
        description: "January 12, 2016 ",
        image: img23,
        modalContent: (
            <>
                <p>January 12, 2016 (Houston, TX) – ENSYTE has won a contract with a Houston-based company to implement a Producer Gas Marketing and Well Meter Netback Solution, offered as a hosted software package to capitalize on the business advantages of an online subscription service, as opposed to a traditional in-house implementation.</p>

                <ul className="list-padding">
                    <li><strong>Producer Gas Supply</strong> – A connected gathering system network of producer supply and central delivery point (CDP) meters to delivery pre-month supply forecasts, daily CDP measurement updates and end of month settlement data. For actual measurement, the solution will accept EFM interfaces, CSV/text files, and manual screen input. The CDP measurement is updated daily with field estimates, uploaded from the IHS Production Explorer software, which is used to update the supply pool on the pipeline.</li>


                    <li><strong>Producer Gas Sales and Transportation Modules</strong> transition from the gathering network to an Intra/Interstate pipeline pooling point for supporting natural gas marketing and sales. The sales modules automatically link the transportation path back to the pool in order to maintain intra-day pool balances and to manage imbalance positions. This integrated process provides a daily estimate of gas available for sale, sales made from the pool and a margin based on the imputed price index for the supply. Pool Balance carry forward combines with current day transactions’ to aid in keeping the imbalance within contract tolerances.</li>

                    <li><strong>Netback Settlement to Working Interest Owners</strong> is performed utilizing a transaction price, such as a 1st of Month Index, and the costs incurred in moving the gas from the wellhead to the sales point. The PRISM solution has a flexible formulae based price/cost module that permits setting up settlement groups containing separate formulae sets. For example, a production stream facing 2 sets of compression will be in a separate group from a single compression cost.</li>



                    <li><strong>Electronic Bulletin Board</strong> – An Online internet portal is used to manage communication with producers. A key feature is publishing invoice backup data onto the EBB for producers to view, document upload and download with notices; and, Input feature for producer forecast data and ability to update that data should producing conditions change.</li>

                    <li><strong>Reporting</strong> – Month end close report listing each supply meter and its netback revenue calculation. With WI Owner ‘Take in Kind”, the system has the ability to apply an ownership factor to split the proceeds to each owner. The project is planned as a multi-utility implementation with a second utility to be addressed next year. A key feature of GASTAR is the ability to seamlessly handle multiple utilities within the same application and database software, further streamlining and simplifying the workflow for managing multiple utilities where consolidation of certain business practices is important. This feature applies to both the off and on-system business practices for the gas utility.</li>


                </ul>
            </>
        ),
    },
    {
        index: 16,
        title: "ENSYTE Adds New Reports to GASTAR",
        description: "November 1st 2022",
        image: img22,
        modalContent: (
            <>
                <p>ENSYTE has added several reports to the GASTAR Solution to help natural gas utilities manage their natural gas business process:</p>

                <ul className="list-padding">
                    <li>Supplier Information Listing Report</li>
                    <li>Nomination/Confirmation Difference Report at Supplier Level for Firm and Interruptible Pools</li>
                    <li>Monthly Confirmed Delivery by Contract Report </li>
                    <li>Estimated and Actual Cashout Reports for Firm and Interruptible Pools </li>
                    <li>Estimated and Actual Daily Firm & Interruptible Volumes Report</li>
                    <li>Supplier’s Imbalance Trade Report</li>
                    <li>Customer List at Supplier Level</li>
                    <li>System Level Interface Exceptions Report</li>
                    <li>Storage Inventory Report</li>
                    <li>Physical Purchase and Sales Deals Report </li>
                    <li>Interstate Nominations Summary</li>

                </ul>
            </>
        ),
    },
    {
        index: 17,
        title: "GASTAR Gas Accounting Module",
        description: "September 1st 2022",
        image: img25,
        modalContent: (
            <>
                <p>ENSYTE’s GASTAR Gas Accounting Module provides auditable vendor invoice reconciliation and customer invoicing for off-system and on-system revenue transactions. </p>
                <p>The Module contains the following features for reconciling end of month gas acquisition contract transactions: </p>

                <ul className="list-padding">
                    <li>General Ledger Linking Setup </li>
                    <li>Summarized Data </li>
                    <li>Sub GL Account Detail </li>
                    <li>Transaction Linking Codes </li>
                    <li>Contract Transaction Processing </li>
                    <li>Contraction Linking </li>
                    <li>Error Log Generation </li>
                    <li>Transaction Summary </li>
                    <li>Accrual Processing </li>
                    <li>Mond End Transaction Locking </li>
                    <li>Reconciled Processing </li>
                    <li>Expense & Revenue Transaction Rollup </li>
                    <li>Account Review </li>
                    <li>Manual Insertion of Charges</li>
                    <li>Revenue Invoice Process</li>
                    <li>Invoice Detail Preview</li>
                    <li>Invoice Approval</li>
                    <li>Contract Summary</li>
                    <li>Voucher Numbers</li>
                    <li>Partial Approval</li>
                    <li>Manual Adjustments of Rounding Errors</li>
                    <li>Vendor Invoice Upload</li>
                    <li>Invoice Charge Approval</li>
                    <li>Approvals & Locking</li>
                    <li>Excel Reports</li>


                </ul>
            </>
        ),
    },
    {
        index: 18,
        title: "GASTAR Dashboards",
        description: "December 1st 2022",
        image: dashboard1,
        modalContent: (
            <>
                <p className='mb-1'>ENSYTE is excited to announce a new dashboard for our GASTAR product, the most comprehensive natural gas management solution on the market today.
                </p>
                <p>
                    The GASTAR Dashboard is designed for managers and executives to view high level summary data, as well as visual displays of facilities and other assets.
                </p>
                <div className="text-center mb-4 mt-3">
                    <img src={dashboard1} alt="Accounting Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "25rem" }} />
                </div>
                <p className='mt-5'>
                    The Dashboard includes an Interactive Visual Gas and Fluid Flow Network, which provides clients with the ability to build interactive network nodes and links and setup intelligence for each part of the network.  The network manages Facilities, Gate Stations, Wells, Composition Samples, Meters, Compressors, Liquid Sales Batteries, Gas Sales Meters, and more.
                </p>
                <img src={dashboard2} alt='Node Network Builder' className='imgShadow img-fluid rounded mt-3' style={{ maxHeight: '25rem' }} />
            </>
        ),
    },
    {
        index: 19,
        title: "New Electronic Bulletin Board",
        description: "January 1st 2023",
        image: img1R,
        modalContent: (
            <>
                <p>ENSYTE is excited to announce a new, redesigned Electronic Bulletin Board (EBB) for GASTAR, the most comprehensive software solution for managing natural gas transactions.</p>
                <p>The EBB enables natural gas companies to manage their third party customers, marketers, and / or suppliers in one central location with the following functionality:
                </p>
                <ul className='no-bullets'>
                    <li>Nomination and Confirmation Activity</li>
                    Informational Postings and Notifications
                    <li>Marketer Pool Management</li>
                    <li>Customer Meter Setup / Customer Target Volumes</li>
                    <li>Transportation Customer Contracts</li>
                    <li>Pool Balancing - Residential / Commercial / Industrial</li>
                    <li>Imbalance Trading</li>
                    <li>Critical Period / Interruptions</li>
                    <li>Data Views & Reports</li>
                    <li>Invoicing / Accounting</li>
                </ul>
                <div className="text-center mb-5">
                    <img src={img1R} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                </div>

                <h3 className="blue-text">Nominations Screen</h3>
                <p>GASTAR provides easy access for Marketers and Suppliers to Add and Update Nominations.</p>
                <div className="text-center mb-5">
                    <img src={img4R} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                </div>

                <h3 className="blue-text">Supplier / Marketer Management</h3>
                <p>The GASTAR EBB enables Suppliers and Marketers to independently manage contacts and EBB access.</p>
                <div className="text-center mb-5">
                    <img src={img5R} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                </div>

                <h3 className="blue-text">Daily Pool Reporting & Invoicing</h3>
                <p>Suppliers and Marketers have easy access to daily / monthly cashout reports and invoices.</p>
                <div className="text-center mb-5">
                    <img src={img2R} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                </div>

                <h3 className="blue-text">Daily Imbalance Tolerance UI</h3>
                <p>Suppliers and Marketers can view settlement reports for both interruptible pools and non-interruptible (displayed below) pools.</p>
                <div className="text-center mb-5">
                    <img src={img3R} alt="Services Solutions" className='imgShadow img-fluid rounded' style={{ maxHeight: "60rem" }} />
                </div>
            </>
        ),
    },
    {
        index: 20,
        title: "GASTAR Features for Winter Peak Season",
        description: "February 1st 2023",
        image: img2123,
        modalContent: (
            <>
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
            </>
        ),
    },
    {
        index: 21,
        title: "Vice President, GASTAR Product",
        description: " ",
        image: pimage,
        modalContent: (
            <>
                <p>ENSYTE is excited to announce our new Vice President of the GASTAR Product, Pooja Agarwal.  Pooja has been with ENSYTE for over 10 years and has been instrumental in the implementation of the solution for large natural gas utilities and other energy assets.  She is an outstanding asset to ENSYTE and has helped build processes and procedures across the board to create growth, organization, and consistency both within the company and with clients.  </p>
                <p>
                    Pooja earned her Bachelor of Science in Computer / Information Technology Administration & Management from Kurukshetra University and then went on to earn her Masters of Computer Applications and Computer Science from India.  She also earned her Master’s in Business Administration (MBA) from the University of Houston, where she studied Energy Trading Systems, Energy Value Chain, Business Modeling & Decision Making, and Supply Chain Management
                </p>
                <p>Pooja was a Senior Software Engineer for HCL Technologies and then became a Business Analyst for Jones Apparel Group, where she worked with an offshore development team to build the company’s internal software solutions.  She also worked as a Data Analyst for The Lab Consulting.  She joined ENSYTE through the company’s internship program and became a Project Coordinator, Product Manager, and then Director of the GASTAR Product, a software solution that manages natural gas transactions across the energy value chain.  She has become a Subject Matter Expert (SME) on the product, as well as an energetic and motivated leader for both the project and development teams.  She has built an extensive understanding of the downstream natural gas business and all its associated business processes, building solutions for some of the most complex business processes in the industry.
                </p>
            </>
        ),
    },
    {
        index: 22,
        title: "ENSYTE Wins Natural Gas Utility / Midstream Client",
        description: "April 1st 2023",
        image: imgHg1,
        modalContent: (
            <>
                <p>ENSYTE was selected by a natural gas company in West Virginia to implement the GASTAR product to manage the company’s natural gas utility and associated midstream / gathering assets.</p>
                <p>
                    The implemented solution underscores GASTAR’s ability to handle the full range of business processes across the energy value chain – from wellhead to burner tip.
                </p>
                <p>The following modules will be delivered as part of the integrated software solution:
                </p>

                <ul>
                    <li><u>Deals</u> – Physical Natural Gas Purchases, Sales, Confirmations, Asset Management</li>
                    <li><u>Hedging</u> – Price Indices, Price Volatility Hedging-Futures, Swaps & Call Options</li>
                    <li><u>Off System Nominations & Scheduling</u> – Capacity Release and Storage</li>
                    <li><u>On System Nominations & Scheduling</u> – Gathering Shippers and Large Customers or Agents</li>
                    <li><u>Large Customers & Measurement Data Capture</u> – Interface to Company Systems, Hourly, Daily and Monthly Time Steps, Capture PPA Changes, Measurement Error Detection on Import</li>
                    <li><u>DCQ Customer Settlement</u> – Large Customer Imbalance Calculations and Settlement with Invoice Determinants</li>
                    <li><u>On System Pipeline & Gathering</u></li>
                    <li><u>Wellhead Purchase</u></li>
                    <ul>
                        <li>Well Meter Purchases, Meter Maintenance, Meter Linking for Potential Allocation Networks, Volume and Energy (BTU Factors), Owner Split of Revenue and Expenses </li>
                        <li>Well Meter Purchase and Gathering Invoice Determinants with PPA Processing for Measurement, Rates & Other Attributes</li>
                    </ul>
                    <li><u>Accounting</u></li>
                    <ul>
                        <li>Accounting Sub-Ledger: Shadow Accounts for all Revenue and Expense Account Levels</li>
                        <li>AR & AP Processing for Charge Validation and Reporting</li>
                        <li>Interfaces for Invoicing & Other Data</li>

                    </ul>
                </ul>
                <p>
                    The project is scheduled for completion by the end of this year with other assets to be added subsequently.
                </p>
            </>
        ),
    },
    {
        index: 23,
        title: "GASTAR Product Upgrade",
        description: "March 2024",
        image: Upgrade2024,
        modalContent: (
            <>
                <p>
                    <Link to={'/about'}>ENSYTE</Link> is excited to announce its latest upgrade of the <Link to={'/gastar-overview'}>GASTAR</Link> product, which has been managing complex natural gas business processes for natural gas utilities for over 40 years.  The product has been upgraded several times over the course of its lifecycle with this latest version offered as a fully web-based solution using the popular React programming language, coupled with a .NET 8 framework.  The software upgrade offers a modernized user experience, as well as enhanced responsiveness and high-speed performance.
                </p>

                <p>
                    The latest Microsoft .NET 8 framework provides thousands of performance, stability, and security improvements, as well as platform and tooling enhancements that help increase developer productivity and speed of innovation.  The use of React JS as a programming language radically changes the user experience through increased speed, flexibility, performance, and usability. The React language is used by many of the largest web applications in the world, including Facebook and Instagram.  React JS was developed by Meta and is an open system set of development tools.
                </p>
                <p>
                    <Link to={'/about'}>ENSYTE</Link> offers flexible hosting options for clients, including on-premise hosting, hosting on a client’s web services environment (such as AWS), or a full Software as a Service (SaaS) model whereby ENSYTE hosts the solution on its Microsoft Azure environment.  The SaaS model provides numerous benefits to clients, most importantly the setup and maintenance of both the product’s hardware and infrastructure are handled by the ENSYTE Support team, saving clients significant time, expenses, and resources.  The SaaS environment provides optimal reliability, server configurations that minimize downtime, and the highest level of network security.
                </p>
                <p>
                    <Link to={'/about'}>ENSYTE</Link> is proud to bring the longevity of experience and depth of understanding of the natural gas industry together with the latest technology to deliver a powerful and effective solution for natural gas companies to manage their business.
                </p>
                <p>
                    <Link to={'/contact'}>Contact</Link> us for a demo of the new GASTAR!
                </p>
                {/* <Link to="/contact" className="btn btn-primary">Contact Us</Link> */}
            </>
        ),
    },
    {
        index: 24,
        title: "GASTAR Selected for Retail Choice Solution",
        description: "August 2024",
        image: Philly2024,
        modalContent: (
            <>

                <p>
                    <Link to={'/about'}>ENSYTE</Link> has been selected to implement the <Link to={'/gastar-retail-choice'}>GASTAR Choice Solution</Link> for a natural gas utility in Pennsylvania after the client evaluated current retail choice software providers.
                </p>

                <p>
                    <Link to={'/gastar-overview'}>GASTAR</Link> is recognized throughout the industry as one of the most comprehensive and sophisticated solutions to handle the complexity of the Utilities Choice business, as noted below. ENSYTE is also one of the few vendors who offers an Integrated Gas Supply and Retail Choice Solution to manage both sides of these business processes for natural gas utilities. We have some customers who utilized the Gas Supply Solution, some who have implemented the Retail Choice Solution, and some who utilize the integrated system.
                </p>

                <p>
                    The Retail Choice Solution for this client will manage all business processes pertaining to the company’s Gas Choice program, under which suppliers provide competitive natural gas supply to transportation customers on the company’s natural gas pipeline. GASTAR will contain business logic to handle both the Low Volume Transportation (LVT) and High Volume Transportation (HVT) customers.
                </p>

                <p>Key business process functionality includes:</p>

                <ul>
                    <li>Counterparty Setup</li>
                    <li>Contracts Setup</li>
                    <li>Pipeline Points</li>
                    <li>Tariff Rates</li>
                    <li>Upload of Index Prices Automation</li>
                    <li>Supplier Pooling of LVT and HVT Customers, plus High Profiles Non-Pooled Customers</li>
                    <li>Synchronization &amp; Integration of Customer Data with Company’s CIS System</li>
                    <li>Interface with the Company’s Measurement Solution – Raw Data Feeds or from CIS</li>
                    <li>Pool Demand Forecasting for ADDQ Choice Pools</li>
                    <li>Supplier Natural Gas Pool Nomination Updates</li>
                    <li>Automated Confirmation Process for Supplier Pool Nominations</li>
                    <li>Nominations of Company Peaking Supply – Both LNG &amp; Propane with Storage Processing</li>
                    <li>LVT and HVT Pool Settlements with Interruptions, Imbalance Trading, and Tiered Cashouts</li>
                    <li>End of Month (EOM) Close Processes including Multi-Month Prior Period Adjustments</li>
                    <li>Supplier Invoice Calculation with Manual Additions &amp; Interface to Company’s CIS Solution</li>
                    <li>Ability to Issue &amp; Track Supplier Invoices</li>
                    <li>Reports Generated as Excel Exports from Intensive Grid Data Presentations</li>
                </ul>

                <p>We are excited to continue growing our footprint of natural gas utility clients.</p>

                <p><Link to={'/contact'}>Contact Us</Link> to learn more about our GASTAR Choice Solution.</p>


            </>
        ),
    },
    // {
    //     index: 25,
    //     title: " ",
    //     description: " ",
    //     image: ,
    //     modalContent: (
    //         <>

    //         </>
    //     ),
    // },
    // {
    //     index: 26,
    //     title: " ",
    //     description: " ",
    //     image: ,
    //     modalContent: (
    //         <>

    //         </>
    //     ),
    // },
    // {
    //     index: 27,
    //     title: " ",
    //     description: " ",
    //     image: ,
    //     modalContent: (
    //         <>

    //         </>
    //     ),
    // },
    // {
    //     index: 28,
    //     title: " ",
    //     description: " ",
    //     image: ,
    //     modalContent: (
    //         <>

    //         </>
    //     ),
    // },
    // {
    //     index: 29,
    //     title: " ",
    //     description: " ",
    //     image: ,
    //     modalContent: (
    //         <>

    //         </>
    //     ),
    // },


];

export default newsData;
