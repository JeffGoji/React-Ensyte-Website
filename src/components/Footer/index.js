import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <h6 className="text-center">© 2022 ENSYTE Energy Software Int’l, Inc. | <NavLink to='/privacy' className='link'>Privacy Policy</NavLink> | Custom Web Design by Jeffrey Anderson-Lester</h6>
        </footer>
    )
}

export default Footer;