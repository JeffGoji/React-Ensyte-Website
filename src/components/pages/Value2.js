import value1 from '../../assets/img/gastar-overview-01.png'
import { useEffect } from 'react'

function Value2(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='row justify-content-center bg-lighter-grey rounded'>
            <h2 className="card-title mb-5 mt-5 text-center">GASTAR Value Proposition</h2>
            <div className="col-lg-4 col-sm-12 mt-2 mb-5 order-last justify-content-start">


                <ul>
                    <li>Customer Focused with Support Services</li>
                    <li>Trusted Business Partner</li>
                    <li>Innovator Matching Business Needs with Functionality</li>
                    <li>Empower the User Community</li>
                    <li>Commitment to Excellence in Completing Projects</li>
                    <li>Product Life Cycle Support</li>
                    <li>Cost-Effective License & Implementation</li >
                    <li>Low & Very Competitive Life Cycle Cost</li>
                    <li>Improved Internal & External Communication</li>
                    <li>Reduce Financial and Organizational Risk</li>
                    <li>Integration with Company Systems & Policies</li>
                    <li>Faster and more Focused Decision Making</li>
                    <li>Comprehensive Reporting-Data Views & Excel Exports</li>
                    <li>Comprehensive and Current Security Provisions</li>
                    <li>Support for Sarbanes Oxley and other quality
                        standards</li >
                </ul>
            </div>

            <div className="col-lg-4 col-sm-12 mt-3">
                <img src={value1} alt="Product" className="img-fluid rounded imgShadow mb-3 order-first" />
            </div>


        </div>
    )
}

export default Value2;