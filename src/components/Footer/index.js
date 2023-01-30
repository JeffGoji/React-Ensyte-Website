import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div className='row'>
                <h6 className="text-center">© 2023 ENSYTE Energy Software Int’l, Inc. | <NavLink to='/privacy' className='link-white'>Privacy Policy | </NavLink><Link className='link-white' to={{ pathname: "https://www.linkedin.com/company/ensyte-energy-software-international/" }} target="_blank">LinkedIn</Link></h6></div>
            <div className='row justify-content-center text-center'><h6>Custom Web Design by Jeffrey Anderson-Lester</h6>
            </div>
        </footer>
    )
}

export default Footer;