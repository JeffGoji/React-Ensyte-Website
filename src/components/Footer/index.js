import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <h6 className="text-center text-white">© 2022 ENSYTE Energy Software Int’l, Inc. | <NavLink to='/privacy' className='link text-white'>Privacy Policy</NavLink> | Custom Web Design by Jeffrey Anderson-Lester</h6>
        </footer>
    )
}

export default Footer;